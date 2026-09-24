# Naskah & Panduan Presentasi Mendalam (Durasi Minimal 10 Menit)
## Tugas Mandiri Praktikum Minggu 03 — Pemrograman dan Pengujian Web (12S3101)
### Topik: Refactoring Portofolio Akademik Berbasis Bootstrap 5.3 & Advanced Custom CSS Overrides

Dokumen ini disusun secara terperinci untuk memenuhi kebutuhan **presentasi lisan / rekaman video berdurasi minimal 10 menit (target: 10 – 12 menit)**. Naskah ini menggabungkan **bedah baris kode (*code walkthrough*)**, **teori akademis arsitektur web**, serta **demonstrasi interaktif langsung di peramban**.

---

## 👤 Identitas Akademik Presenter

* **Nama Lengkap:** Boy Harendy Simamora
* **NIM:** 12S24016
* **Program Studi:** S1 Sistem Informasi
* **Fakultas:** Fakultas Informatika & Teknik Elektro (FITE)
* **Institusi:** Institut Teknologi Del, Laguboti, Sumatera Utara
* **Mata Kuliah:** Pemrograman dan Pengujian Web (12S3101) — Semester Ganjil 2026/2027
* **Dosen / Tim Asisten:** Laboratorium Rekayasa Perangkat Lunak & Sistem Informasi
* **Branch Repositori:** `PPW-2026-Week3_12S24016`

---

## ⏱️ Timeline & Alur Waktu Presentasi (Total: 11 Menit 30 Detik)

| Segmen Waktu | Topik Bahasan Utama | Fokus Tampilan Layar |
| :---: | :--- | :--- |
| **00:00 – 01:15** (1m 15s) | **Bagian 1:** Pembukaan, Identitas, & Latar Belakang Refactoring | Browser: Halaman Penuh Portofolio |
| **01:15 – 02:45** (1m 30s) | **Bagian 2:** Fondasi CDN, Algoritma Cascading, & Spesifisitas CSS | VS Code: `<head>` `index.html` & `style.css` |
| **02:45 – 04:00** (1m 15s) | **Bagian 3:** Navbar Responsif, Sticky State, & Hamburger Collapse | Browser DevTools: Mode Ponsel & Tab Console |
| **04:00 – 05:30** (1m 30s) | **Bagian 4:** Hero Section, Sistem Grid 12-Kolom, & Semantik HTML5 | VS Code & Browser: Hero Section (`col-lg-7` & `col-lg-5`) |
| **05:30 – 07:15** (1m 45s) | **Bagian 5:** Galeri Portofolio 4 Kartu & Deep Dive Modal Dialog | Browser & VS Code: 4 Kartu Grid & 4 Modal Bootstrap |
| **07:15 – 08:15** (1m 00s) | **Bagian 6:** Struktur Semantik Tabel Riwayat Matakuliah Akademik | Browser: Tabel Matakuliah dengan SKS & Capaian |
| **08:15 – 09:45** (1m 30s) | **Bagian 7:** Modernisasi Formulir, Floating Labels, & Validasi JS | Browser: Form Layanan, Uji Error Merah & Valid Hijau |
| **09:45 – 10:45** (1m 00s) | **Bagian 8:** Advanced CSS: 25 Design Tokens, Mikro-Interaksi, & WCAG | VS Code: `:root` `style.css` & Animasi Hover Kartu |
| **10:45 – 11:30** (0m 45s) | **Bagian 9:** Aside, Footer Berkontras, Git Branch, & Kesimpulan | Browser: Footer & Terminal VS Code (`git branch`) |

---

## 🎙️ Naskah Presentasi Lengkap (Kata-demi-Kata & Panduan Layar)

---

### 🟢 BAGIAN 1: Pembukaan, Identitas, & Latar Belakang Refactoring
**Alokasi Waktu:** 00:00 – 01:15 (Durasi: ~75 detik)  
**Aksi di Layar:** Tampilkan halaman beranda (*Hero Section*) web portofolio di Google Chrome/Edge secara penuh, posisikan kursor pada brand logo `BoyHarendy`.

> *"Selamat pagi/siang kepada Bapak/Ibu Dosen pengampu mata kuliah Pemrograman dan Pengujian Web serta rekan-rekan Asisten Laboratorium yang saya hormati.*
>
> *Perkenalkan, nama saya **Boy Harendy Simamora** dengan NIM **12S24016**, mahasiswa Program Studi **S1 Sistem Informasi**, Fakultas Informatika dan Teknik Elektro, **Institut Teknologi Del**.*
>
> *Pada video presentasi kali ini, saya akan membedah dan mendemonstrasikan secara mendalam hasil pengerjaan **Tugas Mandiri Praktikum Minggu 03** dengan topik: **'Integrasi CSS Framework Kontemporer (Bootstrap 5.3) dan Advanced Custom CSS Overrides'**.*
>
> *Proyek ini merupakan lompatan evolutif dari tugas praktikum Minggu ke-2 lalu. Jika pada Minggu 2 kita membangun antarmuka dengan CSS murni (*vanilla CSS*) yang membutuhkan penulisan aturan media queries manual yang panjang, maka pada Minggu ke-3 ini seluruh basis kode direfaktor menggunakan pustaka framework terdepan di industri, yaitu **Bootstrap versi 5.3.3**.*
>
> *Namun, esensi penugasan ini bukan sekadar memasang framework, melainkan bagaimana kita mampu **mengintegrasikan keandalan grid sistem dan komponen siap pakai Bootstrap** tanpa mengorbankan integritas semantik HTML5, mempertahankan aksesibilitas digital standar **WCAG 2.2 Level AA**, serta menimpa (*override*) komponen visual menggunakan **25 variabel CSS kustom** bertema personal Deep Teal dan Slate secara elegan tanpa ketergantungan buruk pada deklarasi `!important`.*
>
> *Mari kita bedah arsitektur kode dan implementasinya satu per satu."*

---

### 🟢 BAGIAN 2: Fondasi CDN, Algoritma Cascading, & Spesifisitas CSS
**Alokasi Waktu:** 01:15 – 02:45 (Durasi: ~90 detik)  
**Aksi di Layar:** Pindah ke jendela **Visual Studio Code**, buka berkas `index.html`, dan sorot tag `<head>` (baris 15 sampai 32).

> *"Pertama, mari kita buka berkas `index.html` pada bagian `<head>` untuk melihat bagaimana fondasi framework diintegrasikan ke dalam dokumen.*
>
> *(Arahkan kursor ke baris link CDN)*  
> *Di sini, kita memuat 3 dependensi eksternal resmi:*
> 1. *Pertama, **Bootstrap 5.3.3 CSS CDN** pada baris 20, yang menyediakan pustaka utility classes, sistem layout flexbox, reset CSS Reboot, dan komponen dasar.*
> 2. *Kedua, **Bootstrap Icons 1.11.3 CDN** pada baris 23, yang menyuplai ikon-ikon vektor berbasis font (seperti ikon bi-wallet, bi-diagram, bi-mortarboard, dll.) untuk memperkaya konteks visual elemen tanpa membebani performa jaringan.*
> 3. *Ketiga, di baris 29, kita menghubungkan berkas stylesheet lokal kita sendiri, yaitu **`style.css`**.*
>
> *Poin teoritis yang sangat krusial di sini adalah **Algoritma Cascading & Order of Appearance (Urutan Pemanggilan Berkas)**.*  
> *Dalam hierarki CSS, ketika dua selektor memiliki tingkat spesifisitas yang seimbang, maka aturan yang dideklarasikan paling akhir (*latest in source order*) akan memenangkan kalkulasi gaya visual.*  
> *Oleh sebab itu, `style.css` sengaja kami tempatkan **tepat setelah** CDN Bootstrap. Arsitektur ini memungkinkan kita menimpa warna latar navbar, bentuk kelengkungan kartu, efek bayangan, dan font kustom **secara alami**, tanpa perlu memaksa browser menggunakan kata kunci `!important`.*
>
> *(Scroll ke bagian paling bawah file `index.html`, baris 1084)*  
> *Kemudian di akhir dokumen, tepat sebelum tag penutup `</body>`, kita menyematkan skrip **`bootstrap.bundle.min.js`**. Berkas ini membundel pustaka logika internal Bootstrap bersama **Popper.js**, yang bertanggung jawab atas seluruh perilaku dinamis komponen—mulai dari transisi runtuh (*collapse*) pada navigasi ponsel, hingga kemunculan animasi pop-up pada jendela Modal Dialog."*

---

### 🟢 BAGIAN 3: Responsive Navbar, Sticky State, & Hamburger Collapse
**Alokasi Waktu:** 02:45 – 04:00 (Durasi: ~75 detik)  
**Aksi di Layar:** 
1. Buka browser, tunjukkan bilah navbar di desktop. Scroll sedikit ke bawah untuk membuktikan kelas `sticky-top`.
2. Tekan tombol `F12` / `Ctrl + Shift + M` untuk mengaktifkan *Device Emulation Toolbar* (set ukuran ke 390px / layar smartphone).
3. Klik tombol toggle hamburger menu (`navbar-toggler`) berkali-kali untuk memperlihatkan animasi transisi buka-tutup.
4. Buka tab **Console** di DevTools untuk menunjukkan bahwa tidak ada error sama sekali.

> *"Kedua, kita beralih ke komponen navigasi utama pada elemen semantik `<header>` dan `<nav>`.*
>
> *(Perlihatkan browser di desktop)*  
> *Di layar lebar atau desktop, navbar menggunakan kelas bawaan Bootstrap `.navbar`, `.navbar-expand-lg`, dan kelas utilitas `.sticky-top`. Fitur sticky-top ini membuat bilah navigasi tetap terkunci di bagian teratas layar saat pengguna menggulir konten ke bawah, memberikan kemudahan akses navigasi secara permanen.*
>
> *(Alihkan ke tampilan mobile)*  
> *Sekarang, perhatikan ketika kita menguji responsivitas pada layar ponsel di bawah breakpoint `992px` (yaitu batas `lg`).*  
> *Bootstrap secara otomatis menyembunyikan daftar menu horizontal dan menampilkannya dalam bentuk **Tombol Hamburger Toggle** (`.navbar-toggler`).*
>
> *(Tunjukkan kode di VS Code baris 48–56)*  
> *Di balik layar, mekanisme ini digerakkan oleh atribut data HTML5 modern milik Bootstrap, yaitu:*  
> * `data-bs-toggle="collapse"` — memberitahu engine JS untuk mengontrol status runtuh/buka,*  
> * `data-bs-target="#mainNavbar"` — mengarahkan target kontrol secara presisi ke elemen div pembungkus menu yang memiliki id `mainNavbar`.*
>
> *(Klik tombol hamburger di browser)*  
> *Saat tombol ini diklik, container menu meluncur turun dengan efek transisi akordeon yang rapi. Menu tautan disusun vertikal lengkap dengan tombol aksi 'Hubungi Saya'.*  
> *Dan seperti yang Bapak dan rekan-rekan asisten lihat di tab DevTools Console, **sama sekali tidak terdapat error JavaScript** (`0 errors`), membuktikan inisialisasi Bootstrap Bundle JS berjalan 100% sempurna."*

---

### 🟢 BAGIAN 4: Hero Section, Sistem Grid 12-Kolom, & Semantik HTML5
**Alokasi Waktu:** 04:00 – 05:30 (Durasi: ~90 detik)  
**Aksi di Layar:** Kembalikan browser ke layar desktop (lebar penuh), sorot bagian **Hero Section / Tentang Saya**. Buka kode `index.html` baris 90–188 untuk memperlihatkan struktur grid.

> *"Ketiga, mari kita bedah **Hero Section** atau seksi 'Tentang Saya' yang dibungkus tag `<section id="tentang" class="section-hero py-5">`.*
>
> *(Arahkan ke kode grid)*  
> *Pada modul praktikum, kita dituntut menguasai **Bootstrap 12-Column Grid System**. Di sini, kami membuat container pembungkus yang memuat satu baris flexbox: `<div class="row align-items-center g-5">`.*  
> *Angka 12 kolom tersebut dibagi secara harmonis menjadi dua porsi:*
> 1. * **Kolom Kiri (`col-12 col-lg-7`)**: Mengambil porsi 7 dari 12 kolom pada layar desktop. Kolom ini memuat:
>    * Badge status ketersediaan interaktif dengan indikator animasi titik berdenyut (*pulse-dot animation*).
>    * Heading utama `<h1>` dengan nama lengkap saya, dipertegas warna aksen brand.
>    * Keterangan spesialisasi dan biografi akademik yang menyoroti fokus saya di bidang Full-Stack Web dan Aksesibilitas WCAG.
>    * Dua tombol Call-to-Action bergaya modern: tombol utama *'Ajukan Konsultasi'* (`.btn-brand-primary`) dan tombol sekunder *'Lihat Portofolio'* (`.btn-outline-brand`).
>    * Serta dua modul terstruktur: daftar **Kompetensi Inti** menggunakan tag semantik Unordered List (`<ul>`) dan **Tahapan Standar Kerja Proyek** menggunakan Ordered List (`<ol>`).
> 2. * **Kolom Kanan (`col-12 col-lg-5`)**: Mengambil sisa 5 kolom. Kolom ini memuat:
>    * Foto profil potret resmi saya menggunakan elemen semantik murni HTML5: `<figure class="profile-figure">`, gambar `<img>` dengan rasio presisi 1:1, dan teks keterangan `<figcaption>` yang memuat Nama dan NIM: 12S24016.
>    * Di bawah foto, terdapat kartu ringkasan identitas akademik yang dibangun menggunakan elemen **Semantic Definition List (`<dl>`, `<dt>`, `<dd>`)** untuk menyajikan data Program Studi S1 Sistem Informasi, Institut Teknologi Del, dan nama matakuliah.*
>
> *(Jelaskan penanganan layering)*  
> *Satu aspek teknis penting yang kami terapkan di sini adalah pengelolaan **Layering z-index**. Pada navbar kita sematkan `z-index: 1040`, sementara kartu foto profil ditempatkan secara natural di dalam grid flow sehingga ketika pengguna melakukan scroll ke bawah, seluruh elemen hero section akan meluncur secara teratur di bawah navbar tanpa ada satupun elemen yang menabrak atau menutupi bilah navigasi."*

---

### 🟢 BAGIAN 5: Galeri Portofolio 4 Kartu & Deep Dive Modal Dialog
**Alokasi Waktu:** 05:30 – 07:15 (Durasi: ~105 detik)  
**Aksi di Layar:** 
1. Scroll ke bagian **Galeri Portofolio Proyek Unggulan**.
2. Tunjukkan susunan 4 kartu dalam grid `row row-cols-1 row-cols-md-2 g-4`.
3. Arahkan mouse ke atas kartu untuk memperlihatkan animasi garis aksen teal di atas kartu (*micro-interaction*).
4. Klik tombol **"Detail Proyek & Modal"** pada kartu **KUSKAS**, jelaskan struktur modal dialog yang terbuka, lalu tutup.
5. Klik tombol **"Detail Proyek & Modal"** pada kartu **DEL-SIP**, buktikan bahwa modal dialog ke-4 ini memiliki gambar pratinjau, teks penjelasan arsitektur, dan tautan yang berbeda.

> *"Keempat, kita memasuki salah satu komponen paling berbobot dalam penugasan Modul 3, yaitu **Galeri Portofolio Proyek Unggulan**.*
>
> *(Perlihatkan grid 4 kartu di browser)*  
> *Sesuai kriteria evaluasi praktikum, mahasiswa diwajibkan menyajikan **minimal 4 kartu proyek responsif**. Di sini saya mempersembahkan 4 karya nyata rekayasa perangkat lunak:*
> 1. * **KUSKAS (Keuangan Sakti Kas)** — Aplikasi pencatatan finansial cerdas dengan integrasi AI Voice Categorization Google Gemini dan backend Supabase.*
> 2. * **KOCARI (E-Commerce Trust Aggregator)** — Mesin pencari independen dan algoritma pembobotan skor reputasi toko daring berbasis web scraping.*
> 3. * **Aether Weather** — Aplikasi pemantau cuaca modern yang memadukan visual adaptif Glassmorphism dengan OpenWeather API.*
> 4. *Dan proyek ke-4 baru yang kami tambahkan khusus untuk memenuhi modul ini: **DEL-SIP (Portal Monitoring Praktikum Del)** — Sistem informasi berbasis web PHP dan Bootstrap untuk dasbor analitik pelaporan praktikum laboratorium mahasiswa.*
>
> *Keempat kartu ini dibungkus menggunakan layout kelas Bootstrap modern: `<div class="row row-cols-1 row-cols-md-2 g-4">`. Artinya, pada layar ponsel sistem menampilkan 1 kolom penuh, dan pada layar tablet serta desktop otomatis membelah menjadi 2 kolom simetris dengan jarak gutter (`g-4`) yang seragam.*  
> *Setiap kartu menggunakan elemen `<article class="card h-100 project-card">`, memastikan tinggi seluruh kartu selalu sejajar secara presisi berapapun panjang teks deskripsinya.*
>
> *(Klik tombol Detail Proyek & Modal pada KUSKAS)*  
> *Sekarang, perhatikan inovasi interaktivitasnya. Sesuai spesifikasi modul yang mewajibkan implementasi **minimal 2 Modal Dialog Bootstrap**, pada portofolio ini **seluruh 4 proyek telah terhubung ke 4 modal dialog interaktif yang unik**.*  
> *Saat tombol 'Detail Proyek & Modal' diklik, atribut `data-bs-toggle="modal"` dan `data-bs-target="#modalProjectKuskas"` memicu komponen dialog beranimasi fade-in.*  
>  
> *(Jelaskan isi modal KUSKAS)*  
> *Di dalam modal ini, pengguna disuguhkan banner pratinjau antarmuka, uraian mendalam mengenai 'Latar Belakang & Solusi Masalah', daftar 'Arsitektur & Fitur Unggulan', lencana teknologi, tombol tutup, serta tombol tautan langsung menuju repositori publik GitHub saya.*
>
> *(Tutup modal KUSKAS, lalu buka modal DEL-SIP)*  
> *Mari kita buktikan pada proyek ke-4, DEL-SIP. Saat dibuka, modal menampilkan aset gambar pratinjau `project-4.jpg`, arsitektur Chart.js, RBAC Security, dan basis data relasional MySQL. Ini membuktikan bahwa setiap modal bukan sekadar duplikasi template, melainkan memiliki konten data yang orisinal dan independen."*

---

### 🟢 BAGIAN 6: Struktur Semantik Tabel Riwayat Matakuliah Akademik
**Alokasi Waktu:** 07:15 – 08:15 (Durasi: ~60 detik)  
**Aksi di Layar:** Scroll ke bagian **Riwayat Matakuliah & Rekam Jejak Akademik**. Arahkan mouse ke baris-baris tabel untuk memperlihatkan respons visual hover. Buka kode `index.html` baris 480–600.

> *"Kelima, kita beralih ke seksi **Riwayat Matakuliah & Rekam Jejak Akademik** yang dibungkus tag `<section id="riwayat" class="section-history py-5">`.*
>
> *(Tunjukkan struktur tabel di VS Code dan browser)*  
> *Tabel ini dirancang untuk menyajikan transparansi rekam jejak perkuliahan inti Program Studi S1 Sistem Informasi di Institut Teknologi Del. Struktur HTML5-nya 100% patuh pada hierarki tabel standar:*
> * Elemen `<div class="table-responsive">` membungkus tabel agar ketika dibuka di layar ponsel yang sempit, tabel dapat digeser horizontal tanpa merusak tata letak halaman.*
> * Tag `<table>` menerapkan kelas Bootstrap `.table`, `.table-hover`, dan kelas kustom `.academic-table`.*
> * Bagian kepala `<thead>` menggunakan tag `<th>` dengan atribut `scope="col"` untuk mendefinisikan nama matakuliah, semester, bobot SKS, status nilai, dan capaian kompetensi.*
> * Bagian badan `<tbody>` memuat baris-baris matakuliah unggulan—seperti Pemrograman Web, Pemrograman Aplikasi Mobile (Nilai A), Sistem Basis Data (Nilai A), Analisis Sistem, dan Struktur Data.*
> * Status kelulusan dan nilai ditampilkan menggunakan badge Bootstrap yang informatif (`.badge.bg-primary-subtle`).*
> * Dan pada bagian kaki `<tfoot>`, kita menyajikan ringkasan akumulasi total SKS dan rata-rata capaian IPK mahasiswa (3.95).*
>
> *Di berkas `style.css`, kami memberikan padding sel yang proporsional serta transisi warna latar lembut saat kursor melintasi setiap baris tabel, menciptakan pengalaman visual yang informatif dan profesional."*

---

### 🟢 BAGIAN 7: Modernisasi Formulir Layanan, Floating Labels, & Validasi Visual JS
**Alokasi Waktu:** 08:15 – 09:45 (Durasi: ~90 detik)  
**Aksi di Layar:** 
1. Scroll ke bagian **Formulir Permohonan Layanan & Diskusi Proyek**.
2. Klik salah satu input teks (misal: Alamat Email) untuk memperlihatkan animasi label melayang (*floating labels*).
3. Tunjukkan ikon person, envelope, phone pada sisi kiri input (*Input Groups*).
4. **Klik tombol submit 'Kirim Permohonan Layanan' saat form masih kosong.** Sorot pesan error merah dan border merah yang muncul serentak di seluruh form.
5. Isi data contoh: Nama "Boy Harendy Simamora", Email "boyharendy321@gmail.com", No Telp "081234567890", pilih kategori, tanggal, centang checkbox S&K.
6. Tunjukkan bahwa seluruh kotak isian berubah warna menjadi hijau (`.valid-feedback`).
7. Klik tombol **"Reset Isian"** untuk mengembalikan form ke kondisi bersih.

> *"Keenam, mari kita tinjau bagian yang paling menuntut penguasaan interaktivitas komponen form, yaitu **Formulir Permohonan Layanan & Diskusi Proyek**.*
>
> *(Perlihatkan fitur-fitur form)*  
> *Di sini kita melakukan modernisasi menyeluruh dengan mengadopsi 4 komponen mutakhir Bootstrap 5:*
> 1. * **Floating Labels (`.form-floating`)**: Pada kotak Nama, Email, Telepon, Tanggal, URL, dan Catatan Kebutuhan. Label berada di tengah kotak saat kosong, dan begitu kursor aktif atau teks diketik, label secara otomatis bertransisi mengecil dan melayang ke sudut atas.*
> 2. * **Input Groups Berikon (`.input-group` dan `.input-group-text`)**: Setiap kotak isian dilengkapi ikon vektor Bootstrap di sisi kiri (ikon user, amplop, telepon, kalender, tautan), memberikan kejelasan visual seketika bagi pengguna mengenai tipe data yang diminta.*
> 3. * **Form Controls Lanjutan**: Terdiri atas radio card pemilihan tipe layanan interaktif (`.service-radio-card`), dropdown select durasi proyek, dan checkbox wajib untuk persetujuan etika komunikasi akademik.*
>
> *(Lakukan uji validasi di browser)*  
> *Puncak keunggulannya terletak pada **Sistem Validasi Visual Berbasis JavaScript (`needs-validation`)**.*  
> *Sesuai panduan resmi Bootstrap 5, validasi bawaan browser yang berupa tooltip kaku kami nonaktifkan menggunakan atribut `novalidate`.*  
>  
> *(Buka script JS di VS Code baris 1089–1116)*  
> *Pada bagian bawah dokumen, kami menyematkan skrip JavaScript self-invoking (IIFE) yang menangkap event submit formulir:*  
> * Jika ada input wajib bertanda bintang yang belum terisi atau format email tidak valid, fungsi `form.checkValidity()` akan bernilai `false`. Skrip menjalankan `event.preventDefault()` dan `event.stopPropagation()`, lalu menyuntikkan kelas `.was-validated` ke elemen `<form>`.*  
> * Akibatnya, seluruh kotak yang belum valid seketika menyala dengan **garis tepi merah disertai pesan error `.invalid-feedback`**.*  
> * Sebaliknya, saat pengguna menginput data yang benar, status visual otomatis berganti menjadi **garis tepi hijau dengan pesan sukses `.valid-feedback`**.*  
> * Kami juga menambahkan event listener pada tombol reset (`#btnResetForm`) yang secara cerdas mencopot kelas `.was-validated`, sehingga formulir kembali bersih seperti sedia kala."*

---

### 🟢 BAGIAN 8: Advanced Custom CSS: 25 Design Tokens, Mikro-Interaksi Lab 1, & WCAG
**Alokasi Waktu:** 09:45 – 10:45 (Durasi: ~60 detik)  
**Aksi di Layar:** 
1. Buka berkas `style.css` di VS Code, sorot blok `:root` (baris 12–52).
2. Kembali ke browser, arahkan mouse ke kartu portofolio dan kartu aside untuk memperlihatkan animasi hover.

> *"Ketujuh, mari kita bedah berkas penentu identitas visual kita, yaitu **`style.css`**.*
>
> *(Sorot blok :root di VS Code)*  
> *Di bagian paling atas, kami mendefinisikan **25 CSS Custom Properties pada `:root`**, melampaui jauh syarat minimal 6 variabel yang diminta pada rubrik penilaian modul. Variabel ini mencakup:*  
> * Palet warna brand: `--brand-primary` (#0f766e - Deep Teal), `--brand-accent` (#0d9488), dan `--brand-bg` (#f8fafc),*  
> * Sistem tipografi: font Plus Jakarta Sans dan warna teks Slate,*  
> * Geometri kelengkungan: `--card-radius: 16px`,*  
> * Serta sistem elevasi bayangan bertingkat: `--shadow-subtle`, `--shadow-lift`, dan `--shadow-card`.*
>
> *(Perlihatkan mikro-interaksi Lab 1 pada kartu)*  
> *Berikutnya, kami mengimplementasikan **Mikro-Interaksi Lab 1** dari modul praktikum pada kelas `.project-card`. Kami memanfaatkan pseudo-element `::before` dengan ketebalan 3 piksel berwarna teal yang memiliki nilai awal `transform: scaleX(0)` dengan titik tumpu `transform-origin: left`.*  
> *Ketika kursor pengguna menyentuh kartu (`:hover`), garis aksen tersebut memanjang mulus ke kanan (`scaleX(1)`) disertai efek kartu yang terangkat naik (*lift effect*) sebesar `-4px`. Ini memberikan umpan balik taktil digital yang sangat mewah dan dinamis.*
>
> *(Sorot aspek kualitas kode)*  
> *Yang paling membanggakan, seluruh berkas `style.css` ini memiliki **Nol penggunaan kata kunci `!important` (`0 !important`)**. Ini adalah bukti kepatuhan terhadap prinsip arsitektur CSS bersih, di mana seluruh gaya override menimpa Bootstrap murni melalui kalkulasi spesifisitas selektor yang matang."*

---

### 🟢 BAGIAN 9: Aside, Footer Berkontras, Git Management, & Penutup
**Alokasi Waktu:** 10:45 – 11:30 (Durasi: ~45 detik)  
**Aksi di Layar:** 
1. Scroll ke bagian paling bawah web: seksi **Aside** dan **Footer**. Tunjukkan kontras teks footer yang tajam dan lencana repositori.
2. Buka terminal VS Code, jalankan perintah `git branch` dan `git status`.
3. Buka berkas `README.md` bagian Tabel Komparasi.

> *"Sebagai penutup, kita melihat dua elemen semantik penting di bagian akhir:*
> 1. * **Seksi `<aside id="aside-info">`**: Menyajikan kartu status ketersediaan proyek, metrik rekam jejak rekayasa (12+ repositori GitHub, IPK 3.95, dan 100% Bootstrap Semantik), serta kutipan rekomendasi pembimbing laboratorium.*
> 2. * **Seksi `<footer>`**: Mengadopsi palet dark-slate kontemporer dengan kontras tinggi standar WCAG 2.2 AA. Footer memuat elemen semantik `<address>` untuk kontak resmi institusi Institut Teknologi Del, tautan jejaring sosial, tombol kembali ke atas (*back-to-top*), serta lencana repositori publik `PPW-Portofolio-Project`.*
>
> *(Tunjukkan terminal VS Code dan README.md)*  
> *Seluruh siklus pengerjaan tugas ini dikelola secara rapi di bawah cabang Git resmi **`PPW-2026-Week3_12S24016`**.*  
> *Dokumentasi pada berkas **`README.md`** juga telah kami lengkapi dengan **Tabel Komparasi 11 Poin Sebelum vs Sesudah Integrasi Framework**, mendokumentasikan setiap perubahan arsitektur dari CSS murni Minggu 2 menjadi Bootstrap 5 Minggu 3 secara transparan.*
>
> *Demikian presentasi komprehensif penugasan Praktikum Minggu 03 dari saya, Boy Harendy Simamora.*  
> *Terima kasih yang sebesar-besarnya atas bimbingan dan waktu Bapak/Ibu Dosen serta rekan-rekan asisten laboratorium.*  
> *Horas, salam sehat, dan selamat pagi/siang."*

---

## 🎯 Lembar Uji & Pertanyaan yang Sering Diajukan Asisten Lab (FAQ / Defense Guide)

Saat sesi tanya-jawab (*Q&A / Defense*) setelah presentasi 10 menit, asisten dosen biasanya menanyakan hal-hal berikut. Anda dapat menjawab dengan percaya diri menggunakan panduan ini:

### **Q1: Mengapa file `style.css` harus dipanggil setelah CDN Bootstrap?**
> **Jawaban:** *"Karena algoritma Cascading pada browser memproses aturan stylesheet dari atas ke bawah. Ketika dua selektor memiliki bobot spesifisitas yang sama, aturan yang dideklarasikan paling akhir yang akan diterapkan. Menaruh `style.css` setelah Bootstrap memungkinkan kita menimpa styling bawaan framework secara modular dan elegan tanpa perlu menggunakan deklarasi kasar seperti `!important`."*

### **Q2: Bagaimana cara kerja validasi visual Bootstrap 5 pada formulir layanan Anda?**
> **Jawaban:** *"Formulir diberi atribut `novalidate` untuk mematikan gelembung tooltip HTML5 bawaan browser yang kaku. Ketika event submit terpicu, skrip JavaScript mengeksekusi metode DOM `form.checkValidity()`. Jika ada field wajib yang kosong atau salah format, form menyuntikkan kelas `.was-validated`. Kelas ini secara otomatis mengaktifkan pseudo-class `:invalid` dan `:valid` milik Bootstrap yang menampilkan kotak merah `.invalid-feedback` atau kotak hijau `.valid-feedback` secara instan."*

### **Q3: Mengapa kartu foto profil di Hero Section tidak dibuat sticky-top?**
> **Jawaban:** *"Karena bilah navigasi header sudah memiliki posisi `sticky-top` dengan `z-index: 1040`. Jika kartu profil di dalam grid konten juga diberi `sticky-top`, pada saat pengguna menggulir halaman ke bawah, kartu profil akan melayang melewati batas Hero Section dan menabrak bilah navigasi atau menutupi galeri portofolio di bawahnya. Menjadikan kartu profil berada di dalam flow grid normal memastikan konten mengalir secara harmonis dan meluncur rapi di bawah navbar saat di-scroll."*

### **Q4: Bagaimana Anda membuktikan bahwa website Anda memenuhi kriteria WCAG 2.2 Level AA?**
> **Jawaban:** *"WCAG 2.2 Level AA mewajibkan rasio kontras warna minimal 4.5:1 untuk teks biasa terhadap latar belakangnya. Pada palet tema kami, teks utama menggunakan Slate 900 (`#0f172a`) di atas latar Slate 50 (`#f8fafc`) yang menghasilkan rasio kontras di atas 14:1. Pada footer gelap (`#0b1324`), kami menghindari teks redup dan menggunakan teks Light Slate (`#cbd5e1` dan `#f1f5f9`) yang teruji memiliki rasio kontras tajam di atas 7:1. Selain itu, seluruh elemen interaktif memiliki outline `:focus-visible` untuk navigasi keyboard ramah pembaca layar."*

---

## 💡 Tips Praktis untuk Rekaman 10 Menit yang Sempurna

1. **Jaga Tempo Bicara**: Jangan terburu-buru. Berbicara dengan tempo santai sekitar 120–140 kata per menit akan membuat durasi presentasi Anda secara alami mencapai 10 hingga 12 menit.
2. **Kombinasikan Tampilan**: Jangan biarkan layar statis pada satu halaman lebih dari 45 detik. Bolak-baliklah secara halus antara tampilan antarmuka di peramban, inspeksi elemen DevTools, dan baris kode di VS Code.
3. **Sorot Baris Kode**: Saat menjelaskan suatu fitur di VS Code, gunakan seleksi teks (*highlight*) agar pandangan penonton langsung tertuju pada baris kode yang sedang Anda bedah.
