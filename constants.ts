
export const COMPANY_INFO = {
  name: "Ganesa Mas",
  tagline: "Distributor Buku Sekolah & Alat Tulis Terpercaya di Bali",
  address: "Jl. Raya Puputan No. 123, Renon, Denpasar, Bali",
  phone: "+62 812-3456-7890",
  email: "info@ganesamas.com",
  waLink: "https://wa.me/6281234567890",
};

export interface Book {
  id: number;
  title: string;
  category: "SD" | "SMP" | "SMA" | "Umum";
  price: string;
  image: string;
  description: string;
}

export const CATALOG: Book[] = [
  {
    id: 1,
    title: "Matematika Cerdas SD Kelas 1",
    category: "SD",
    price: "Rp 45.000",
    image: "https://picsum.photos/seed/book1/400/500",
    description: "Buku panduan matematika dasar untuk siswa sekolah dasar."
  },
  {
    id: 2,
    title: "Bahasa Indonesia Terampil SMP",
    category: "SMP",
    price: "Rp 55.000",
    image: "https://picsum.photos/seed/book2/400/500",
    description: "Meningkatkan kemampuan literasi dan tata bahasa tingkat menengah."
  },
  {
    id: 3,
    title: "Fisika Modern SMA Kelas 12",
    category: "SMA",
    price: "Rp 75.000",
    image: "https://picsum.photos/seed/book3/400/500",
    description: "Pembahasan mendalam konsep fisika untuk persiapan ujian nasional."
  },
  {
    id: 4,
    title: "Atlas Indonesia & Dunia",
    category: "Umum",
    price: "Rp 60.000",
    image: "https://picsum.photos/seed/book4/400/500",
    description: "Kumpulan peta lengkap terbaru berskala nasional dan internasional."
  },
  {
    id: 5,
    title: "Sains Eksplorasi SD Kelas 4",
    category: "SD",
    price: "Rp 48.000",
    image: "https://picsum.photos/seed/book5/400/500",
    description: "Mengenal alam dan lingkungan dengan metode eksperimen seru."
  },
  {
    id: 6,
    title: "Ekonomi Bisnis SMA",
    category: "SMA",
    price: "Rp 68.000",
    image: "https://picsum.photos/seed/book6/400/500",
    description: "Panduan dasar manajemen dan ekonomi untuk siswa tingkat atas."
  }
];
