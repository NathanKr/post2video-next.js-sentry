import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1>Sentry Demo for Next.js</h1>
            <p>
              Click the button to trigger sample errors and see Sentry email alerts in action.
            </p>
          </div>
          <div className={styles.ctas}>
            <Link href="/sentry-example-page" className={styles.primary}>
              Try the Demo →
            </Link>
          </div>
        </main>
      </div>
    );
  }
