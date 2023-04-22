import { FC } from "react";

import { Button } from "@/shared/ui/Button";

import headerImg from "./header.svg";
import logomark from "./logomark.svg";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const SingInPage: FC<Props> = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={headerImg} alt="Header background" />
      </header>
      <main className={styles.main}>
        <img className={styles.logomark} src={logomark} alt="Brello logomark" />
        <section className={styles.section}>
          <h1 className={styles.headLine}>Sign in</h1>
          <p className={styles.description}>Start your 30-day free trial.</p>
          <form action="#" className={styles.form}>
            <label className={styles.form}>
              <span>Email</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>
            <Button type="submit">Get started</Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SingInPage;
