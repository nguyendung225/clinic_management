import clsx from "clsx";
import { FC } from "react";
import "../table.scss";
type Props = {
  data: string;
  id?: string;
  action?: boolean;
  className?: string;
};

const TableCustomCell: FC<Props> = ({ data, action, className }) => {
  return (
    <div
      className={clsx(className, "text-system", {
        "action-cell": action,
      })}
    >
      {data}
    </div>
  );
};

export { TableCustomCell };
