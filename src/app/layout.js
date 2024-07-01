// 'use client'
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient.js";
// import TawkToClient from '@/components/TawkToClient.js';
import "@/assets/main.scss";
// import { useEffect } from 'react';
import { HomeSetting } from "@/services/shared-fetch-service";

 
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "W.E. Matter",
//   description: "Generated by create next app",
// };

// export const metadata = {
//   title: {
//     template: "%s | W.E. Matter",
//     default: "W.E. Matter",
//   },
//   description: "The official Next.js Learn Dashboard built with App Router.",
// };



export async function generateMetadata({ params }) {

  const homeSetting = await HomeSetting();

  return {
    title: homeSetting?.[0]?.meta_title_home,
    keywords: homeSetting[0]?.meta_keyword_home,
    description: homeSetting[0]?.meta_description_home,
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
        {/* <TawkToClient /> */}
        {/* <script async charset="UTF-8" src="https://embed.tawk.to/_s/v4/app/66790c3897f/languages/en.js"></script> */}
        {/* <script id="tawk-script" type="text/javascript">
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/61c890ecc82c976b71c393d0/1fnrnc7pr";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        </script> */}
      </body>
    </html>
  );
}
