import Head from "next/head";

import Header from "@/components/Header";
import TopCards from "@/components/TopCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>BookVerse | Home</title>
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Header />
        <TopCards />
      </main>
    </>
  );
}
