import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const TextInput: FC<Props> = (props) => (
  <input {...props} className={styles.TextInput} />
);
