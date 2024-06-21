import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import TextField from "../../../../component/TextField";
import LabelRequired from "../../../../component/LabelRequired";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import { Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { listLoaiSo, listNguoiTao } from "../../../constants/constants";
import ModalChonNhanVien from "./ModalChonNhanVien";
import { IDsNhanVien } from "../../../models/SoThuModel";

type Props = {
  show: boolean;
  onHide: Dispatch<
    SetStateAction<{
      openChonSoThu: boolean;
      openDanhSachSoThu: boolean;
      openTaoMoiSoThu: boolean;
    }>
  >;
  openDanhSachSoThu: boolean;
  setOpenDanhSachSoThu: Dispatch<SetStateAction<boolean>>
};

const ModalTaoSoThu: FC<Props> = (props) => {
  const { show, onHide, openDanhSachSoThu, setOpenDanhSachSoThu } = props;
  const [shouldOpenChonNhanVienDialog, setShouldOpenChonNhanVienDialog] = useState(false);
  const [listNhanVien, setListNhanVien] = useState<IDsNhanVien[]>([]);
  const handleChangeSelect = () => {};
  let validationSchema = Yup.object({});
  const handleFormSubmit = () => {};

  const handleShouldOpenChonNhanVienDialog = () => {
    setShouldOpenChonNhanVienDialog(true);
  }

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={() =>
          onHide({
            openChonSoThu: false,
            openDanhSachSoThu: false,
            openTaoMoiSoThu: false,
          })
        }
        size="xl"
      >
        <Modal.Header closeButton className="py-5 header-modal">
          <Modal.Title>Tạo mới sổ thu tiền</Modal.Title>
        </Modal.Header>
        <Modal.Body className="spaces pl-12 pr-12">
          <Formik<any>
            initialValues={{}}
            validationSchema={validationSchema}
            validateOnChange={true}
            validate={(values) => {
              const errors: FormikErrors<any> = {};
              return errors;
            }}
            onSubmit={handleFormSubmit}
          >
            {({ touched, errors, setFieldValue, values }) => (
              <Row>
                <Col xl={6}>
                  <Row className="d-flex mb-2 align-items-center">
                    <Col xs={6} className="spaces">
                      <LabelRequired label="Ngày tạo"/>
                      <input
                        className="form-control customs-input"
                        name="tuNngay"
                        type="date"
                      />
                    </Col>
                    <Col xs={6} className="spaces">
                      <LabelRequired
                        label="Người tạo"
                      />
                      <AutocompleteV2
                        options={listNguoiTao}
                        name="nguoiTao"
                        className="autocomplete-custom radius spaces width-100 "
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-end">
                    <Col xs={4} className="spaces">
                      <LabelRequired label="Loại sổ" />
                      <AutocompleteV2
                        options={listLoaiSo}
                        name="loaiSo"
                        className="autocomplete-custom radius spaces width-100 "
                      />
                    </Col>
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                        <LabelRequired label="VAT(%)" />
                        <TextField
                          name="vat"
                          labelClassName="ps-2 min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                    
                    <Col xs={4} className="d-flex align-items-center">
                      <Form.Check
                        type={"checkbox"}
                        label={"Sổ tủ trực"}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                         <LabelRequired label="Mã sổ"/>
                        <TextField
                          name="maSo"
                          labelClassName="min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                         <LabelRequired label="Tên sổ"/>
                        <TextField
                          name="tenSo"
                          labelClassName="ps-2 min-w-90px fw-normal"
                        />
                      </div>
                    </Col>

                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                         <LabelRequired label="Ký hiệu"/>
                        <TextField
                          name="kyHieu"
                          labelClassName="ps-2 min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                      <LabelRequired label="Tổng số phiếu"/>
                        <TextField
                          name="tongSoPhieu"
                          labelClassName="min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                      <LabelRequired label="Số bắt đầu"/>
                        <TextField
                          name="soBatDau"
                          labelClassName="min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="spaces">
                      <LabelRequired label="Số kết thúc"/>
                        <TextField
                          name="soKetThuc"
                          labelClassName="ps-2 min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-flex mb-2 align-items-center">
                      <div className="spaces w-100">
                        <Button className="btn-fill mb-1" onClick={handleShouldOpenChonNhanVienDialog}>Phân quyền thêm người sử dụng</Button>
                        <TextField
                          disabled
                          name="phanQuyen"
                          as="textarea"
                          value={listNhanVien?.map(item => item?.tenNV)?.join("; ") || ""}
                          labelClassName="min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-flex mb-2 align-items-center">
                      <div className="spaces w-100">
                      <LabelRequired label="Ghi chú"/>
                        <TextField
                          name="ghiChu"
                          as="textarea"
                          labelClassName="min-w-90px fw-normal"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-flex align-items-center">
                      <div className="spaces w-100">
                        <Form.Check // prettier-ignore
                          type={"checkbox"}
                          label={"Khóa"}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col xl={6}>
                  <Row>
                    <Col className="text-center fs-4 fw-bold mb-2">Hoá đơn điện tử</Col>
                  </Row>

                  <Row>
                    <Col>
                      <LabelRequired label="Loại hóa đơn phát hành" />
                      <TextField
                        name="loaiHoaDon"
                        label
                      />
                    </Col>

                    <Col>
                      <LabelRequired label="Id của thông báo phát hành" />
                      <TextField
                        name="idCuaThongBao"
                        label
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <LabelRequired label="Ký hiệu của thông báo phát hành" />
                      <TextField
                        name="kyHieuThongBao"
                        label
                      />
                    </Col>

                    <Col>
                      <LabelRequired label="Mẫu hóa đơn của thông báo phát hành" />
                      <TextField
                        name="mauHoaDon"
                        label
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <LabelRequired label="VATRateName" />
                      <TextField
                        name="vatRateName"
                        label
                      />
                    </Col>
                  </Row>

                  <Row className="mt-2 align-items-end">
                    <Col>
                      <Button className="btn-fill">
                        <i className="fa-solid fa-check"></i>
                        Chọn thông báo phát hành
                      </Button>
                    </Col>

                    <Col>
                      <Form.Check
                        type={"checkbox"}
                        label={"Không tự động tạo hóa đơn điện tử"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button
            className="btn-fill"
            type="submit"
            onClick={() => {
              onHide({
                openChonSoThu: !openDanhSachSoThu,
                openDanhSachSoThu: openDanhSachSoThu,
                openTaoMoiSoThu: false,
              });
              setOpenDanhSachSoThu(false);
            }}
          >
            Lưu
          </Button>
          <Button
            className="btn-outline"
            onClick={() => {
              onHide({
                openChonSoThu: !openDanhSachSoThu,
                openDanhSachSoThu: openDanhSachSoThu,
                openTaoMoiSoThu: false,
              });
              setOpenDanhSachSoThu(false);
            }}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      
      <ModalChonNhanVien setListNhanVien={setListNhanVien} show={shouldOpenChonNhanVienDialog} handleCloseDialog={() => setShouldOpenChonNhanVienDialog(false)}/>
    </>
  );
};
export { ModalTaoSoThu };
