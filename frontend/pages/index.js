import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LutherMarketplace</title>
        <meta name="description" content="Luther Marketplace website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
	  Welcome to Luther Marketplace.
        </h1>
	  <ul>
	  <li>
	  <Link href="/login">
	  <a> Login </a>
	  </Link>
	  </li>
	  </ul>
      </main>

      <footer className={styles.footer}>
	  Copyright Luther Marketplace
      </footer>
    </div>
  )
}
