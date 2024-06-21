import { useEffect, useState } from "react";
import { ITaiKhoan } from '../models/ModelTaiKhoan';
import { columns } from "./TabTaiKhoanColumns";
import { TablePagination } from "../../component/table/components/TablePagination";
import { getDanhSachTaiKhoan } from "../services/TabTaiKhoanServices";
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../utils/Constant";
import { toast } from "react-toastify";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../utils/PageUtils";
import { IParamsSearchTaiKhoan } from "../../models/params";
import { TableCustom } from "../../component/table/table-custom/TableCustom";


const DMTaiKhoanTab = () => {
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [totalElements, setTotalElements] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(10);
    const [danhSachTaiKhoan, setDanhSachTaiKhoan] = useState<ITaiKhoan[]>([])


    const handleGetDanhSachTaiKhoan = async (params: IParamsSearchTaiKhoan) => {
        try {
            const response = await getDanhSachTaiKhoan(params)
            if (response?.data?.code === CODE_SUCCESS) {
                setTotalElements(response.data.data.totalElements);
                setTotalPages(response.data.data.totalPages);
                setDanhSachTaiKhoan(response.data.data.content);
            } else {
                toast.error(ERROR_MESSAGE)
            }
        } catch (e) {
            toast.error(ERROR_MESSAGE)
        }
    }

    useEffect(() => {
        handleGetDanhSachTaiKhoan({
            pageIndex,
            pageSize
        });
    }, [pageIndex, pageSize])

    return (
        <div className="tab__content tab__dmtk">
            <TableCustom<ITaiKhoan>
                verticalScroll
                data={danhSachTaiKhoan}
                columns={columns}
                height='height-55vh'
                pageIndex={pageIndex}
                pageSize={pageSize}
            />
            <TablePagination
                handlePagesChange={handlePagesChange}
                handleRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPage={pageSize}
                rowsForPage={rowsForPage}
                page={pageIndex}
                setPage={setPageIndex}
                setRowsPerPage={setPageSize}
                totalPages={totalPages}
                totalElements={totalElements}
            />
        </div>
    )
}

export default DMTaiKhoanTab