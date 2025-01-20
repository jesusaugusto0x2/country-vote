import { FC, SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type Option = {
  value: string | number;
  label: string;
};

type Props = Omit<SelectProps, "children"> & {
  options: Option[];
  disabledOption?: Option;
};

export const SelectInput: FC<Props> = ({
  options,
  disabledOption,
  ...props
}) => (
  <select {...props} className={styles.SelectInput}>
    {disabledOption && (
      <option value="" disabled>
        {disabledOption.label}
      </option>
    )}
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
