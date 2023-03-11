import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import '@/styles/app-style.css'
import { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import Loading from "@/components/loading";


export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )
}
