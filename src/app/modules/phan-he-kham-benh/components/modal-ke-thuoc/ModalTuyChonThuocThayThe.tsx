import { Dispatch, FC, SetStateAction, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import InputSearch from "../../../component/InputSearch";
import { TableCollapse } from "../../../component/table/table-collapse/TableCollapse";
import ModalKeThuoc from "../../modals/modal-ke-thuoc/ModalKeThuoc";
import { dataDSThuocThayThe } from "../FakeData";
import { columnThuocThayThe } from "../modal-tab-thuoc/ThuocColumns";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalTuyChonThuocThayThe: FC<Props> = (props) => {
  let { handleClose } = props;
  let [openCapNhatMauChiDinhDialog, setOpenCapNhatMauChiDinhDialog] = useState<boolean>(false);

  return (
    <>
      <Modal
        className={`dialog-background`}
        size="xl"
        show={true}
        animation
        centered
        backdropClassName="spaces top-50"
      >
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Tùy chọn thuốc thay thế</Modal.Title>
          <button className="btn-close" onClick={() => handleClose(false)}></button>
        </Modal.Header>
        <Modal.Body className="pt-16 pb-10 px-24 spaces">
          <Row>
            <div>
              <InputSearch handleChange={() => {}} placeholder="Tìm kiếm" />
            </div>
          </Row>
          <Row>
            <Col xs="12">
              <div className="table-ds-right min-h-calc-265 mt-3 spaces">
                <TableCollapse
                  columns={columnThuocThayThe}
                  data={dataDSThuocThayThe || []}
                  collapseBody="dsThuoc"
                  collapseHeader="tenNhom"
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
    </>
  );
};

export default ModalTuyChonThuocThayThe;
