import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "email" | "text";
  text?: string;
}

export const Input: FC<Props> = ({ className, type, text }) => {
  return (
    <label className={className}>
      <span className={styles.span}>{text}</span>
      <input type={type} />
    </label>
  );
};
