import Head from "next/head";
import { useState } from "react";
import { Preheader, Header, HamburgerMenu, Blog } from "../components";
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Digimedia</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto relative max-w-full'>
        <Preheader />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={isOpen} />
        <Blog />
      </div>
    </>
  );
}