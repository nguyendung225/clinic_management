import { FC, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import AutocompleteField from "../../component/AutocompleteField";
import { IconButtonSave } from "../../component/IconSvg";
import LabelRequired from "../../component/LabelRequired";
import { ObjectSelectAutocomplete } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { ColumnDanhSachBenhKemTheo } from "../constants/Columns";
import { OptionBenhKemTheo } from "./FakeData";
import { constTypeBenhKemTheo } from "../constants/KhamBenh";
import { TableCustom } from "../../component/table/table-custom/TableCustom";
interface Props {
  type: string;
  setListBenhKemTheo: (item: string) => void;
  handleClose: () => void;
}

const ModalBenhKemTheo: FC<Props> = ({ handleClose, setListBenhKemTheo, type }) => {  
  const handleSubmit = () => {
    setListBenhKemTheo(dataDanhSachBenhKemTheo?.map((item)=>item?.name).join(`,\n`))
    handleClose();
  };
  const [benhKemTheo, setBenhKemTheo] = useState<ObjectSelectAutocomplete>({})
  const [dataDanhSachBenhKemTheo, setDataDanhSachBenhKemTheo] = useState<ObjectSelectAutocomplete[]>([])
  const handleChange = (value: ObjectSelectAutocomplete ) => {
    if(dataDanhSachBenhKemTheo?.find((item)=>item?.code === value.code)) return
      setDataDanhSachBenhKemTheo([...dataDanhSachBenhKemTheo, value])
  }
  return (
    <>
      <Modal size="lg" show={true} animation centered className="dialog-background">
        <div className="timKiemBenhNhan">
          <Modal.Header className="py-3 header-modal">
            <Modal.Title className="text-pri">Bệnh kèm theo {type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}</Modal.Title>
            <button className="btn-close" onClick={handleClose}></button>
          </Modal.Header>
          <Modal.Body className="py-16 px-24 spaces">
            {/* <Row>
              <Col xs="1" className="text-center">STT</Col>
              <Col xs="2">Mã bệnh - ICD10</Col>
              <Col xs="9">Tên bệnh - ICD10</Col>
            </Row> */}
            <Row>
              <Col xs={12}>
                <LabelRequired label={`Bệnh kèm theo ${type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}`} />
                <AutocompleteField  
                  options={OptionBenhKemTheo}
                  name="benhKemTheo"
                  value={benhKemTheo}
                  className="customs-input"
                  onChange={(value) => handleChange(value)}
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  isClearable={false}
                />
              </Col>
            </Row>
            {/* <Row>
              <Col xs={{ span: "9", offset: "3" }}>Tên bệnh</Col>
            </Row> */}
            <TableCustom
              data={dataDanhSachBenhKemTheo || []}
              columns={ColumnDanhSachBenhKemTheo(type)}
              minHeight={450}
              className="mt-5"
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center py-1">
            <Button className="btn-fill" type="submit" onClick={handleSubmit}>
              <IconButtonSave />
              <span>Lưu</span>
            </Button>
            <Button className="btn-outline" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalBenhKemTheo;
