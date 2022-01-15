import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Swipe from '../components/swipe'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>
      {/* <video
        src="https://demo.acknoledger.com/assets/space-bg.mp4"
        type="video/mp4"
        playsInline
        autoPlay
        muted
        loop
        className={styles.myVideo}
      ></video> */}
      <header className={styles.header}>
        <nav>
          <img
            src="./images/logo.72d2ab8d.png"
            alt="logo"
            width="162px"
          />
        </nav>
      </header>
      <h1 className={styles.Title}>
        You are the chosen one,<br />
        <br />
        <span>Choose your metaverse now</span>
      </h1>
      <div >
        <Swipe />
      </div>
    </div>
  )
}
