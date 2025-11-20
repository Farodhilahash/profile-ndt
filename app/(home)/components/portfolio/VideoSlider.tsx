"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function VideoSlider() {
  const slides = [
    {
        video: "/videos/siplah.mp4",
        desc: "SipLah Toko Ladang adalah platform pasar daring yang menyediakan barang dan jasa untuk satuan pendidikan. SIPLah Toko Ladang merupakan bagian dari Sistem Informasi Pengadaan Sekolah (SIPLah) yang merupakan sistem elektronik untuk pengadaan barang dan jasa oleh satuan pendidikan.",
    },
    {
        video: "/videos/toko-daring.mp4",
        desc: "Toko Daring merupakan sebuah sistem informasi yang dikembangkan dan dikelola oleh Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) untuk memfasilitasi pelaksanaan e-purchasing Pengadaan Barang/Jasa di K/L/PD melalui PPMSE yang berbentuk marketplace dan ritel daring.",
    },
    {
        video: "/videos/bayur.mp4",
        desc: "Aplikasi belanja sayur online adalah platform digital yang memungkinkan pengguna untuk membeli berbagai macam sayur dan bahan makanan segar secara praktis dan efisien. Melalui aplikasi ini, pengguna dapat menjelajahi katalog produk sayur, memilih item yang diinginkan, menambahkannya ke keranjang belanja, dengan pembayaran secara online.",
    },
    {
        video: "/videos/gaint-profit.mp4",
        desc: "Aplikasi Gain Profit adalah platform digital yang dirancang untuk membantu pengguna mengelola dan memaksimalkan keuntungan finansial mereka.",
    },
    {
        video: "/videos/administrasi.mp4",
        desc: "Aplikasi Sistem Administrasi Keuangan adalah perangkat lunak yang dirancang untuk membantu pengelolaan keuangan secara efektif dan efisien dalam suatu organisasi, perusahaan, atau instansi.",
    },

  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-6xl grid grid-cols-12 mb-12">
        <button onClick={prev} className="my-auto px-3 lg:ml-4 mr-2 w-10 max-w-10 h-10 max-h-10 hover:ring-1 hover:ring-purple-900 bg-slate-700/50 rounded-full cursor-pointer" >
            <ChevronLeftIcon className="stroke-white w-5 h-5 mx-auto -ml-1" />
        </button>
        <div className="col-start-2 col-span-10 bg-white h-[500px] rounded-3xl">
            <video
                src={slides[current].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[500px] shadow-lg border border-gray-700"
            />

        </div>
        <button onClick={next} className="my-auto px-3 lg:ml-4 mr-2 w-10 max-w-10 h-10 max-h-10 hover:ring-1 hover:ring-purple-900 bg-slate-700/50 rounded-full cursor-pointer" >
          <ChevronRightIcon className="stroke-white w-5 h-5 mx-auto " />
        </button>

        <p className="w-full h-24 max-h-24 col-start-2 col-span-10 mt-5 text-center">
          {slides[current].desc}
        </p>

    </div>
  );
}
