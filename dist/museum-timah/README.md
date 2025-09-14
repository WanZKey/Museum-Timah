# Museum Timah Indonesia

## Deskripsi Proyek
Website Museum Timah Indonesia adalah representasi digital dari museum yang didedikasikan untuk pelestarian dan edukasi sejarah pertambangan timah di Indonesia, khususnya di Bangka Belitung. Website ini menampilkan informasi profil museum, koleksi, pameran, serta fitur interaktif seperti video background dan carousel koleksi.

---

## Struktur Folder & File

```
museum-timah/
├── assets/
│   ├── images/                # Semua gambar/logo/foto koleksi dan profil museum
│   ├── scripts/
│   │   └── script.js          # JavaScript utama untuk interaktivitas (navbar, carousel, animasi, dsb)
│   └── styles/
│       └── style.css          # CSS utama untuk seluruh tampilan website
├── index.html                 # Halaman utama (Beranda)
├── pages/
│   ├── profile.html           # Halaman profil museum (tentang, lokasi, sejarah)
│   └── koleksi.html           # Halaman koleksi museum (daftar koleksi, gambar, deskripsi)
└── README.md                  # Dokumentasi proyek (file ini)
```

---

## Penjelasan File

- **index.html**  
  Halaman utama website. Menampilkan hero section dengan video YouTube sebagai background, pameran & acara, serta carousel koleksi unggulan. Navbar responsif dan footer dengan kontak serta media sosial.

- **pages/profile.html**  
  Halaman profil museum. Menampilkan foto museum, deskripsi sejarah/profil, serta card informasi lokasi lengkap dengan logo museum dan embed Google Maps.

- **pages/koleksi.html**  
  Halaman koleksi museum. Menampilkan daftar koleksi dalam bentuk grid card, masing-masing dengan gambar, nama koleksi, deskripsi singkat, dan jumlah koleksi.

- **assets/images/**  
  Berisi semua gambar yang digunakan di website, seperti logo museum, foto museum, gambar koleksi, dan ikon lainnya.

- **assets/styles/style.css**  
  File CSS utama. Mengatur layout responsif, warna, font, animasi hover, tampilan navbar, footer, card, carousel, dan seluruh elemen visual website.

- **assets/scripts/script.js**  
  File JavaScript utama. Mengatur:
  - Navigasi SPA (jika ada)
  - Hamburger menu pada mobile
  - Carousel koleksi
  - Animasi hover pada card
  - Smooth scroll pada tombol CTA

---

## Fitur Utama

- **Desain Responsif:**  
  Tampilan menyesuaikan perangkat (desktop/tablet/mobile) dengan menu hamburger pada layar kecil.

- **Video Background:**  
  Hero section di halaman utama menggunakan video YouTube sebagai background.

- **Carousel Koleksi:**  
  Koleksi unggulan dapat digeser secara horizontal (carousel) dengan tombol navigasi.

- **Card Interaktif:**  
  Setiap koleksi/pameran ditampilkan dalam card dengan animasi hover.

- **Profil & Lokasi Museum:**  
  Halaman profil menampilkan foto, deskripsi, logo, dan lokasi museum dengan Google Maps embed serta link ke Google Maps asli.

- **Footer Informatif:**  
  Menyediakan alamat, jam buka, kontak, dan link media sosial museum.

---

## Cara Menjalankan

1. **Buka Folder Proyek**
   - Pastikan semua file dan folder sudah sesuai struktur di atas.

2. **Jalankan Website**
   - Buka `index.html` di browser (double klik atau drag ke browser).
   - Navigasi ke halaman profil (`pages/profile.html`) dan koleksi (`pages/koleksi.html`) melalui menu.

3. **Catatan**
   - Pastikan gambar di folder `assets/images/` sudah lengkap sesuai referensi di HTML.
   - Untuk fitur video background, pastikan koneksi internet aktif agar video YouTube dapat diputar.

---

## Kontribusi

Kontribusi sangat terbuka!  
Silakan ajukan pull request atau issue jika ada saran, perbaikan, atau penambahan fitur.

---

## Lisensi

Website ini dibuat untuk tujuan edukasi dan non-komersial.  
Logo dan gambar koleksi adalah milik Museum Timah Indonesia atau sumber terkait.

---