import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-white">
        <Navbar />
      </div>
    </>
  );
}
