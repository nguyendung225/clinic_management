import clsx from "clsx";
import { FC } from "react";
import { IListColor } from "../../../utils/models";
import "../table.scss";
type Props = {
    data: any;
    id?: string;
    action?: boolean;
    className?: string;
    tableProps?: any;
    cellChildIndex?: any;
    hiddenParentData?: boolean;
    listColorPhieu?: IListColor[]
};

const TableCustomCell: FC<Props> = ({
    data,
    action,
    className,
    tableProps,
    cellChildIndex = 0,
    hiddenParentData = false,
    listColorPhieu
}) => {
    const PARENT_ROW = 0;
    const listNhomDichVu = tableProps?.row?.original?.nhomDichVu;
    const listNhomDichVuSlice = listNhomDichVu?.slice(0, 3);
    const checkColorTrangThaiPhieu = (trangThai: number) => {
        return listColorPhieu?.find(item => item?.code === trangThai);
    }

    return (
        <div
            className={clsx("text-system fs-13px spaces px-4 position-relative", {
                "action-cell": action,
            }, className)}
        >
            {(tableProps && tableProps?.row?.depth === PARENT_ROW && hiddenParentData) ? "" : data}
            {listNhomDichVuSlice?.length > 0
                ? <div>
                    {listNhomDichVuSlice?.map((item: any, index: number) => {
                        return <span key={index} className={`status-column ${checkColorTrangThaiPhieu(item?.trangThai)?.name}`}></span>
                    })}
                </div>
                : <></>
            }
        </div>
    );
};

export { TableCustomCell };

