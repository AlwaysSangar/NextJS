"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Star, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/alwanrafa.jpg"
              alt="Foto profil Alwan Rafa - Pengembang perangkat lunak"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Tentang Saya</h1>
          <p className="text-gray-500 mt-2">Kenali saya lebih dekat 🚀</p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Halo! Saya <span className="font-semibold">Alwan Rafa</span>, seorang
            pengembang perangkat lunak yang penuh semangat dan dedikasi.
          </p>
          <p>
            <Star className="inline w-5 h-5 text-yellow-500 mr-2" />
            Saya berani menghadapi tantangan baru, selalu siap belajar, dan tidak
            ragu mengambil risiko untuk mencapai tujuan.
          </p>
          <p>
            <Target className="inline w-5 h-5 text-blue-500 mr-2" />
            Tanggung jawab adalah hal utama bagi saya—setiap tugas harus selesai
            tepat waktu dengan kualitas terbaik.
          </p>
          <p>
            <Heart className="inline w-5 h-5 text-red-500 mr-2" />
            Saya rajin, tekun, dan peduli terhadap orang lain. Kerja tim adalah
            kunci kesuksesan, dan saya suka berkolaborasi dengan rekan kerja.
          </p>
          <p>
            <User className="inline w-5 h-5 text-green-500 mr-2" />
            Kreativitas dan inovasi adalah kekuatan saya—saya senang berpikir di
            luar kotak untuk menemukan solusi unik.
          </p>
          <p>
            Terima kasih sudah berkunjung 🙏. Jika ingin tahu lebih banyak tentang
            proyek saya atau sekadar ngobrol, jangan ragu untuk menghubungi!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
