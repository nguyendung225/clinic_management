import { Button, Col, Row } from "react-bootstrap"
import Autocomplete from "../../../../component/AutocompleteObject"
import LabelRequired from "../../../../component/LabelRequired"
import TextValidator from "../../../../component/TextValidator"
import { TableCustom } from "../../../../component/table/table-custom/TableCustom"
import { MauColumn } from "../../../columns/DsMauColumn"

type Props = {}

const TabDsMauVaChePhamMau = (props: Props) => {
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
                <LabelRequired label="Tên máu" className="min-w-60px" />
                <TextValidator />
              </Col>

              <Col xs={2} className="d-flex">
                <LabelRequired label="Đơn vị" className="min-w-45px" />
                <TextValidator />
              </Col>

              <Col xs={2} className="d-flex">
                <LabelRequired label="Thể tích" className="min-w-60px" />
                <TextValidator />
              </Col>

              <Col xs={2} className="d-flex">
                <LabelRequired label="Số lượng" className="min-w-60px" />
                <TextValidator />
              </Col>
            </Row>

            <Row>
              <Col xs={6} className="d-flex">
                <LabelRequired label="HDSD" className="min-w-60px" />
                <TextValidator />
                <Button className="btn-fill spaces h-25 ms-2">Lưu</Button>
              </Col>
            </Row>
          </div>

          <div>
            <TableCustom columns={MauColumn} data={[]} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TabDsMauVaChePhamMau