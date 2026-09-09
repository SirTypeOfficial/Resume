# Electricity-distribution microservices | میکروسرویس اتوماسیون توزیع برق

**Role file:** [03-parsia-afzar.md](../experiences/03-parsia-afzar.md)  
**Employer:** ParsiaAfzar FaraAndishanNovin / پارسیا افزار فرااندیشان نوین  
**Period:** Oct 2020 – Jan 2023 (Mehr 1399 – Dey 1401)  
**Operators in the vault:** Bushehr, Mazandaran, Greater Tehran, Arak, and other cities

This is the Microservices / CQRS / RabbitMQ writeup for Featured or a tailored resume. Dates and operators stay as in the role file.

---

## 🇮🇷 فارسی

### مسئله و چالش معماری

ورود با پشتیبانی سامانه اتوماسیون MVC بود که در تولید کار می‌کرد، اما ساختار کد برای نگهداری چند شرکت توزیع مناسب نبود. همان سامانه را توزیع برق بوشهر، مازندران، تهران بزرگ، اراک و شهرهای دیگر استفاده می‌کردند. سیستم تیکت داشتیم؛ پاسخ تیکت، توسعه و رفع اشکال روی همان MVC بود. بعد از تسلط، پروژه‌های اتوماسیون جدا و روی همان پایه مانده بودند.

### راهکار و Trade-off

اول مسیر پشتیبانی روی MVC موجود بود، نه بازنویسی از روز اول. بعد بازنویسی و یکپارچه‌سازی را با Microservices، CQRS، RabbitMQ، DDD، Vue.js، Monitoring و .NET Core پیاده کردیم. CQRS و RabbitMQ بار نوشتن سنگین توزیع برق را جدا می‌کنند؛ هزینه آن حفظ تطابق مدل خواندن و نوشتن است. جدا از آن، CMS سایت شرکت را با ASP.NET Core MVC نوشتم.

### دستاورد (X-Y-Z)

- اتوماسیون توزیع برق را در تولید نگه داشتم، با سنجش پاسخ تیکت، توسعه و رفع اشکال برای بوشهر، مازندران، تهران بزرگ، اراک و شهرهای دیگر، از طریق پشتیبانی همان MVC.
- بازنویسی یکپارچه را پیش بردم، با سنجش رفتن از چند پروژهٔ جدا روی MVC به یک سامانه مبتنی بر Microservices، از طریق CQRS، RabbitMQ، DDD، Vue.js، Monitoring و .NET Core.
- سایت شرکت را روی CMS اختصاصی گذاشتم، با سنجش به‌روز شدن محتوا از همان CMS، از طریق ASP.NET Core MVC.

---

## 🇬🇧 English

### Problem and architectural challenge

I joined on support for an electricity-distribution automation product that already ran in production as separate MVC codebases. The structure was a poor fit for several distribution companies on the same product. Operators in the vault include Bushehr, Mazandaran, Greater Tehran, Arak, and other cities. Tickets, fixes, and feature work stayed on that MVC until I knew the domain well enough to propose a rewrite.

### Solution and trade-off

Support on the existing MVC came first. Then we unified the automation projects onto Microservices with CQRS, RabbitMQ, DDD, Vue.js, monitoring, and .NET Core. CQRS and RabbitMQ isolate heavy write load; the cost is keeping the read and write models consistent. Separately I built a company CMS in ASP.NET Core MVC.

### Achievement (X-Y-Z)

- Kept electricity-distribution automation in production, measured by ticket response, development, and defect fixes for Bushehr, Mazandaran, Greater Tehran, Arak, and other cities, on the existing MVC.
- Drove the unified rewrite from separate MVC codebases onto Microservices, through CQRS, RabbitMQ, DDD, Vue.js, monitoring, and .NET Core.
- Shipped a company CMS in ASP.NET Core MVC so site content updated from that CMS.

## ATS Keywords

`Microservices` `CQRS` `RabbitMQ` `DDD` `.NET Core` `ASP.NET Core MVC` `Vue.js` `electricity distribution` `monitoring`
