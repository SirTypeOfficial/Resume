'use strict';

/**
 * Render every ATS resume HTML under career-hub/tailored-resumes/ to a
 * selectable A4 PDF sitting next to the source file.
 *
 * Skips archive/ and any filename that looks like a print template.
 * Uses @page from the HTML (preferCSSPageSize) and waits for web fonts
 * (Inter / Vazirmatn) before Chromium prints.
 *
 * Usage: npm run build:pdf
 */

const fs = require('fs/promises');
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer');

const ROOT = path.resolve(__dirname, '..');
const RESUMES_DIR = path.join(ROOT, 'career-hub', 'tailored-resumes');
const SKIP_DIR_NAMES = new Set(['archive']);
const SKIP_NAME_RE = /template/i;
const GOTO_TIMEOUT_MS = 60_000;
const NETWORK_IDLE_MS = 20_000;

function repoRel(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

async function collectHtmlFiles(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error(`Resume directory not found: ${repoRel(dir)}`);
    }
    throw err;
  }

  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIR_NAMES.has(entry.name.toLowerCase())) {
        continue;
      }
      files.push(...(await collectHtmlFiles(full)));
      continue;
    }
    if (!entry.isFile()) {
      continue;
    }
    if (!entry.name.toLowerCase().endsWith('.html')) {
      continue;
    }
    if (SKIP_NAME_RE.test(entry.name)) {
      continue;
    }
    files.push(full);
  }
  files.sort((a, b) => a.localeCompare(b));
  return files;
}

async function loadResume(page, fileUrl) {
  await page.goto(fileUrl, { waitUntil: 'load', timeout: GOTO_TIMEOUT_MS });
  try {
    await page.waitForNetworkIdle({ idleTime: 500, timeout: NETWORK_IDLE_MS });
  } catch {
    // Font CDNs sometimes keep a socket open. fonts.ready is the real gate.
  }
  await page.evaluateHandle('document.fonts.ready');
}

async function launchBrowser() {
  const args = ['--disable-dev-shm-usage', '--font-render-hinting=none'];
  const attempts = [
    { label: 'Google Chrome', options: { headless: true, args, channel: 'chrome' } },
    { label: 'Microsoft Edge', options: { headless: true, args, channel: 'msedge' } },
    { label: 'bundled Chromium', options: { headless: true, args } },
  ];
  const errors = [];
  for (const attempt of attempts) {
    try {
      const browser = await puppeteer.launch(attempt.options);
      console.log(`Using ${attempt.label}.`);
      return browser;
    } catch (err) {
      const message = err && err.message ? err.message : String(err);
      errors.push(`${attempt.label}: ${message}`);
    }
  }
  throw new Error(
    `Could not launch a browser. Install Google Chrome or Microsoft Edge, or unset skipDownload in .puppeteerrc.cjs.\n${errors.join('\n')}`
  );
}

async function renderPdf(page, htmlPath) {
  const pdfPath = htmlPath.replace(/\.html$/i, '.pdf');
  await loadResume(page, pathToFileURL(htmlPath).href);
  await page.pdf({
    path: pdfPath,
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
  });
  return pdfPath;
}

async function main() {
  const htmlFiles = await collectHtmlFiles(RESUMES_DIR);
  if (htmlFiles.length === 0) {
    console.error('No HTML resumes found under career-hub/tailored-resumes/ (archive/ and *template* skipped).');
    process.exit(1);
  }

  console.log(`Found ${htmlFiles.length} HTML file(s). Launching browser…`);

  let browser;
  let failed = 0;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.emulateMediaType('print');

    for (const htmlPath of htmlFiles) {
      const relHtml = repoRel(htmlPath);
      try {
        console.log(`Rendering ${relHtml} …`);
        const pdfPath = await renderPdf(page, htmlPath);
        console.log(`OK  ${repoRel(pdfPath)}`);
      } catch (err) {
        failed += 1;
        const message = err && err.message ? err.message : String(err);
        console.error(`FAIL ${relHtml}: ${message}`);
      }
    }
  } catch (err) {
    const message = err && err.message ? err.message : String(err);
    console.error(`Pipeline failed: ${message}`);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  if (failed > 0) {
    console.error(`Done with ${failed} failure(s).`);
    process.exit(1);
  }

  if (process.exitCode) {
    return;
  }
  console.log('All PDFs written.');
}

main().catch((err) => {
  const message = err && err.message ? err.message : String(err);
  console.error(`Unhandled error: ${message}`);
  process.exit(1);
});
