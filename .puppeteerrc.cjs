/** @type {import('puppeteer').Configuration} */
module.exports = {
  // storage.googleapis.com (chrome-for-testing) is often blocked (HTTP 403).
  // generate-pdf.js then uses the machine's Chrome or Edge via `channel`.
  skipDownload: true,
};
