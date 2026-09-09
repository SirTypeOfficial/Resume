# Realtime dispatch MVP | دیسپچ بلادرنگ سرویس مدارس

**Role file:** [06-ertebatat-pazhouhan.md](../experiences/06-ertebatat-pazhouhan.md)  
**Employer:** Ertebatat Pazhoohan Matin / ارتباطات پژوهان متین  
**Employment:** Full-time / On-site-Hybrid (primary official role, Tir 1404 – end of Tir 1405)  
**Product:** municipal school-transport platform (Shiraz, Isfahan, Qazvin)

LinkedIn Featured pin: this page, not the whole role file.

---

## 🇮🇷 فارسی

### مسئله و چالش معماری

پلتفرم سازمانی سرویس مدارس روی C# و Onion بود و به شهرداری‌ها فروخته می‌شد. در بعضی شهرها بیش از ۲۰۰ هزار کاربر داشت. حسابداری، درگاه پرداخت و تسویه بین ناوگان، سرویس، راننده، دانش‌آموز و ولی روی همان هسته می‌نشست. نقش بازرس باید پلاک را با ناوگان شرکت تطبیق می‌داد. شرکت یک MVP سفر شبیه اسنپ می‌خواست که به مشتری خودش بدهد: درخواست، قبول یا رد راننده، داشبورد، مشاهده زنده ناوگان.

### راهکار و Trade-off

MVP سفر را روی .NET 10، PostgreSQL با Polygon، SignalR و Redis ساختم. درخواست به راننده می‌رفت؛ قبول یا رد می‌کرد؛ پنل ادمین ناوگان را با SignalR می‌دید. Redis وضعیت زنده را نگه می‌داشت. هزینه این جداسازی این است که مدل خواندن و نوشتن و وضعیت ناوگان باید هم‌خوان بمانند.

برای بازرس، پلاک‌خوان خودکار (ALPR) را با Python و FastAPI ساختم: عکس می‌گرفت و متن پلاک را برمی‌گرداند. اپ نیتیو سفیر مهر را در بدو ورود با Kotlin برای مدیریت ناوگان تحویل دادم.

### دستاورد (X-Y-Z)

- MVP سفر را برای ارائه به مشتری شرکت ساختم، با سنجش درخواست، قبول یا رد راننده، داشبورد و مشاهده ناوگان در ادمین، از طریق .NET 10، PostgreSQL Polygon، SignalR و Redis.
- پلاک‌خوان را به گردش بازرس وصل کردم، با سنجش برگشت متن پلاک از روی عکس، از طریق Python و FastAPI.
- اپ سفیر مهر را با Kotlin تحویل دادم، با سنجش در دسترس بودن اپ مدیریت ناوگان برای مشتری، از طریق طراحی در بدو ورود.
- حسابداری چندنقشه را روی همان پلتفرم نگه داشتم، با سنجش بیش از ۲۰۰ هزار کاربر در بعضی شهرها، از طریق کار روی حساب‌وکتاب و درگاه پرداخت.

---

## 🇬🇧 English

### Problem and architectural challenge

The school-transport platform ran on C# and Onion Architecture and was sold to municipalities. Some cities had more than 200,000 users. Accounting, the payment gateway, and settlement among fleets, services, drivers, students, and parents sat on the same core. Inspectors needed to match a plate to the company fleet. The company wanted a Snapp-like trip MVP for its own customers: request, driver accept or reject, a dashboard, and live fleet in admin.

### Solution and trade-off

I built that trip MVP on .NET 10, PostgreSQL with Polygon, SignalR, and Redis. A trip request went to the driver, who accepted or rejected it. SignalR showed the fleet in the admin panel. Redis held live fleet state. The cost is keeping the read/write path and fleet state consistent.

For inspectors I built ALPR in Python and FastAPI: a photo in, plate text out. At the start I designed Safir Mehr, a native Kotlin Android app for fleet management.

### Achievement (X-Y-Z)

- Architected a Snapp-like trip MVP on .NET 10, PostgreSQL Polygon, SignalR, and Redis covering request, driver accept or reject, a dashboard, and live fleet in admin.
- Engineered ALPR into the inspector flow, returning plate text from a photo, with Python and FastAPI.
- Engineered Safir Mehr as a native Kotlin Android client so customers had a fleet-management app from day one.
- Kept multi-role accounting and the payment gateway correct for more than 200,000 users in some cities.

## ATS Keywords

`.NET 10` `SignalR` `Redis` `PostgreSQL` `Polygon` `ALPR` `FastAPI` `Kotlin` `Safir Mehr` `school transport` `200k users` `Onion Architecture`
