import { NextUIProvider } from "@nextui-org/react";
import NextTopLoader from "nextjs-toploader";
import "@/styles/globals.css";

import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader />
      <NextUIProvider>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </NextUIProvider>
    </>
  );
}
