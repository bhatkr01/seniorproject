import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage/HomePage.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LutherMarketplace</title>
        <meta name="description" content="Luther Marketplace website" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <main className={styles.main}>
	  <HomePage />
      </main>

      <footer className={styles.footer}>
	  Copyright Luther Marketplace
      </footer>
    </div>
  )
}
