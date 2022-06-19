import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Maintenance: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BeeReign Under Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sistema en <a>Mantenimiento</a>
        </h1>

        <p className={styles.description}>Regresamos en unos minutos</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Bee-Reign"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 <span> BeeReign</span>
        </a>
      </footer>
    </div>
  );
};

export default Maintenance;
