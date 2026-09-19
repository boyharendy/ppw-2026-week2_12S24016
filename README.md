# Tugas Pemrograman Praktikum Web (PPW) 2026 - Week 2
## Portofolio & Layanan Interaktif Accessible

Repositori Resmi: `PPW-Portofolio-Project`  
Tautan Live Demo: [GitHub Pages Portofolio](https://boyharendy.github.io/PPW-Portofolio-Project/)

---

## 1. Identitas Mahasiswa

| Informasi | Keterangan |
|---|---|
| **Nama Lengkap** | Boy Harendy Simamora |
| **NIM** | 12S24016 |
| **Program Studi** | S1 Sistem Informasi |
| **Institusi** | Institut Teknologi Del |
| **Mata Kuliah** | Pemrograman Praktikum Web (PPW) |
| **Dosen Pengampu** | Dosen Lab Pemrograman Web & Sistem Informasi |
| **Tahun Akademik** | 2026/2027 |

---

## 2. Deskripsi & Tujuan Proyek

Aplikasi web ini adalah *single page personal portfolio website* profesional yang dibangun secara murni menggunakan **HTML5 Semantik** dan **CSS3 Modern** tanpa ketergantungan framework CSS (seperti Tailwind/Bootstrap) maupun pustaka JavaScript eksternal. 

Situs ini dirancang untuk:
1. Menjadi representasi digital kredibel bagi mahasiswa dalam memamerkan karya akademik dan rekam jejak perkuliahan.
2. Mematuhi standar aksesibilitas digital internasional **WCAG 2.2 Level AA** agar inklusif dan ramah pembaca layar (*screen reader*) serta dapat dinavigasi sepenuhnya via keyboard.
3. Menyediakan antarmuka pemesanan konsultasi/layanan interaktif dengan validasi *native* HTML5 tanpa membutuhkan backend kustom.

---

## 3. Fitur Utama & Kepatuhan Spesifikasi PRD

### A. Struktur Semantik Dokumen (W3C Standard)
- Menggunakan elemen landmark semantik: `<header>`, `<nav>`, `<main>`, 4 `<section>`, `<aside>`, dan `<footer>`.
- Hierarki heading tunggal `<h1>` pada bagian Hero untuk optimasi SEO dan pemetaan *document outline*.
- Elemen multimedia `<figure>` dan `<figcaption>` pada foto profil dan media portofolio.
- Penyajian data kontak resmi dalam elemen semantik `<address>` dan kutipan testimoni dalam `<blockquote>` dengan `<cite>`.

### B. Aksesibilitas Web (WCAG 2.2 Level AA)
- **Tautan Lompat Konten (*Skip Link*):** Elemen `.skip-link` di bagian teratas untuk memudahkan pengguna keyboard langsung menuju `#main-content`.
- **Navigasi Keyboard Penuh:** Semua elemen interaktif (tautan, tombol, form input, kartu radio) memiliki cincin fokus yang jelas dan kontras melalui pseudo-class `:focus-visible`.
- **Rasio Kontras Warna:** Memenuhi ambang batas minimum kontras 4.5:1 untuk teks normal dan 3.0:1 untuk teks besar/elemen grafis terhadap latar belakang putih/terang.
- **Teks Alternatif Gambar:** Setiap elemen `<img>` dilengkapi atribut `alt` deskriptif yang menjelaskan konteks visual gambar.
- **Dukungan `prefers-reduced-motion`:** Menghormati pengaturan sistem pengguna yang memiliki sensitivitas terhadap animasi/gerak visual.

### C. Desain Visual 60-30-10 (Putih & Elegan)
- **60% Latar Netral/Putih:** Warna latar bersih `#f8fafc` dan permukaan kartu `#ffffff` dengan border halus `#e2e8f0`.
- **30% Teks Slate/Navy:** Tipografi judul kontras tinggi `#0f172a` dan teks isi `#334155`.
- **10% Aksen Muted Premium:** Aksen Deep Forest Emerald (`#0f766e` / `#0d9488`) untuk tombol aksi (CTA), pill status, tag teknologi, dan highlight interaktif.

### D. Presentasi Konten Non-Tabular & Tabular
- **Dua Jenis List Terstruktur:**
  - `<ul>` (Unordered List): Daftar kompetensi inti dan teknologi web.
  - `<ol>` (Ordered List): Tahapan standar proses kerja proyek dengan penomoran kustom.
- **Tabel Semantik Lengkap:**
  - Memanfaatkan elemen `<table>`, `<caption>` (dengan class ramah pembaca layar `.sr-only`), `<thead>`, `<tbody>`, dan `<tfoot>`.
  - Atribut `scope="col"` pada header kolom dan `scope="row"` pada header baris matakuliah.
  - Wadah responsif `.table-responsive-container` dengan `tabindex="0"` dan `role="region"` agar dapat di-scroll dengan keyboard pada layar sempit.

### E. Formulir Layanan Interaktif Tervalidasi
- Dibagi ke dalam 2 blok `<fieldset>` dengan judul `<legend>`:
  1. Data Diri & Kontak Resmi
  2. Spesifikasi Layanan & Kebutuhan Proyek
- Menggunakan minimal 8 variasi kontrol input:
  - `type="text"` (Nama lengkap)
  - `type="email"` (Alamat email)
  - `type="tel"` (Nomor WhatsApp dengan validasi regex pattern Indonesia)
  - `type="radio"` (Kategori layanan berbentuk kartu pilihan kustom)
  - `type="number"` (Estimasi jumlah sesi dengan `min` dan `max`)
  - `<select>` dropdown (Pilihan skema waktu pengerjaan)
  - `type="checkbox"` (Multi-pilihan kanal komunikasi resmi)
  - `<textarea>` (Deskripsi kebutuhan tambahan dengan batas karakter)
- Umpan balik visual kesalahan validasi murni via CSS pseudo-class `:user-invalid`.

### F. Tata Letak Responsif (*Mobile-First*)
- Tata letak fleksibel berbasis CSS Grid dan Flexbox.
- Breakpoint wajib `@media (max-width: 768px)` untuk perangkat tablet/ponsel, serta optimasi layar kecil di `@media (max-width: 480px)`.

---

## 4. Struktur Berkas Repositori

```text
portofolio/
├── PRD-Portofolio-Web-HTML5-CSS.md  # Dokumen Product Requirement Document
├── README.md                        # Panduan dokumentasi repositori
├── index.html                       # Berkas markup utama semantik HTML5
├── style.css                        # Lembar gaya desain sistem CSS3 native
└── assets/
    └── images/
        ├── profile.jpg              # Foto potret profil mahasiswa (Boy Harendy Simamora)
        ├── project-1.jpg            # Cover proyek Aether Weather App (Glassmorphism UI)
        ├── project-2.jpg            # Cover proyek KOCARI (E-Commerce Trust Aggregator & Scraping)
        └── project-3.jpg            # Cover proyek KUSKAS (Keuangan Sakti Kas - Web & Mobile)
```

---

## 5. Panduan Menjalankan Secara Lokal

Halaman web ini adalah situs statis murni tanpa perlu instalasi runtime atau build tool:

1. **Kloning Repositori:**
   ```bash
   git clone https://github.com/boyharendy/PPW-Portofolio-Project.git
   cd PPW-Portofolio-Project
   ```

2. **Membuka Halaman:**
   - Cukup klik dua kali (double click) berkas `index.html`, atau klik kanan lalu pilih *Open with Google Chrome / Mozilla Firefox / Microsoft Edge*.
   - Atau jalankan ekstensi **Live Server** di Visual Studio Code / Antigravity IDE.

---

## 6. Panduan Deployment ke GitHub Pages

1. Lakukan *commit* dan *push* seluruh berkas ke repositori publik GitHub Anda:
   ```bash
   git add .
   git commit -m "feat: complete accessible portfolio with semantic HTML5 and modern CSS3"
   git push origin main
   ```
2. Buka halaman repositori di browser: `https://github.com/[username]/ppw-2026-week2-[NIM]`.
3. Masuk ke menu **Settings** > **Pages**.
4. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan folder `/(root)`.
5. Klik **Save**. Tunggu beberapa saat hingga URL publik GitHub Pages aktif.
