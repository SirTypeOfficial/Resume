# Offline gold ERP | ERP طلا با فاکتور آفلاین

**Role file:** [07-ayar-plus.md](../experiences/07-ayar-plus.md)  
**Employer:** Ayar Plus / عیار پلاس  
**Employment:** Part-time / Remote Contractor (Mehr 1404 – Shahrivar 1405)  
**Market:** Kuwait gold shops; work done remotely from Iran  
**Overlap:** hours outside the Pazhoohan full-time On-site/Hybrid contract; no conflict of interest recorded in the vault

LinkedIn Featured pin: this page, not the whole role file.

---

## 🇮🇷 فارسی

### مسئله و چالش معماری

کارفرما نرم‌افزار حسابداری اختصاصی بازار کویت را داشت. کار من فرانت .NET MAUI روی .NET 10 بود: XAML چندزبانه، ERP طلا (موجودی، محاسبات طلا، حسابداری) متصل به بک‌اند PHP. اپ روی Google Play بود؛ انتشار نباید کار مشتری را قطع می‌کرد. طلافروشی باید در قطعی شبکه هم فاکتور صادر می‌کرد. کلاینت ویندوز روی LAN باید کلاینت اندروید را پیدا می‌کرد و درخواست‌ها را تا آنلاین شدن صف می‌کرد.

### راهکار و Trade-off

صدور فاکتور آنلاین و آفلاین، کشف کلاینت اندروید از کلاینت ویندوز، و صف درخواست را در همان کلاینت‌ها نگه داشتم. CI/CD خروجی Android و iOS را روی Google Play و App Store می‌فرستاد. کارتخوان مغازه Civil ID را اسکن می‌کرد؛ عکس کارت روی ImageKit ذخیره می‌شد. بازنویسی کراس‌پلتفرم را روی Bit Platform شروع کردم و دادهٔ قدیمی را منتقل کردم؛ برای رسید و فاکتور از پکیج PDF استفاده کردیم. هزینه آفلاین: صف باید بعد از برگشت شبکه با سرور PHP یکی شود.

### دستاورد (X-Y-Z)

- صدور فاکتور را هم آنلاین هم آفلاین نگه داشتم، با سنجش صف درخواست تا آنلاین شدن و پیدا شدن کلاینت اندروید از کلاینت ویندوز روی شبکه، از طریق همان کلاینت‌های .NET MAUI.
- فرانت ERP طلا را روی MAUI جلو بردم، با سنجش موجودی و محاسبات طلا و حسابداری روی کلاینت متصل به PHP، از طریق XAML چندزبانه و .NET 10.
- انتشار فروشگاهی را بدون قطع کار مشتری نگه داشتم، با سنجش پابلیش خودکار Android و iOS روی Google Play و App Store، از طریق CI/CD.
- اسکن Civil ID را به گردش طلافروشی کویت وصل کردم، با سنجش ذخیرهٔ عکس کارت روی ImageKit، از طریق اتصال به کارتخوان مغازه.
- بازنویسی Bit Platform را با مهاجرت دادهٔ قدیمی و چاپ PDF رسید و فاکتور شروع کردم.

---

## 🇬🇧 English

### Problem and architectural challenge

The employer had custom accounting software for the Kuwait market. My work was the .NET MAUI frontend on .NET 10: multilingual XAML and a gold ERP (inventory, gold math, accounting) talking to a PHP backend. The app was already on Google Play, so store releases could not interrupt live customers. Shops still needed to issue invoices when the network was down. A Windows client on the LAN had to discover the Android client and queue requests until the app came back online.

### Solution and trade-off

Online and offline invoicing, Windows-to-Android discovery, and the request queue lived in those clients. CI/CD published Android and iOS to Google Play and the App Store. Shop card readers scanned Civil ID; card photos went to ImageKit. I started a Bit Platform rewrite, migrated legacy data, and used PDF packages for receipts and invoices. The cost of the offline path is reconciling the queue with the PHP server once the shop is back online.

### Achievement (X-Y-Z)

- Architected online and offline invoicing with a request queue and Windows-to-Android LAN discovery so gold shops could issue invoices while offline.
- Engineered the gold ERP frontend on .NET MAUI and .NET 10 so inventory, gold calculations, and accounting ran on a multilingual XAML client talking to PHP.
- Streamlined store releases through CI/CD so Android and iOS published to Google Play and the App Store without interrupting live customers.
- Engineered Civil ID scanning into the Kuwait gold-shop flow, storing card photos on ImageKit, by connecting shop card readers.
- Started the Bit Platform rewrite, migrating legacy data and adding PDF print for receipts and invoices.

## ATS Keywords

`.NET 10` `.NET MAUI` `Bit Platform` `XAML` `gold ERP` `offline invoicing` `PHP` `CI/CD` `Google Play` `App Store` `ImageKit` `Civil ID` `Kuwait` `part-time` `remote contractor`
