"use client"

import { useEffect } from 'react';

function TawkToClient() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/61c890ecc82c976b71c393d0/1fnrnc7pr';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };  }, []);

  return null;
}

export default TawkToClient;