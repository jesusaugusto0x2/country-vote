import { FC, SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type Props = Omit<SelectProps, "children"> & {
  options: {
    value: string | number;
    label: string;
  }[];
};

export const SelectInput: FC<Props> = ({ options, ...props }) => (
  <select {...props} className={styles.SelectInput}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
