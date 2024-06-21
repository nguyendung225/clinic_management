import { Button, Col, Modal, Row } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import CustomMenu from "../../../../component/menu/Menu";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";
import { LichSuThayDoiDauKyColumn } from "./LichSuThayDoiDauKyColumn";
import { lichSuThayDoiDauKy } from "../../../const/FakeData";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalLichSuThayDoiDauKy = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      show={show}
      animation={false}
      centered
      backdropClassName="spaces top-50"
      onHide={handleCloseDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Lịch sử thay đổi tồn kho, duyệt xuất
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom py-1'>
          <Col xs={3} className='d-flex align-items-center'>
            <CustomMenu
              className='ms-1'
              handleSelectOption={() => { }}
              listMenuItem={[]}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              }
            />
          </Col>

          <Col xs={9} className='d-flex justify-content-end align-items-center gap-4'>
            <div className='d-flex'>
              <LabelRequired label='Từ ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <div className='d-flex'>
              <LabelRequired label='Đến ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <Button className='btn-fill me-1'>Tìm kiếm</Button>
          </Col>
        </Row>

        <div className="px-1">
          <InputSearch
            handleChange={() => { }}
            placeholder='Tìm kiếm'
          />

          <TableCustom className='h-table-lich-su-nhap-xuat' columns={LichSuThayDoiDauKyColumn} data={lichSuThayDoiDauKy} />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalLichSuThayDoiDauKy