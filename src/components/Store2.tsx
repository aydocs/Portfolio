'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Contents and Button import
import { Contents } from '~/contents/Sentences'; // Importing the Contents object
import { Button } from '~/components/ui/Button';  // Import the Button

// Icons import
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface StoreItem {
  title: string;
  description: string;
  price: number;
  image: string;
  language?: string;
  rating?: number;
  sales?: number;
  url: string;
}

function Store2() {
  const [storeItems, setStoreItems] = useState < StoreItem[] > ([]);

  useEffect(() => {
    const fetchStoreItems = async () => {
      try {
        const data = [...Contents.StoreItems]; // Convert readonly array to mutable
        setStoreItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoreItems();
  }, []);

  const openProductPage = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="pb-48 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8 text-primary"
        >
          <p className='text-5xl sm:text-6xl text-left overflow-hidden text-foreground/10 absolute font-bold '>Store</p>
          <p className='pt-5 sm:pt-6 pl-1 text-4xl sm:text-5xl font-bold '>Store</p>
        </motion.h1>

        <div>
          <motion.div
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 w-[95%] mt-8 mx-auto"
          >
            {storeItems.length > 0 ? (
              storeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col relative p-6 text-foreground m-1.5 bg-white rounded-lg border border-foreground/10 hover:border-foreground/20 duration-300 hover:scale-105 shadow-lg"
                  onClick={() => openProductPage(item.url)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }} // Yavaşça animasyonlu yükleme
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover mb-4 rounded-xl shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center text-sm text-gray-600">
                      <CodeIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
                      <span>{item.language ?? 'JavaScript'}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="flex items-center mr-2">
                        <StarOutlineIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
                        <span>{item.rating ?? 'N/A'}</span>
                      </div>
                      <div className="flex items-center">
                        <CallSplitIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
                        <span>{item.sales ?? 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary mt-2">{`${item.price} ₺`}</p>

                </motion.div>
              ))
            ) : (
              <p>😴 No products found.</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Store2;
