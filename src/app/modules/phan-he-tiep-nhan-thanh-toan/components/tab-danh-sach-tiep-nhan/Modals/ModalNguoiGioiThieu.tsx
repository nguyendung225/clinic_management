import { Button, Col, Modal, Row } from 'react-bootstrap'
import TextField from '../../../../component/TextField'
import LabelRequired from '../../../../component/LabelRequired'
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useIntl } from 'react-intl'
import { ObjectSelectAutocomplete } from '../../../models/PhanHeTiepNhanModel'
import { INguoiGioiThieu } from '../../../models/DSTiepNhanModel'
import { useEffect } from 'react'

type Props = {
  handleCloseDialogNguoiGioiThieu: () => void
  handleAddNguoiGioiThieu: (data: INguoiGioiThieu) => void
  nguoiGioiThieu: INguoiGioiThieu | undefined
  handleUpdateNguoiGioiThieu: (data: INguoiGioiThieu) => void
}

const listNhomHoaHong = [
  {
    id: "KHONG_CHIA",
    name: "Không chia"
  }
]

const listKhoa = [
  {
    id: "KHOA1",
    name: "Khoa 1"
  }
]

const ModalNguoiGioiThieu = ({ handleCloseDialogNguoiGioiThieu, handleAddNguoiGioiThieu, nguoiGioiThieu, handleUpdateNguoiGioiThieu }: Props) => {
  const intl = useIntl();

  const initialValues: INguoiGioiThieu = {
    id: nguoiGioiThieu?.id || "",
    maNguoiGioiThieu: nguoiGioiThieu?.maNguoiGioiThieu || "",
    tenNguoiGioiThieu: nguoiGioiThieu?.tenNguoiGioiThieu || "",
    soDienThoai: nguoiGioiThieu?.soDienThoai || "",
    diaChi: nguoiGioiThieu?.diaChi || "",
    nhomHoaHong: nguoiGioiThieu?.nhomHoaHong || null,
    khoa: nguoiGioiThieu?.khoa || null,
    thongTinChuyenTien: nguoiGioiThieu?.thongTinChuyenTien || "",
    ghiChu: nguoiGioiThieu?.ghiChu || "",
  }

  const validationSchema = Yup.object({
    maNguoiGioiThieu: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    tenNguoiGioiThieu: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    soDienThoai: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    diaChi: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    nhomHoaHong: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
    khoa: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
    thongTinChuyenTien: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
  })

  const handleChangeSelect = (
    selectedOption: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: ObjectSelectAutocomplete) => void
  ) => {
    setFieldValue(name, selectedOption)
  }

  return (
    <>
      <Modal centered show={true} onHide={handleCloseDialogNguoiGioiThieu} size="lg" className="dialog-background">
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title className='text-pri'>{nguoiGioiThieu?.id ? "Cập nhật" : "Thêm mới"} người giới thiệu</Modal.Title>
        </Modal.Header>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const fakeId = Date.now().toString();
            values?.id ? handleUpdateNguoiGioiThieu(values) :
              handleAddNguoiGioiThieu({ ...values, id: fakeId });
              handleCloseDialogNguoiGioiThieu();
          }}
        >
          {({ values, errors, touched, setFieldValue }) =>
            <Form>
              <Modal.Body>
                <Row>
                  <Col>
                    <LabelRequired label="Mã người giới thiệu" />
                    <TextField
                      className="h-24"
                      name="maNguoiGioiThieu"
                      value={values?.maNguoiGioiThieu || ""}
                    />
                  </Col>

                  <Col>
                    <LabelRequired label="Tên người giới thiệu" />
                    <TextField
                      className="h-24"
                      name="tenNguoiGioiThieu"
                      value={values?.tenNguoiGioiThieu || ""}
                    />
                  </Col>

                  <Col>
                    <LabelRequired label="Số điện thoại" />
                    <TextField
                      className="h-24"
                      name="soDienThoai"
                      value={values?.soDienThoai || ""}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <LabelRequired label="Địa chỉ" />
                    <TextField
                      className="h-24"
                      name="diaChi"
                      value={values?.diaChi || ""}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <LabelRequired label="Nhóm hoa hồng người giới thiệu" />
                    <AutocompleteV2
                      options={listNhomHoaHong}
                      name="nhomHoaHong"
                      value={values?.nhomHoaHong || null}
                      errors={errors?.nhomHoaHong}
                      touched={touched?.nhomHoaHong}
                      onChange={(selectOption) => handleChangeSelect(selectOption, "nhomHoaHong", setFieldValue)}
                    />
                  </Col>

                  <Col>
                    <LabelRequired label="Khoa" />
                    <AutocompleteV2
                      options={listKhoa}
                      name="khoa"
                      value={values?.khoa || null}
                      errors={errors?.khoa}
                      touched={touched?.khoa}
                      onChange={(selectOption) => handleChangeSelect(selectOption, "khoa", setFieldValue)}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <LabelRequired label="Thông tin chuyển tiền" />
                    <TextField
                      className="h-24"
                      name="thongTinChuyenTien"
                      as="textarea"
                      row={4}
                      value={values?.thongTinChuyenTien || ""}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <LabelRequired label="Ghi chú" />
                    <TextField
                      className="h-24"
                      name="ghiChu"
                      as="textarea"
                      row={4}
                      value={values?.ghiChu || ""}
                    />
                  </Col>
                </Row>
              </Modal.Body>

              <Modal.Footer className="py-3">
                <Button className="btn-fill" type='submit'>{nguoiGioiThieu?.id ? "Cập nhật" : "Lưu"}</Button>
              </Modal.Footer>
            </Form>
          }
        </Formik>
      </Modal>
    </>
  )
}

export default ModalNguoiGioiThieu