import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Remina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Project Remina!
        </h1>

        <p className={styles.description}>
          A mental health app to help level yourself up.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Find in-depth information about Project Remina's features.</p>
          </a>

          <a href="/dashboard" className={styles.card}>
            <h3>Dashboard &rarr;</h3>
            <p>Log in or Sign up to see your dashboard!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}