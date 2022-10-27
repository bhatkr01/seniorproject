import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage/HomePage.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LutherMarketplace</title>
        <meta name="description" content="Luther Marketplace website" />
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
