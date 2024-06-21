import { Button, Col, Row } from "react-bootstrap"
import ThongTinGiaDinh from "./ThongTinGiaDinh"
import TextField from "../../../../component/TextField"
import { useState } from "react"
import ModalDSBenhNhan from "./ModalDSBenhNhan"

type Props = {}

const TabGiaDinh = (props: Props) => {
  const [openDSBenhNhanDialog, setOpenDSBenhNhanDialog] = useState(false);
  const [searchObject, setSearchObject] = useState({
    tenBN: "",
    maBN: "",
    khoa: "",
  })

  const handleChangeValueSearch = (e: any) => {
   const {name, value} = e.target;
        setSearchObject({...searchObject, [name]: value});
  }

  const handleOpenDSBenhNhanDialog = () => {
    console.log(searchObject);
    setOpenDSBenhNhanDialog(true);
  }

  return (
    <Row >
      <Col xl="3" className="border p-1">
        <ThongTinGiaDinh title="Thông tin người nhà 1" name="thongTinNguoiNha1"/>
      </Col>

      <Col xl="3" className="border p-1">
        <ThongTinGiaDinh title="Thông tin người nhà 2" name="thongTinNguoiNha2"/>
      </Col>

      <Col xl="3" className="border p-1">
        <ThongTinGiaDinh title="Thông tin người nuôi dưỡng, giám hộ" name="thongTinNguoiGiamHo" nguoiNha={false}/>
      </Col>

      <Col xl="3" className="border p-1">
        <div className="d-flex align-items-center position-sticky top-0 z-1000 fw-bold fs-3 btn-fill border radius-3px spaces mb-4 ">
          Người nhà bệnh nhân
        </div>

        <div className="p-3">
          <div className="mb-2">
            <TextField
              
              label="Mã BN"
              name="maBN"
              value={searchObject.maBN}
              onChange={handleChangeValueSearch}
              labelClassName="ms-0 min-w-75px"
            />
          </div>

          <div className="mb-2">
            <TextField
              
              label="Tên BN"
              name="tenBN"
              value={searchObject.tenBN}
              onChange={handleChangeValueSearch}
              labelClassName="ms-0 min-w-75px"
            />
          </div>

          <div className="mb-2">
            <TextField
              
              label="Khoa"
              name="khoa"
              value={searchObject.khoa}
              onChange={handleChangeValueSearch}
              labelClassName="ms-0 min-w-75px"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button className="btn-fill" onClick={handleOpenDSBenhNhanDialog}>Tìm bệnh nhân</Button>
        </div>
      </Col>
      
      <ModalDSBenhNhan show={openDSBenhNhanDialog} handleCloseDialog={() => setOpenDSBenhNhanDialog(false)}/>
    </Row>
  )
}

export default TabGiaDinh