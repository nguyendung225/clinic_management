import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import InputSearch from '../../../component/InputSearch'
import SelectTree from '../../../component/SelectTree'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { PhacDoColumn } from '../../columns/PhacDoColumn'
import { treePhacDo } from '../../constants/ConstantPhanHeDieuTri'
import ModalThemPhacDoDieuTri from '../../components/modal-phac-do-dieu-tri/ModalThemPhacDoDieuTri'

type Props = {}

const ModalPhacDoDieuTri = (props: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openModalThemPhacDo, setOpenModalThemPhacDo] = useState(false);

  const handleOpenModalThemPhacDo = () => {
    setOpenModalThemPhacDo(true);
  }
  return (
    <>
      <Row className='border-bottom py-1'>
        <Col xs={9} className='d-flex align-items-center gap-2'>
          <Button className='btn-fill ms-2' onClick={handleOpenModalThemPhacDo}>Thêm</Button>
          <Button className='btn-fill'>Chọn phác đồ</Button>
        </Col>

        <Col xs={3} className='d-flex align-items-center justify-content-end text-uppercase text-danger fw-bold'>
          <div className='pe-1'>Danh mục phác đồ điều trị</div>
        </Col>
      </Row>

      <div className='px-1'>
        <Row className='spaces h-calc-vh-124'>
          <Col xs={3} className='pe-0'>
            <SelectTree
              className="w-100 border border-top-0 h-100"
              codeCollapses={codeCollapses}
              handleChangeCollapsesCode={setCodeCollapses}
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={treePhacDo}
            />
          </Col>

          <Col xs={9} className='ps-0'>
            <InputSearch
              handleChange={() => { }}
              placeholder='Tìm kiếm'
            />

            <TableCustom className='h-100' columns={PhacDoColumn} data={[]} />
          </Col>
        </Row>

        <ModalThemPhacDoDieuTri show={openModalThemPhacDo} handleCloseDialog={() => setOpenModalThemPhacDo(false)} />
      </div>
    </>
  )
}

export default ModalPhacDoDieuTri