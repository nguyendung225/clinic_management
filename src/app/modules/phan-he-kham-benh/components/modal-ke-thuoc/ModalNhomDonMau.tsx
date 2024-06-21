import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { IconButtonSave } from "../../../component/IconSvg";
import InputSearch from "../../../component/InputSearch";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { Column } from "react-table";

interface Props {
  handleClose: () => void;
}
const column: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ID"}
        className="p-table text-center w-5 "
      />
    ),
    id: "ID",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.id}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên nhóm đơn mẫu"}
        className="p-table text-center w-95 "
      />
    ),
    id: "Tên nhóm đơn mẫu",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.tenNhomDonMau}
        className="p-table cell-first-child ps-0"
      />
    ),
  },
]
const ModalNhomDonMau: FC<Props> = ({ handleClose }) => {  
  
  return (
    <>
      <Modal size="lg" show={true} animation centered className="dialog-background">
        <div className="timKiemBenhNhan">
          <Modal.Header className="py-3 header-modal">
            <Modal.Title className="text-pri">Chọn nhóm đơn mẫu</Modal.Title>
            <button className="btn-close" onClick={handleClose}></button>
          </Modal.Header>
          <Modal.Body className="py-16 px-24 spaces">
            <InputSearch handleChange={()=>{}}/>
            <TableCustom
              data={[{id:0, tenNhomDonMau:"Tổng hợp"}]}
              columns={column}
              minHeight={450}
              className="mt-5"
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center py-1">
            <Button className="btn-fill" type="submit">
              <IconButtonSave />
              <span>Lưu</span>
            </Button>
            <Button className="btn-outline" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalNhomDonMau;
