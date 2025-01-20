import { ButtonHTMLAttributes, FC } from "react";
import styles from "./styles.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => (
  <button {...props} className={styles.Button} />
);
