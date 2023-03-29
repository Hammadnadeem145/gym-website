import '@/styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    })
  }, [])

  return <Component {...pageProps} />
}
