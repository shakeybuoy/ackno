import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import LoadingScreen from "../components/loadingScreen";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); setTimeout(() => {
      setLoading(false);
    }, 8000)
  }, [])

  return (
    <div>
      {
        loading ? <LoadingScreen />
          : <Component {...pageProps} />

      }


    </div>
  )
}

export default MyApp

