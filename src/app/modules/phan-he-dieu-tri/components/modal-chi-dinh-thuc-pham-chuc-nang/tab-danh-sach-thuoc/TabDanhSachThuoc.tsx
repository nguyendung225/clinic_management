import { Button, Col, Row } from "react-bootstrap"
import Autocomplete from "../../../../component/AutocompleteObject"
import LabelRequired from "../../../../component/LabelRequired"
import TextValidator from "../../../../component/TextValidator"
import { TableCustom } from "../../../../component/table/table-custom/TableCustom"
import { ThuocColumn } from "../../../columns/DsThuocColumn"

type Props = {}

const TabDanhSachThuoc = (props: Props) => {
  return (
    <>
      <Row className="h-100">
        <Col xs={3} className="pe-0 border-end pt-1">
          <Autocomplete options={[]} />
        </Col>
        <Col xs={9} className="ps-0">
          <div className="p-1 border-bottom">
            <Row className="mb-1">
              <Col xs={6} className="d-flex">
                <LabelRequired label="Tên thuốc:" className="min-w-80px" />
                <TextValidator />
              </Col>

              <Col xs={3} className="d-flex">
                <LabelRequired label="Tồn kho:" className="min-w-80px" />
                <TextValidator type="number" className="text-end" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={6} className="d-flex">
                <div className="d-flex spaces w-70">
                  <div className="d-flex">
                    <LabelRequired label="Đơn vị:" className="min-w-80px" />
                    <TextValidator />
                  </div>

                  <div className="d-flex ps-2">
                    <LabelRequired label="Đóng gói:" className="min-w-80px" />
                    <TextValidator />
                  </div>
                </div>

                <div className="d-flex ps-2 spaces w-30">
                  <LabelRequired label="Số lượng:" className="min-w-80px" />
                  <TextValidator type="number" className="text-center" />
                </div>
              </Col>

              <Col xs={3} className="d-flex">
                <LabelRequired label="Đường dùng:" className="min-w-80px" />
                <TextValidator />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={6} className="d-flex">
                <div className="d-flex spaces w-70">
                  <LabelRequired label="HDSD:" className="min-w-80px" />
                  <TextValidator />
                </div>

                <div className="d-flex spaces w-30 ps-2">
                  <LabelRequired label="Ngày dùng:" className="min-w-80px" />
                  <TextValidator type="number" className="text-center" />
                </div>
              </Col>

              <Col xs={3} className="d-flex">
                <LabelRequired label="Sáng:" className="min-w-80px" />
                <TextValidator />
              </Col>

              <Col xs={3} className="d-flex">
                <LabelRequired label="Trưa:" className="min-w-80px" />
                <TextValidator />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={6} className="d-flex">
                <div className="d-flex spaces w-70">
                  <div className="d-flex">
                    <LabelRequired label="Chiều:" className="min-w-80px" />
                    <TextValidator />
                  </div>

                  <div className="d-flex ps-2">
                    <LabelRequired label="Tối:" className="min-w-80px" />
                    <TextValidator />
                  </div>
                </div>

                <div className="d-flex ps-2 spaces w-30">
                  <Button className="btn-fill spaces h-25">Lưu</Button>
                </div>
              </Col>
            </Row>
          </div>

          <div>
            <TableCustom columns={ThuocColumn} data={[]}/>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TabDanhSachThuoc