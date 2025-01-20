import { TdHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export type Column<T> = Omit<
  TdHTMLAttributes<HTMLTableCellElement>,
  "children" | "title" | "key"
> & {
  title: string;
  key: keyof T;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
  indexKey: keyof T;
};

export const Table = <T,>({ columns, data, indexKey }: Props<T>) => (
  <div className={styles.TableContainer}>
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={String(row[indexKey])}>
            {columns.map((column) => (
              <td key={String(column.key)}>{String(row[column.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
