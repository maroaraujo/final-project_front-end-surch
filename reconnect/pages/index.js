import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DisplayLogo from '../component/Logo/logo'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DisplayLogo />
        <h1 className={styles.title}>
          Hello Maria
        </h1>

      </main>
    
    </div>
  )
}
