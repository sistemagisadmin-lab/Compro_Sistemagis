Menurut saya, sekarang arah Sistemagis sudah mulai jelas: **bukan sekadar software house**, tetapi sebuah **digital product & solution studio** yang punya dua sisi bisnis sekaligus:

**Sistemagis Products** → membangun produk digital milik sendiri seperti KisahMagis, Photobooth, Sistem Kost, dan produk lain.
**Sistemagis Solutions** → menerima dan mengerjakan kebutuhan digital dari client seperti company profile, custom system, SaaS, automation, dan aplikasi bisnis.

Karena itu, website Sistemagis jangan dibuat seperti website software house generik yang hanya berisi “services → portfolio → contact”. Website harus bisa menjawab:

> **Siapa Sistemagis?**
> **Apa yang kami bangun?**
> **Apa yang bisa kami bereskan?**
> **Kenapa harus Sistemagis?**

Di bawah ini saya buatkan PRD yang bisa langsung kamu jadikan dasar desain Figma sekaligus development.

---

# PRD — Sistemagis Company Profile

**Product:** Sistemagis Corporate Website
**Type:** Company Profile / Digital Product & Solution Studio
**Status:** Initial Product Requirement
**Primary Domain:** `sistemagis.com` *(tentative)*

---

# 1. Product Overview

### Nama

**Sistemagis**

### Positioning

> **Sistemagis adalah digital product & solution studio yang membangun teknologi untuk membantu bisnis menyelesaikan masalah, merapikan proses, dan menciptakan pengalaman digital yang lebih baik.**

Sistemagis memiliki dua fokus utama:

### 01 — Digital Products

Produk digital yang dikembangkan dan dimiliki oleh Sistemagis.

Contoh:

* **KisahMagis** — Digital invitation, wedding planner & digital guestbook
* **MagisPhotobooth** — Digital photobooth / event experience
* **SistemKost** — Sistem manajemen kost
* Produk SaaS dan digital product lainnya

### 02 — Digital Solutions

Solusi teknologi yang dibuat berdasarkan kebutuhan client.

Contoh:

* Company Profile Website
* Custom Web Application
* Business Management System
* SaaS Development
* Internal System
* Automation
* API & Integration
* AI-powered solutions
* System modernization

---

# 2. Brand Philosophy

Sistemagis memiliki dua kata kunci:

## **MAGIS**

Magis adalah karakter dan cara Sistemagis membuat sesuatu.

Bukan berarti "magic" dalam arti mistis, tetapi:

> **membuat sesuatu yang sebelumnya rumit menjadi terasa sederhana, berguna, dan bernilai.**

Magis menggambarkan:

**Curiosity**
Berani mengeksplorasi teknologi.

**Creativity**
Tidak hanya menyelesaikan masalah dengan cara biasa.

**Intelligence**
Menggunakan teknologi secara tepat, bukan sekadar mengikuti tren.

**Possibility**
Melihat kemungkinan baru dari sebuah masalah.

---

## **BERES**

Ini yang menurut saya bisa menjadi karakter pembeda Sistemagis.

Banyak agency mengatakan:

> Build digital solutions.

Sistemagis sebaiknya punya pesan yang lebih membumi:

> **Kami membereskan solusi.**

"Beres" berarti:

**Problem → dipahami**
**Process → dirapikan**
**System → dibangun**
**Technology → diterapkan**
**Result → digunakan**

Jadi Sistemagis tidak hanya menjual coding.

Sistemagis menjual:

> **ketenangan karena masalah digital sudah beres.**

---

# 3. Brand Message

Saya menyarankan jangan menggunakan "Magis" sebagai gimmick semata.

Struktur messaging:

### Primary tagline

> **Bereskan Solusi. Bikin Magis.**

Ini menurut saya paling dekat dengan identitas yang kamu inginkan.

Alternatif:

> **Solusi yang Beres, Hasil yang Magis.**

Lebih corporate.

Atau:

> **We Make Digital Solutions Feel Magis.**

Lebih startup/international.

Untuk website Indonesia, saya paling suka:

# **Bereskan Solusi. Bikin Magis.**

Subheadline:

> **Sistemagis membangun produk dan solusi digital secara sistematis untuk menyederhanakan proses, mengoptimalkan bisnis, dan mewujudkan ide menjadi sesuatu yang nyata.**

---

# 3.1 Visual Identity & Design System

Identitas visual Sistemagis dirancang untuk mencerminkan karakter teknologi yang rapi, kredibel, modern, dan memberikan sentuhan magis:

### 1. Color Palette

| Token | Name | Hex Code | Karakter & Penggunaan |
|---|---|---|---|
| `--color-brand-primary` | **Primary Blue** | `#5194EA` | **Main brand color** — Primary buttons, highlights, links, active state badges |
| `--color-brand-deep` | **Deep Navy** | `#0F172A` | **Trust & Credibility** — Primary text, headings, dark navigation, footer |
| `--color-brand-soft` | **Light Blue** | `#E6F0FF` | **Clean Architecture** — Soft backgrounds, subtle container accents, hover states |
| `--color-brand-violet` | **Violet** | `#8B5CF6` | **Innovation & Magis** — Special accents, magis elements, interactive spark highlights |

### 2. Typography

| Role | Font Family | Fallback | Penggunaan |
|---|---|---|---|
| **Heading & Display** | **Plus Jakarta Sans** | `sans-serif` | Judul utama (H1, H2, H3), hero display titles, angka statistik, dan brand callout |
| **Body & UI** | **Inter** | `system-ui, sans-serif` | Teks paragraf, penjelasan fitur, label tombol, menu navigasi, dan elemen form |

---

# 4. Website Objective

Website memiliki lima tujuan utama.

### Business Objective

**1. Meningkatkan kredibilitas Sistemagis**

Website harus terlihat sebagai brand yang serius, bukan sekadar freelancer/perorangan.

**2. Menjelaskan dua sisi bisnis**

Pengunjung harus memahami bahwa Sistemagis:

> **Build our own products + build solutions for your business.**

**3. Menghasilkan leads**

Website harus mendorong visitor menghubungi Sistemagis melalui:

* WhatsApp
* Email
* Contact form

**4. Menjadi showcase produk**

Produk Sistemagis harus memiliki tempat khusus sehingga ketika produk bertambah, website tetap scalable.

**5. Menjadi portfolio**

Project client yang sudah selesai dapat ditampilkan sebagai case study.

---

# 5. Target Audience

### Primary

**Business Owner / Entrepreneur**

Membutuhkan website, sistem bisnis, SaaS, automation atau digitalisasi.

**Company / Organization**

Membutuhkan custom system atau internal application.

**Event / Wedding Business**

Potential user untuk KisahMagis dan produk event lainnya.

### Secondary

**Potential Partner**

Agency, vendor, designer, developer, dan business partner.

**Talent / Developer**

Orang yang tertarik bekerja atau berkolaborasi dengan Sistemagis.

---

# 6. Website Information Architecture

Struktur utama:

```text
Sistemagis
│
├── Home
│
├── Products
│   ├── KisahMagis
│   ├── MagisPhotobooth
│   ├── SistemKost
│   └── Other Products
│
├── Solutions
│   ├── Website
│   ├── Custom System
│   ├── SaaS Development
│   ├── Automation
│   ├── AI Solutions
│   └── System Integration
│
├── Works
│   ├── Projects
│   └── Case Studies
│
├── About
│
└── Contact
```

Navbar sebaiknya tidak terlalu banyak.

Saya rekomendasikan:

**Products | Solutions | Works | About**

dan CTA:

**Konsultasi Gratis**

---

# 7. Homepage PRD

Homepage menjadi halaman paling penting.

Urutan section:

---

## Section 01 — Hero

Hero harus langsung menjawab:

**Apa Sistemagis?**

Contoh:

### Heading

> **Bereskan Solusi.
> Bikin Magis.**

### Supporting text

> Sistemagis membangun produk dan solusi digital secara sistematis untuk menyederhanakan proses, mengoptimalkan bisnis, dan mewujudkan ide menjadi sesuatu yang nyata.

CTA:

**Start a Project**

Secondary:

**Explore Our Products**

Visual:

Logo abstract Sistemagis + flowing blue → violet shape.

---

# 8. Section — What We Do

Heading:

> **We Build Digital Solutions That Actually Work.**

atau versi Indonesia:

> **Dari masalah yang rumit menjadi solusi yang beres.**

Tampilkan empat capability:

### Build

Website, web application, SaaS.

### Connect

API, integration, automation.

### Intelligence

AI, data, smart systems.

### Experience

Digital product, customer experience, event technology.

---

# 9. Section — Our Products

Ini salah satu section terpenting.

Heading:

> **Built by Sistemagis**

Subheading:

> Produk digital yang kami bangun untuk menyelesaikan kebutuhan nyata.

Card:

### KisahMagis

**Digital Wedding Experience**

Digital invitation, wedding planner, RSVP dan guest book dalam satu platform.

CTA:

**Explore KisahMagis →**

---

### MagisPhotobooth

**Digital Event Experience**

Platform photobooth untuk menciptakan pengalaman digital yang lebih interaktif.

---

### SistemKost

**Property Management**

Sistem untuk membantu pemilik kost mengelola penghuni, pembayaran dan operasional.

---

Dan card terakhir:

### More Magis is Coming

> We are always building something new.

Ini membantu ketika produk baru bermunculan.

---

# 10. Section — Solutions

Berikutnya masuk ke bisnis agency.

Heading:

> **Have a Problem to Solve?**

Subheadline:

> Tidak semua masalah membutuhkan produk yang sama. Kami membantu merancang dan membangun solusi yang sesuai dengan kebutuhan bisnis Anda.

Service cards:

### Company Website

Website company profile modern yang merepresentasikan brand.

### Custom System

Sistem khusus sesuai workflow bisnis.

### SaaS Development

Membangun produk SaaS dari ide hingga production.

### Automation

Mengurangi pekerjaan manual dengan automation.

### AI Solutions

Mengintegrasikan AI untuk meningkatkan proses dan produktivitas.

### System Integration

Menghubungkan berbagai sistem, API dan data.

---

# 11. Section — Why Sistemagis

Jangan menggunakan section "Why Choose Us" yang generik.

Gunakan:

# **Why Magis?**

Empat value utama:

### Understand

Kami memahami problem sebelum membangun solusi.

### Simple

Teknologi yang kompleks dibuat lebih mudah digunakan.

### Practical

Solusi dibuat berdasarkan kebutuhan nyata, bukan sekadar mengikuti tren.

### Reliable

Sistem dirancang agar dapat digunakan dan dikembangkan dalam jangka panjang.

Visualnya bisa menggunakan icon sederhana dari brand guideline:

**Connection → Trust → Possibility → Solution**

Ini sangat cocok dengan konsep logo yang sebelumnya kita bahas.

---

# 12. Section — Our Works

Heading:

> **Things We've Made**

atau:

> **From Ideas to Something Real.**

Tampilkan project dalam bentuk visual card.

Contoh:

```text
[Project Image]

Client Name
Custom Business System

Technology:
Laravel · React · PostgreSQL

View Case Study →
```

Setiap project nantinya bisa menjadi halaman:

```text
/work/project-name
```

Dengan:

* Problem
* Challenge
* Solution
* Technology
* Result
* Gallery

---

# 13. Section — How We Work

Ini penting agar client memahami proses agency.

### 01 — Discover

Memahami kebutuhan dan masalah bisnis.

### 02 — Define

Merancang scope dan solusi.

### 03 — Build

Design, development, integration.

### 04 — Refine

Testing dan improvement.

### 05 — Launch

Deploy dan handover.

Tagline kecil:

> **From messy ideas to something that works.**

Ini sangat cocok dengan konsep **“membereskan solusi.”**

---

# 14. About Sistemagis

Jangan terlalu panjang.

Heading:

> **We believe technology should make things better, not harder.**

Isi:

> Sistemagis adalah digital product & solution studio yang berfokus pada pembuatan sistem digital, produk SaaS, dan solusi teknologi untuk bisnis. Kami membangun produk kami sendiri sekaligus membantu client mengubah kebutuhan dan permasalahan bisnis menjadi solusi digital yang dapat digunakan.

Kemudian tampilkan:

**Products**
Produk milik Sistemagis.

**Solutions**
Solusi untuk client.

**Technology**
Teknologi yang kami gunakan.

---

# 15. Technology Section

Tidak perlu terlalu banyak.

Contoh:

```text
Web
React
Next.js
Laravel

Backend
Node.js
NestJS
Python

Data
PostgreSQL
Redis
Kafka

AI
LLM
RAG
Computer Vision
Automation

Infrastructure
Docker
Kubernetes
Cloud
```

Namun **jangan menjadikan halaman seperti daftar skill developer**.

Teknologi adalah supporting element, bukan primary selling point.

---

# 16. CTA

Sebelum footer:

# **Got something complicated?**

> Let's make it simple.
> Let's make it magis.

Button:

**Start a Project**

Secondary:

**Talk to Us**

Ini menurut saya bisa menjadi salah satu signature Sistemagis.

---

# 17. Contact

Form:

```text
Name
Company
Email
WhatsApp
What do you need?
Budget Range
Message
```

Dropdown:

```text
Company Website
Custom System
SaaS
Automation
AI Solution
Digital Product
Other
```

CTA:

**Tell Us What You Need**

Tambahkan:

**WhatsApp**

**Email**

**Location**

---

# 18. Footer

Struktur:

```text
Sistemagis

Bereskan Solusi. Bikin Magis.

Products
KisahMagis
MagisPhotobooth
SistemKost

Solutions
Website
Custom System
SaaS
AI & Automation

Company
About
Works
Contact

© 2026 Sistemagis
All rights reserved.
```

Social media:

LinkedIn
Instagram
GitHub
Email

---

# 19. Visual Direction

Dengan palette yang sebelumnya kita tentukan:

### Primary

`#5194EA`

### Magic

`#8B5CF6`

### Deep

`#0F172A`

### Soft

`#E6F0FF`

### Accent

`#D4AF57`

Visual language:

> **Technology × Human × Magic**

Gunakan:

**Blue → Violet gradient**

untuk menggambarkan transisi:

> **Idea → Technology → Solution**

Logo Sistemagis bisa menjadi visual motif yang berulang dalam website.

Bentuk flowing/interlocking pada logo dapat digunakan sebagai:

* hero background
* section divider
* product decoration
* card background
* loading animation
* hover animation

Dengan begitu logo bukan cuma ditempel di navbar, tetapi menjadi **visual language Sistemagis**.

---

# 20. Functional Requirements

### FR-01 — Responsive

Website harus optimal pada:

* Desktop
* Tablet
* Mobile

### FR-02 — Product Management

Admin dapat menambahkan:

* Product
* Product description
* Image
* Category
* URL
* Status

Contoh:

```text
KisahMagis
Category: Wedding
Status: Active
URL: kisahmagis.com
```

### FR-03 — Portfolio Management

Admin dapat membuat:

* Project
* Client
* Description
* Technology
* Gallery
* Case study
* External URL

### FR-04 — Contact Form

Form harus mengirimkan inquiry ke email/admin.

### FR-05 — WhatsApp CTA

CTA otomatis membuka WhatsApp dengan template message.

Contoh:

> Halo Sistemagis, saya tertarik untuk membangun custom website...

### FR-06 — SEO

Minimal:

* Metadata
* Open Graph
* Sitemap
* robots.txt
* Semantic HTML
* Favicon
* structured metadata dasar

### FR-07 — Performance

Target:

* Optimized images
* Lazy loading
* Minified assets
* Good Core Web Vitals
* Fast initial load

---

# 21. CMS

Untuk **versi pertama**, saya justru tidak menyarankan CMS yang terlalu kompleks.

Bisa dibuat:

**Static Content + lightweight CMS**

atau bahkan awalnya content dikelola melalui code/configuration.

Nanti ketika jumlah project dan product mulai banyak, baru gunakan CMS.

Struktur data minimal:

```text
Product
- id
- name
- slug
- category
- description
- image
- url
- status

Project
- id
- client
- title
- slug
- description
- category
- technologies
- thumbnail
- gallery
- result

Service
- id
- name
- description
- icon
```

---

# 22. Non-Functional Requirements

### Performance

Website harus terasa cepat.

### Accessibility

* proper semantic HTML
* keyboard navigation
* sufficient contrast
* alt image

### Security

* HTTPS
* contact form protection
* input validation
* rate limiting bila diperlukan

### Maintainability

Structure code harus memungkinkan penambahan:

```text
Product
Product
Product
Product
...
```

tanpa perlu redesign keseluruhan website.

---

# 23. Future Roadmap

Website ini harus disiapkan menjadi **platform utama ekosistem Sistemagis**, bukan hanya company profile.

### Phase 1 — Company Profile

* Home
* Products
* Solutions
* Works
* About
* Contact

### Phase 2 — Product Ecosystem

Setiap product memiliki landing page sendiri:

```text
sistemagis.com/products/kisahmagis
sistemagis.com/products/photobooth
sistemagis.com/products/sistemkost
```

atau menggunakan domain masing-masing.

### Phase 3 — Case Study

```text
sistemagis.com/works/project-a
sistemagis.com/works/project-b
```

### Phase 4 — Digital Studio

Kemudian website bisa berkembang menjadi:

> **Sistemagis Digital Studio**

dengan:

* Product ecosystem
* Client solutions
* Case studies
* Articles
* Technology insights
* Careers
* Partnership

---

# 24. KPI Website

KPI awal tidak perlu terlalu rumit.

### Awareness

Jumlah:

**Unique Visitors**

### Engagement

**Average Engagement Time**

**Product Page Views**

### Business

**Contact Form Submission**

**WhatsApp Click**

**Project Inquiry**

### Product

**Product Landing Page CTA Click**

Contoh:

KisahMagis → **Try KisahMagis**

---

# 25. Definition of Done

Website dianggap selesai apabila:

* Semua halaman utama tersedia.
* Responsive pada desktop/mobile.
* Brand guideline diterapkan.
* Semua CTA bekerja.
* Contact form bekerja.
* WhatsApp bekerja.
* SEO dasar diterapkan.
* Favicon & OG image tersedia.
* Domain production terhubung.
* HTTPS aktif.
* Website dapat diakses publik.
* Tidak ada broken link.
* Semua konten awal sudah diinput.
* Client/business owner dapat menambahkan project/product dengan mudah sesuai mekanisme CMS yang dipilih.

---

# 26. Struktur Homepage Final

Kalau saya rangkum menjadi satu flow, saya akan membuatnya seperti ini:

```text
NAVBAR
Sistemagis
Products · Solutions · Works · About
                   [Konsultasi Gratis]

                    ↓

HERO
Bereskan Solusi.
Bikin Magis.

We build digital products and solutions
that make businesses simpler, smarter,
and ready to grow.

[Start a Project] [Explore Products]

                    ↓

WHAT WE DO
Technology should solve problems,
not create more of them.

[Build] [Connect] [Intelligence] [Experience]

                    ↓

OUR PRODUCTS
Built by Sistemagis

[KisahMagis]
[MagisPhotobooth]
[SistemKost]
[Something New]

                    ↓

OUR SOLUTIONS
Have a problem to solve?

[Website]
[Custom System]
[SaaS]
[Automation]
[AI]
[Integration]

                    ↓

WHY MAGIS?
Understand
Simple
Practical
Reliable

                    ↓

OUR WORKS
Things We've Made

[Project]
[Project]
[Project]

                    ↓

HOW WE WORK
Discover → Define → Build → Refine → Launch

                    ↓

ABOUT
We believe technology should
make things better, not harder.

                    ↓

CTA
Got something complicated?

Let's make it simple.
Let's make it magis.

[Start a Project]

                    ↓

FOOTER
```

---

## Satu hal yang menurut saya sangat penting

**Jangan membuat Sistemagis terlihat seperti “agency yang kebetulan punya produk”.**

Justru positioning yang lebih menarik adalah:

# **Sistemagis = Digital Product & Solution Studio**

Sehingga identitasnya menjadi:

```text
                    SISTEMAGIS
                         │
          ┌──────────────┴──────────────┐
          │                             │
       PRODUCTS                     SOLUTIONS
          │                             │
    ┌─────┼─────┐                ┌──────┼──────┐
    │     │     │                │      │      │
Kisah  Photo  Kost            Website  SaaS   Custom
Magis  Booth                 System   AI     System
```

Dan **“Magis” adalah personality**, sedangkan **“Beres” adalah promise**.

Dengan begitu pesan brand-nya menjadi sangat mudah diingat:

> **Kami membangun teknologi.**
> **Kami membereskan masalah.**
> **Dan kami membuatnya terasa magis.**

Menurut saya ini jauh lebih kuat daripada tagline generik seperti *“Your Digital Transformation Partner”* atau *“Innovative Technology Solutions”*.
