"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PhotosPage() {
  const [playMusic, setPlayMusic] = useState(false);

  const photos = [
    "/binika6.jpg",
    "/binika2.jpg",
    "/binika8.jpg",
    "/binika10.jpg",
    "/binika.jpg",
    "/binika5.jpg",
    "/binika7.jpg",
    "/binika3.jpg",
    "/binika9.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-purple-100 p-8">
      
      {/* Show play button if music not started */}
      {!playMusic && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <button
            onClick={() => setPlayMusic(true)}
            className="px-6 py-3 text-lg font-bold text-white bg-rose-500 rounded-2xl shadow-lg hover:bg-rose-600 transition"
          >
            ▶ Play Music 🎶
          </button>
        </div>
      )}

      {playMusic && (
        <audio autoPlay loop>
          <source src="/Perfect.mp3" type="audio/mpeg" />
        </audio>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center text-rose-500 drop-shadow mb-12"
      >
        <p style={{ fontSize: "18px" }}>❤️✨favourite photos of yours✨❤️</p>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              className="w-full h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm mt-12 text-rose-400 font-medium">
        Made with love 💕 just for you.(I love u)<br />
        If I ever said or did anything that hurt you, I’m truly sorry. <br />
        Gali chai ngara lw. photo download gareko ma<br />
        Darlagxa😂.<br />
      </p>
    </div>
  );
}
