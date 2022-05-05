import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Konfav</title>
        <meta name="description" content="Make real connection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Konfav is under construction</h1>
        <p>we will be back!</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://konfav.com" rel="noopener noreferrer">
          Building Konfav
        </a>
      </footer>
    </div>
  );
}
