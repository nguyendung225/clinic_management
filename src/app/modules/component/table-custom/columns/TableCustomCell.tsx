import clsx from "clsx";
import { FC } from "react";
import "../table.scss";
type Props = {
  data: string | number;
  id?: string;
  className?: string;
  action?: boolean;
};

const TableCustomCell: FC<Props> = ({ className, data, action }) => {
  return (
    <div
      className={clsx(className, "text-system ", {
        "action-cell": action,
      })}
    >
      {data}
    </div>
  );
};

export { TableCustomCell };
