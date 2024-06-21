import { Button, Col, Row } from "react-bootstrap"
import InputSearch from "../../../component/InputSearch"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import CustomMenu from "../../../component/menu/Menu"
import { TableCustom } from "../../../component/table/table-custom/TableCustom"
import { NhatKyColumn } from "../../columns/NhatKySuKienBenhAnColumn"

type Props = {}

const ModalNhatKySuKienBenhAn = (props: Props) => {
  return (
    <div>
      <Row className='py-1'>
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

      <div>
        <InputSearch
          handleChange={() => { }}
          placeholder='Tìm kiếm'
        />
        <TableCustom columns={NhatKyColumn} data={[]} />
      </div>
    </div>
  )
}

export default ModalNhatKySuKienBenhAn