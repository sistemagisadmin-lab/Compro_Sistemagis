# Sistemagis — Digital Product & Solution Studio

> **"We Make Digital Solutions Feel Magis."**  
> *Bereskan Solusi. Bikin Magis.*

Website profil resmi **Sistemagis** dibangun menggunakan arsitektur modern berbasis [Astro 6](https://astro.build), [Svelte 5](https://svelte.dev), dan [Tailwind CSS v4](https://tailwindcss.com). Repositori ini dirancang dengan standar performa tinggi, animasi mikro yang halus, serta tata kelola kode modular yang memudahkan kustomisasi konten maupun penambahan fitur baru.

---

## 📌 Daftar Isi
1. [Positioning & Filosofi Brand](#-positioning--filosofi-brand)
2. [Identitas Visual & Design Tokens](#-identitas-visual--design-tokens)
3. [Struktur Folder & Komponen](#-struktur-folder--komponen)
4. [Panduan Menjalankan Proyek](#-panduan-menjalankan-proyek)
5. [Panduan Mengubah Konten & Tampilan](#-panduan-mengubah-konten--tampilan)
6. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
7. [Dokumentasi Terkait](#-dokumentasi-terkait)

---

## 💎 Positioning & Filosofi Brand

Sistemagis **bukan sekadar software house**, melainkan sebuah **Digital Product & Solution Studio** dengan dua pilar bisnis:
1. **Sistemagis Products** — Mengembangkan produk digital in-house (seperti *KisahMagis*, *MagisPhotobooth*, *SistemKost*).
2. **Sistemagis Solutions** — Mengerjakan kebutuhan digital kustom dari klien (*Company Website*, *Custom Business System*, *SaaS*, *Automation*, *AI Solutions*, dan *System Integration*).

### Dua Kata Kunci Utama
- **MAGIS (Personality)**: Membuat proses dan teknologi yang sebelumnya rumit menjadi terasa sederhana, intuitif, dan bernilai tinggi.
- **BERES (Promise)**: *Problem dipahami → Process dirapikan → System dibangun → Technology diterapkan → Result digunakan.*

---

## 🎨 Identitas Visual & Design Tokens

Semua token warna didefinisikan pada `src/styles/global.css` dan dapat digunakan langsung di kelas Tailwind:

| Token | Hex Code | Tailwind / CSS Class | Penggunaan Utama |
|---|---|---|---|
| **Primary Blue** | `#5194EA` | `text-[#5194ea]`, `bg-[#5194ea]` | Warna primer studio, tautan, border fokus |
| **Magic Violet** | `#8B5CF6` | `text-[#8b5cf6]`, `bg-[#8b5cf6]` | Aksen magis, pilar produk, gradasi tombol |
| **Deep Slate** | `#0F172A` | `text-[#0f172a]`, `bg-[#0f172a]` | Warna teks utama, background dark card/footer |
| **Soft Ice Blue**| `#E6F0FF` | `text-[#e6f0ff]`, `bg-[#e6f0ff]` | Background badges, card highlight halus |
| **Accent Gold** | `#D4AF57` | `text-[#d4af57]`, `bg-[#d4af57]` | Aksen pilar AI, metrik khusus |
| **Signature Gradient** | `#5194EA` → `#8B5CF6` | `bg-gradient-to-r from-[#5194ea] to-[#8b5cf6]` | Tombol utama, headline highlight, logo glow |

### Aset Logo & Ikon (`src/images/`)
- `icon sistemagis gradient.png` — Ikon logo utama dengan gradasi biru-violet (digunakan pada Navbar, Footer, dan kartu CTA).
- `logo sistemagis with text dark.png` / `white.png` — Logo lengkap dengan wordmark Sistemagis.
- `Icon kisahmagis.png` — Ikon resmi produk KisahMagis.

---

## 📂 Struktur Folder & Komponen

```text
sistemagis-compro/
├── docs/
│   └── prd.md                     # Product Requirements Document resmi
├── public/
│   ├── favicon.svg                # Favicon browser SVG
│   └── fonts/                     # Font lokal Figtree & Satoshi
├── src/
│   ├── components/
│   │   ├── Navbar/                # Floating desktop pill & mobile dock
│   │   │   ├── Navbar.astro
│   │   │   ├── navbar.css
│   │   │   └── navbarTransitions.ts
│   │   ├── Hero/                  # Hero section utama & metrics pills
│   │   │   └── HeroSection.astro
│   │   ├── WhatWeDo/              # 4 Pilar: Build, Connect, Intelligence, Experience
│   │   │   └── WhatWeDoSection.astro
│   │   ├── Products/              # Showcase: KisahMagis, Photobooth, Kost
│   │   │   └── ProductsSection.astro
│   │   ├── Solutions/             # 6 Solusi kustom klien
│   │   │   └── SolutionsSection.astro
│   │   ├── WhyMagis/              # Understand, Simple, Practical, Reliable
│   │   │   └── WhyMagisSection.astro
│   │   ├── Works/                 # Portofolio studi kasus (Things We've Made)
│   │   │   └── WorksSection.astro
│   │   ├── HowWeWork/             # Alur 5 fase: Discover -> Launch
│   │   │   └── HowWeWorkSection.astro
│   │   ├── About/                 # Narasi studio produk & fondasi tech stack
│   │   │   └── AboutSection.astro
│   │   ├── CTA/                   # Signature CTA: Got something complicated?
│   │   │   └── SignatureCTA.astro
│   │   ├── Contact/               # Form inquiry kustom & direct WhatsApp
│   │   │   ├── ContactSection.astro
│   │   │   └── ContactForm.svelte
│   │   ├── Footer/                # Footer navigasi komprehensif
│   │   │   └── Footer.astro
│   │   └── common/                # Komponen bersama (interactive shape grid)
│   │       └── ShapeGrid.astro
│   ├── images/                    # Aset grafis, ikon, dan logo resmi
│   ├── layouts/
│   │   └── Layout.astro           # Master layout (SEO meta, OG tags, JSON-LD, Lenis)
│   ├── pages/
│   │   └── index.astro            # Halaman utama (perakitan 12 section)
│   └── styles/
│       └── global.css             # Tailwind v4 import & custom utilities
├── astro.config.mjs               # Konfigurasi Astro, Vite, Svelte & Tailwind
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Menjalankan Proyek

### Prasyarat
- **Node.js** v20.0.0 atau lebih baru
- **npm** v10 atau lebih baru

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Akses server lokal melalui browser pada `http://localhost:4321/`. Perubahan kode akan ter-update otomatis secara instan via Hot Module Replacement (HMR).

### 3. Build untuk Produksi
```bash
npm run build
```
File siap saji akan di-generate ke folder `dist/` dalam format HTML/CSS/JS statis yang teroptimasi penuh.

### 4. Preview Hasil Build
```bash
npm run preview
```
Menguji hasil build `dist/` pada server lokal sebelum deployment ke hosting (Cloudflare, Vercel, Netlify, atau VPS).

---

## 🛠️ Panduan Mengubah Konten & Tampilan

Berikut panduan cepat jika Anda ingin menyempurnakan bagian tertentu:

### 1. Mengubah Teks Hero & Tagline
Buka [HeroSection.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Hero/HeroSection.astro):
- Edit judul `<h1>` untuk menyesuaikan headline utama.
- Edit `<p>` untuk mengubah subheadline.
- Edit array kartu metrik pada bagian bawah hero jika ingin menampilkan statistik baru.

### 2. Menambah atau Mengubah Produk
Buka [ProductsSection.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Products/ProductsSection.astro):
- Tambahkan atau sesuaikan objek di dalam array `products`:
  ```ts
  {
    id: "nama-produk",
    title: "Nama Produk",
    category: "Kategori Produk",
    desc: "Deskripsi singkat produk...",
    features: ["Fitur 1", "Fitur 2", ...],
    ctaText: "Explore →",
    ctaHref: "https://...",
  }
  ```

### 3. Mengubah Solusi Klien
Buka [SolutionsSection.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Solutions/SolutionsSection.astro):
- Ubah poin-poin layanan atau teknologi pada array `solutions`.

### 4. Mengubah Portofolio (Things We've Made)
Buka [WorksSection.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Works/WorksSection.astro):
- Ubah entri array `works` untuk menambahkan studi kasus klien baru, deskripsi hasil, serta tag teknologi yang dipakai.

### 5. Mengubah Nomor WhatsApp & Form Kontak
Buka [ContactForm.svelte](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Contact/ContactForm.svelte):
- Ubah nomor WhatsApp tujuan pada fungsi `handleSubmit`:
  ```ts
  window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
  ```
  *(Ganti `6281234567890` dengan nomor WhatsApp resmi Sistemagis)*.
- Ubah nomor pada tombol cepat WhatsApp di [ContactSection.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/Contact/ContactSection.astro) dan [SignatureCTA.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/components/CTA/SignatureCTA.astro).

### 6. Mengubah Metadata SEO & OpenGraph
Buka [Layout.astro](file:///d:/Work/Sistemagis/Sistemagis%20Compro/src/layouts/Layout.astro):
- Sesuaikan `title`, `description`, `canonicalURL`, dan data terstruktur Schema.org JSON-LD.

---

## ⚡ Teknologi yang Digunakan

- **Framework**: [Astro 6](https://astro.build/) (Island Architecture, zero-JS by default)
- **Komponen Reaktif**: [Svelte 5](https://svelte.dev/) (dengan runes `$state`, `$derived`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) dengan `@tailwindcss/vite`
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (1.2s cubic-bezier easing)
- **Animasi & Transisi**: [Motion](https://motion.dev/) & CSS hardware-accelerated transforms
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

---

## 📖 Dokumentasi Terkait

- **Product Requirements Document (PRD)**: [docs/prd.md](file:///d:/Work/Sistemagis/Sistemagis%20Compro/docs/prd.md)  
  *Dokumen acuan produk, arsitektur informasi, filosofi brand, dan rencana masa depan.*
- **Laporan Walkthrough Pengembangan**: Tersimpan pada direktori IDE artifacts.

---

© 2026 **Sistemagis**. Bereskan Solusi. Bikin Magis.
