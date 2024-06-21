import TextField from '../../../../component/TextField'
import LabelRequired from '../../../../component/LabelRequired'
import { GIOI_TINH, initialValues } from '../../../constants/PhanHeTiepNhan'
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2'
import { Button } from 'react-bootstrap'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import { IBenhNhan, ObjectSelectAutocomplete } from '../../../models/PhanHeTiepNhanModel'
import { validateNgay } from '../../../../utils/FormatUtils'

type Props = {
  handleAddBenhNhan: (data: IBenhNhan) => void,
  benhNhan: IBenhNhan,
  handleUpdateBenhNhan: (data: IBenhNhan) => void,
}

const ThongTinBenhNhan = ({ handleAddBenhNhan, benhNhan = initialValues, handleUpdateBenhNhan }: Props) => {
  const intl = useIntl();
  const ref = useRef<any>();

  useEffect(() => {
    ref.current.setValues(benhNhan)
  }, [benhNhan])

  const validationSchema = Yup.object({
    hoTenBenhNhan: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    ngaySinh: Yup.number()
      .nullable()
      .min(1, 'Ngày không hợp lệ')
      .max(31, 'Ngày không hợp lệ')
      .test('is-valid-date', 'Ngày không hợp lệ', function (value) {
        const { ngaySinh, thangSinh, namSinh } = this.parent;
        if (!value) return true;
        return validateNgay(ngaySinh, thangSinh, namSinh)
      }),
    thangSinh: Yup.number()
      .nullable()
      .min(1, 'Tháng không hợp lệ')
      .max(12, 'Tháng không hợp lệ'),
    namSinh: Yup.number()
      .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
      .min(1900, 'Năm lớn hơn bằng 1900')
      .max(new Date().getFullYear(), 'Năm nhỏ hiện tại'),
    gioiTinh: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
  })

  const handleSubmitForm = () => {
    ref.current.handleSubmit();
  }

  const handleChangeSelect = (
    selectedOption: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: ObjectSelectAutocomplete) => void
  ) => {
    setFieldValue(name, selectedOption)
  }

  return (
    <div className="p-2 border-end h-100">
      <Formik
        initialValues={{
          id: "",
          hoTenBenhNhan: "",
          ngaySinh: "",
          thangSinh: "",
          namSinh: "",
          gioiTinh: null,
          cccd: "",
          quocTich: null,
          soDienThoai: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const id = Date.now().toString();
          values?.id
            ? handleUpdateBenhNhan(values)
            : handleAddBenhNhan({ ...values, id })
          actions.resetForm();
        }}
        innerRef={ref}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div>
              <TextField
                
                label="Họ và tên"
                name="hoTenBenhNhan"
                value={values?.hoTenBenhNhan || ""}
                labelClassName="ms-0 pe-2 min-w-75px"
              />
            </div>

            <div className="d-flex mt-1">
              <LabelRequired label="Ngày sinh" className="min-w-75px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField
                    name="ngaySinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                    value={values?.ngaySinh || ""}
                  />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="thangSinh"
                    type="text"
                    maxLength="2"
                    value={values?.thangSinh || ""}
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField
                    name="namSinh"
                    type="text"
                    maxLength="4"
                    value={values?.namSinh || ""}
                    className="text-center "
                  />
                </div>
              </div>

              <div className="d-flex">
                <LabelRequired label="Giới tính" className="ps-2 min-w-75px" />
                <AutocompleteV2
                  options={GIOI_TINH}
                  name="gioiTinh"
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26 min-w-100px"
                  value={values?.gioiTinh || null}
                  errors={errors?.gioiTinh}
                  touched={touched?.gioiTinh}
                  onChange={(selectedOption) => handleChangeSelect(selectedOption, "gioiTinh", setFieldValue)}
                />
              </div>
            </div>

            <div className="mt-1">
              <TextField
                
                label="CCCD"
                name="cccd"
                value={values?.cccd || ""}
                labelClassName="ms-0 pe-2 min-w-75px"
              />
            </div>

            <div className="d-flex mt-1">
              <LabelRequired label="Quốc tịch" className="min-w-75px" />
              <AutocompleteV2
                options={[]}
                name="quocTich"
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                value={values?.quocTich || null}
                onChange={(selectedOption) => handleChangeSelect(selectedOption, "quocTich", setFieldValue)}
              />
            </div>

            <div className="mt-1">
              <TextField
                
                label="Điện thoại"
                name="soDienThoai"
                value={values?.soDienThoai || ""}
                labelClassName="ms-0 pe-2 min-w-75px"
              />
            </div>

            <div className="mt-1">
              <TextField
                
                label="Địa chỉ"
                name="address"
                value={values?.address || ""}
                labelClassName="ms-0 pe-2 min-w-75px"
                as="textarea"
              />
            </div>

            <div className="d-flex mt-2 justify-content-end">
              <div>
                <Button className="btn-fill" onClick={handleSubmitForm}>
                  <span>{values?.id ? "Sửa" : "Thêm"}</span>
                </Button>
              </div>

              <div className="ps-5">
                <Button className="btn-fill">
                  <i className="fa-solid fa-floppy-disk"></i>
                  <span>Lưu</span>
                </Button>
              </div>
            </div>
          </Form>)}
      </Formik>
    </div>
  )
}

export default ThongTinBenhNhan