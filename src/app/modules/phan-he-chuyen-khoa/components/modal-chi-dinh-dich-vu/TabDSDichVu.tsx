import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SelectTree from "../../../component/SelectTree";
import { TreeDichVu } from "../../constants/PhanHeChuyenKhoaConstants";
import TableDichVu from "./TableDichVu";

type Props = {}

const TabDSDichVu = (props: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  return (
    <Row className="h-100 m-0">
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

      <Col xs={9} className='px-0'>
        <TableDichVu />
      </Col>
    </Row>
  )
}

export default TabDSDichVu