import styles from "./styles.module.css";
import { Counter } from "@/pages/home/ui";

const HomePage = () => {
  return (
    <main className={styles.root}>
      <Counter />
    </main>
  );
};

export default HomePage;
