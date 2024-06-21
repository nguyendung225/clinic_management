import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import TextField from "../../../component/TextField";
import { getListBenhNhanFake } from "../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE } from "../../../utils/Constant";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import DanhSachChoGoiTable from "./DanhSachChoGoiTable";
import { TablePagination } from "../../../component/table/components/TablePagination";
type Props = {
  eventkey?: string;
};

export const DanhSachChoGoiV2 = (props: Props) => {
  const { setIsLoading } = useContext(AppContext);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [dataDanhSachChoGoi, setDataDanhSachChoGoi] = useState<any>([])
  useEffect(()=>{
    getListChoGoi()
  },[])
  const getListChoGoi = async () => {
        try {
            // let res = await addBenhNhan(payload)
            let res = await getListBenhNhanFake()
            if(res.status===CODE.SUCCESS){
              setDataDanhSachChoGoi(res?.data)
            }
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            toast.error("Xảy ra lỗi, vui lòng thử lại!")
        }
}
  return (
    <div className="p-3 pb-0 h-100">
      <Row className="mt-3 p-0">
        <Col xs={12} className="d-flex p-0">
          <div className="spaces width-35">
            <TextField
              label="Cửa tiếp đón"
              name="cuaTiepDon"
              labelClassName="ps-0 min-w-80px pe-2"
            />
          </div>

          <div className="spaces width-35">
            <TextField
              label="Người tiếp đón"
              name="nguoiTiepDon"
              labelClassName="ps-4 min-w-80px pe-2"
            />
          </div>

          <div className="spaces width-15">
            <TextField
              label="STT đang gọi"
              name="sttDangGoi"
              labelClassName="ps-4 min-w-80px pe-2 text-success"
            />
          </div>

          <div className="spaces width-15">
            <TextField
              label="STT tiếp theo"
              name="sttTiepTheo"
              labelClassName="ps-4 min-w-80px pe-2 text-warning"
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3 h-tiep-nhan">
        <div className="h-100 p-0">
          <DanhSachChoGoiTable
            data={dataDanhSachChoGoi || []}
            updatePageData={() => {}}
            handleChange={() => {}}
            page={0}
            rowsPerPage={0}
          />
        </div>
        <TablePagination
          handlePagesChange={handlePagesChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
          rowsForPage={rowsForPage}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={dataDanhSachChoGoi?.length/rowsPerPage}
          totalElements={dataDanhSachChoGoi?.length}
        />
      </Row>
    </div>
  );
};
