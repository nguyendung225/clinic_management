import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import InputSearch from "../../../component/InputSearch";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { SELECTION_MODE } from "../../../utils/Constant";
import {
  columnsPhieuChiDinhCu,
  columnsPhieuChiDinhCuThuoc
} from "../../columns/tab-thuoc/ColumnTabThuoc";
import ModalKeThuoc from "../../modals/modal-ke-thuoc/ModalKeThuoc";
import { DataDanhSachMauThuocCu } from "../FakeData";
import ModalChiTietDonThuocCu from "./ModalChiTietDonThuocCu";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalDonThuocCu: FC<Props> = (props) => {
  let { open, handleClose } = props;
  let [openCapNhatMauChiDinhDialog, setOpenCapNhatMauChiDinhDialog] = useState<boolean>(false);
  let [openModalChiTietDonThuocCu, setOpenModalChiTietDonThuocCu] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const handleDoubleClick = (row: any) => {
    setSelectedRow([row.original]);
    setOpenModalChiTietDonThuocCu(true);
  };
  return (
    <>
      <Modal className={`dialog-background`} size="xl" show={open} animation centered backdropClassName="spaces top-50">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Danh sách đơn thuốc cũ</Modal.Title>
          <button className="btn-close" onClick={() => handleClose(false)}></button>
        </Modal.Header>
        <Modal.Body className="pt-16 pb-10 px-24 spaces">
          <div className="d-flex spaces gap-10 align-items-center justify-content-between mb-16">
            <div className="d-flex gap-3">
              <Button className="btn-outline spaces h-29">
                <i className="bi bi-list m-0 p-0"></i>
              </Button>
              <Button className="btn-fill spaces ">
                <i className="bi bi-check-lg"></i>
                Sử dụng đơn thuốc
              </Button>
              <Button className="btn-fill spaces ">
                <i className="bi bi-check-lg"></i>
                Sử dụng đơn thuốc + Chẩn đoán
              </Button>
            </div>
          </div>
          <Row>
            <div>
              <InputSearch handleChange={() => {}} />
            </div>
          </Row>
          <Row>
            <Col xs="6">
              <div className="table-ds-right min-h-calc-265 mt-3 spaces">
                <TableCustom<any>
                  verticalScroll
                  columns={columnsPhieuChiDinhCu}
                  data={DataDanhSachMauThuocCu}
                  selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                  getSelectedRowsData={setSelectedRow}
                  className="mt-3"
                  minHeight={450}
                  handleDoubleClick={(row: any) => handleDoubleClick(row)}
                />
              </div>
            </Col>
            <Col xs="6">
              <div className="table-ds-right min-h-calc-265 mt-3 spaces">
                <TableCustom<any>
                  verticalScroll
                  columns={columnsPhieuChiDinhCuThuoc}
                  data={selectedRow[0]?.danhSachThuoc || []}
                  selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                  className="mt-3"
                  minHeight={450}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {openCapNhatMauChiDinhDialog && (
        <ModalKeThuoc
          open={openCapNhatMauChiDinhDialog}
          handleClose={() => {
            setOpenCapNhatMauChiDinhDialog(false);
          }}
        />
      )}
      {openModalChiTietDonThuocCu && (
        <ModalChiTietDonThuocCu
          open={openModalChiTietDonThuocCu}
          danhSachThuoc={selectedRow[0]?.danhSachThuoc || []}
          handleClose={() => {
            setOpenModalChiTietDonThuocCu(false);
          }}
        />
      )}
    </>
  );
};

export default ModalDonThuocCu;
