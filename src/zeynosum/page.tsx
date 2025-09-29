'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeartData {
  id: string;
  emoji: string;
  left: string;
  color: string;
  delay: number;
  duration: number;
}

export default function Zeynosum() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    setIsClient(true);

    // Kalp verilerini oluştur
    const heartEmojis = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🩵", "🤍", "🤎", "💖", "💘", "💝", "💕", "💓", "🫶"];
    const heartColors = ['#f472b6', '#ec4899', '#e11d48'];

    const generatedHearts: HeartData[] = [];
    for (let j = 0; j < heartEmojis.length; j++) {
      for (let i = 0; i < 12; i++) {
        generatedHearts.push({
          id: `${heartEmojis[j]}-${i}`,
          emoji: heartEmojis[j],
          left: `${Math.random() * 100}%`,
          color: heartColors[Math.floor(Math.random() * heartColors.length)],
          delay: Math.random() * 5,
          duration: 6 + Math.random() * 3,
        });
      }
    }
    setHearts(generatedHearts);

    // Müzik başlatma
    const audio = audioRef.current;
    if (audio) {
      const startAudio = () => {
        audio.play().catch(() => {});
        document.removeEventListener("click", startAudio);
      };
      document.addEventListener("click", startAudio);
    }
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
      {/* 🎵 Müzik */}
      {isClient && (
        <audio ref={audioRef} src="/audio/senden-daha-guzel.mp3" loop />
      )}

      {/* 💗 Uçan Kalpler */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-2xl sm:text-3xl"
          initial={{
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -150,
            opacity: [0, 1, 0],
            scale: [0.5, 1.5],
          }}
          transition={{
            delay: heart.delay,
            duration: heart.duration,
            repeat: Infinity,
          }}
          style={{
            left: heart.left,
            color: heart.color,
            zIndex: 0,
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      {/* 💌 Başlık */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-pink-700 z-10"
      >
        Birtaneme Sevgilerle 💗
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl max-w-2xl text-gray-700 z-10"
      >
        Bu sayfa sana özel...  
        Varlığın, günümün en parlak ışığı.  
        Sesin, kalbimin melodisi.  
        Gülüşün, ruhumun huzuru.  
        Seni tanıdığım için her gün şükrediyorum.  
        Zeynoşum, seni çok seviyorum. 💞
      </motion.p>

      {/* 💖 Fotoğraf */}
      <motion.div
        className="mt-12 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <img
          src="/images/nah.jpeg"
          alt="nasıl site ama aşkım"
          className="rounded-full shadow-lg w-60 h-60 object-cover border-4 border-pink-300"
        />
      </motion.div>
    </main>
  );
}
