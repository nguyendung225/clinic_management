import { Button, Col, Row } from "react-bootstrap"
import LabelRequired from "../../../../component/LabelRequired"
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2"
import TextField from "../../../../component/TextField"
import { LOAI_PHIEU, fakeDataDsPhieu } from "../../fakeData"
import { columnTabPhieuThu } from "./TabPhieuThuColumn"
import { useEffect, useRef, useState } from "react"
import { Form, Formik } from "formik"
import { ObjectSelectAutocomplete } from "../../../models/PhanHeTiepNhanModel"
import ModalPhieuIn from "../../../../component/ModalPhieuIn"
import { PhieuThuTamUng } from "./PhieuThuTamUng"
import { stylePrint } from "../../../../component/phieu-in/constant"
import { TableCustom } from "../../../../component/table/table-custom/TableCustom"

type Props = {}

const TabPhieuThu = (props: Props) => {
  const refForm = useRef<any>();
  const [themMoi, setThemMoi] = useState(false);
  const [phieuThuTamUng, setPhieuThuTamUng] = useState(false);

  useEffect(() => {
    handleChangeSelect(LOAI_PHIEU[2], "loaiPhieu", refForm.current.setFieldValue);
  }, [themMoi])

  const initialValues = {
    loaiPhieu: null,
    soTien: "",
    note: "",
  }

  const handleChangeSelect = (
    selectedOption: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: ObjectSelectAutocomplete) => void
  ) => {
    setFieldValue(name, selectedOption)
  }

  return (
    <div className="p-2">
      <Row>
        <Col xl={3} className="py-2 border">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values);
              setPhieuThuTamUng(true);
              setThemMoi(false);
              actions.resetForm();
            }}
            innerRef={refForm}
          >
            {({ values, handleSubmit, setFieldValue }) =>
              <Form>
                <LabelRequired label="Số phiếu:" />

                <div className="d-flex mt-1">
                  <LabelRequired label="Loại phiếu" className="min-w-75px" />
                  <AutocompleteV2
                    options={[]}
                    name="loaiPhieu"
                    className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26 min-w-100px"
                    value={values?.loaiPhieu || null}
                    isDisabled={true}
                    onChange={(selectedOption) => handleChangeSelect(selectedOption, "loaiPhieu", setFieldValue)}
                  />
                </div>

                <div className="mt-1">
                  <TextField
                    className=" no-spinners"
                    label="Số tiền"
                    name="soTien"
                    type="number"
                    labelClassName="ms-0 pe-2 min-w-75px"
                    disabled={!themMoi}
                  />
                </div>

                <div className="mt-1">
                  <TextField
                    
                    label="Ghi chú"
                    name="note"
                    as="textarea"
                    row={3}
                    labelClassName="ms-0 pe-2 min-w-75px"
                    disabled={!themMoi}
                  />
                </div>

                <div className="d-flex justify-content-end mt-2">
                  <Button className="btn-fill me-1" disabled={themMoi} onClick={() => setThemMoi(true)}>Thêm</Button>
                  <Button className="btn-fill me-1" disabled={!themMoi} onClick={() => handleSubmit()}>Lưu</Button>
                  <Button className="btn-fill me-1" disabled={!themMoi} onClick={() => setThemMoi(false)}>Hủy</Button>
                  <Button className="btn-fill" disabled={!themMoi} onClick={() => setThemMoi(false)}>In phiếu</Button>
                </div>
              </Form>
            }
          </Formik>
        </Col>

        <Col xl={9} className="p-0 border">
          <TableCustom className="h-ds-dang-ky" columns={columnTabPhieuThu} data={fakeDataDsPhieu} />
        </Col>
      </Row>

      <ModalPhieuIn
        title="Phiếu thu tạm ứng"
        show={phieuThuTamUng}
        handleCloseDialog={() => setPhieuThuTamUng(false)}
        size="lg"
        stylePrint={stylePrint}
      >
        <PhieuThuTamUng />
      </ModalPhieuIn>
    </div>
  )
}

export default TabPhieuThu