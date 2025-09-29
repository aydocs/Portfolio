import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "~/components/ui/Button";  // Button.tsx dosyasını import ettik
import Image from 'next/image';

const PromotionalWS: React.FC = () => {
  return (
    <div className="pb-48 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8 text-primary relative"
        >
          <p className="text-5xl sm:text-6xl text-left overflow-hidden text-foreground/10 absolute font-bold">
            Promotional Web Site
          </p>
          <p className="pt-5 sm:pt-6 pl-1 text-4xl sm:text-5xl font-bold">
            Promotional Web Site
          </p>
        </motion.h1>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-primary">
              Ürünümüzle Tanışın
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ürünümüzle ilgili detaylı bilgi almak için hemen bizimle iletişime geçin.
            </p>
            <div className="mt-8">
              <Button onClick={() => (window.location.href = '/contact')}>
                İletişim
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 relative w-full h-96">
            <Image
              src="/images/nah.jpeg"
              alt="Ürün Görseli"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalWS;
