import { PropsWithChildren } from "react";
import { HeaderProps } from "react-table";
import clsx from "clsx";
type Props<T extends object> = {
  className?: string;
  title?: string;
  tableProps: PropsWithChildren<HeaderProps<T>>;
};
const TableCustomHeader = <T extends object>({ className, title, tableProps }: Props<T>) => {
  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(className, "text-light cursor-pointer spaces p-0")}
    >
      {title}
    </th>
  );
};

export { TableCustomHeader };
