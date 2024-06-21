import { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { KTSVG } from '../../../../../_metronic/helpers';
import { IconCabinet, IconHome } from '../../../component/IconSvg';
import SelectTree from '../../../component/SelectTree';
import CustomMenu from '../../../component/menu/Menu';
import { LIST_DOI_TUONG_TIEP_NHAN } from '../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan';
import { TreeDichVu, listMenuIn } from '../../constants/PhanHeChuyenKhoaConstants';
import TableThanhToan from './TableThanhToan';
import ModalXML from './modal-xml/ModalXML';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  selectedRow: any;
}

const ModalThanhToan = ({ show, handleCloseDialog, selectedRow }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openDialogXML, setOpenDialogXML] = useState(false);

  const handleClickXML = () => {
    setOpenDialogXML(true);
  }

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
          Thoanh toán viện phí
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom'>
          <Col xs={8} className="d-flex align-items-center mt-1">
            <div className="position-relative">
              <CustomMenu
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={<KTSVG path="/media/icons/duotune/layouts/lay002.svg" svgClassName="spaces h-100 w-100" />} />
            </div>

            <div className="">
              <CustomMenu
                handleSelectOption={() => { }}
                listMenuItem={listMenuIn}
                menuLabel={<div className="text-center">
                  <div><i className="fa-solid fa-print" style={{ fontSize: "30px" }}></i></div>
                  <div className="fs-5">In</div>
                </div>}
              />
            </div>

            <div className='text-center cursor-pointer' onClick={handleClickXML}>
              <div><i className="bi bi-filetype-xml text-info" style={{ fontSize: "30px" }}></i></div>
              <div className='fs-5'>XML-130</div>
            </div>
          </Col>


          <Col xs={4}>
            {selectedRow?.length !== 0 ? (
              <div className="d-flex justify-content-end h-100">
                <div className="text-break fw-500 text-end me-2">
                  <span className="text-uppercase fw-600 fs-7">{selectedRow?.[0]?.hoTen}</span>{" "}
                  <span className="fs-7">
                    | Tuổi: {selectedRow?.[0]?.age} | {selectedRow?.[0]?.gioiTinh} |{" "}
                    {selectedRow?.[0]?.loaiDoiTuong}
                  </span>
                  <div className="fs-7">
                    VP: 240 {selectedRow?.[0]?.mpt}
                    {selectedRow?.[0]?.soDinhDanh && `CCCD: ${selectedRow?.[0]?.soDinhDanh}`}
                  </div>{" "}
                  <div className="text-truncate fs-7">Địa chỉ: {selectedRow?.[0]?.diaChi}</div>
                </div>

                <div className="border-start spaces width-17 d-flex align-items-center justify-content-center fw-bold text-danger">
                  {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === selectedRow?.[0]?.loaiDoiTuong)?.name}
                </div>
              </div>
            ) : (
              <div className="text-break"></div>
            )}
          </Col>
        </Row>

        <Row className="h-body-modal-thanh-toan">
          <Col xs={3} className='pe-0'>
            <SelectTree
              className="w-100 border border-top-0 h-100"
              codeCollapses={codeCollapses}
              handleChangeCollapsesCode={setCodeCollapses}
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={TreeDichVu}
            />
          </Col>

          <Col xs={9} className='ps-0'>
            <TableThanhToan />
          </Col>
        </Row>
      </Modal.Body>

      <ModalXML show={openDialogXML} handleCloseDialog={() => setOpenDialogXML(false)}/>
    </Modal>
  )
}

export default ModalThanhToan