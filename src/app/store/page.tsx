'use client';
import Image from "next/image";
import Header from '~/components/Header';
import Footer from "~/components/Footer";
import Store2 from "~/components/Store2";
import { Navbar } from "~/components/Navbar";


export default function Home() {
  return (
    <main>
      <Header />
      <Store2 />

      <Navbar />
      <Footer />

      <Image className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg -z-50' width={1200} height={1000} src="/images/bg.svg" alt="" />
    </main>
  );
}