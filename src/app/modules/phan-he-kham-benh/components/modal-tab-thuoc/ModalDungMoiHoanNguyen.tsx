import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IconButtonSave } from "../../../component/IconSvg";
import InputSearch from "../../../component/InputSearch";
import { KEY, SELECTION_MODE } from "../../../utils/Constant";
import { ColunmDungMoiHoanNguyen } from "../../constants/Columns";
import { TrieuChung } from "../../models/ThongTinKhamBenhModel";
import { DataDungMoi } from "../FakeData";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalDungMoiHoanNguyen: FC<Props> = ({ handleClose }) => {

  const [selectedRows, setSelectRows] = useState<TrieuChung[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
  };

  const updatePageData = () => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const handleSubmit = () =>{

  }
  return (
    <>
      <Modal size="xl" show={true} animation centered className="dialog-background">
        <div className="timKiemBenhNhan">
          <Modal.Header className="py-3 header-modal">
            <Modal.Title className="text-pri">Dung môi hoàn nguyên</Modal.Title>
            <button className="btn-close" onClick={() => handleClose(false)}></button>
          </Modal.Header>
          <Modal.Body className="py-16 px-24 spaces">
            <div className="d-flex align-items-center pb-5">
              <div className="fw-semibold me-2">Tìm kiếm</div>
              <InputSearch
                className="w-325px"
                handleChange={handleChange}
                handleSearch={updatePageData}
                handleKeyDown={handleKeyDown}
                placeholder="Tìm kiếm"
                type="text"
              />
            </div>
            <TableCustom
              data={DataDungMoi}
              columns={ColunmDungMoiHoanNguyen}
              selectionMode={SELECTION_MODE.MULTI}
              getSelectedRowsData={setSelectRows}
              minHeight={450}
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center py-1">
            <Button className="btn-fill" type="submit" onClick={handleSubmit}>
              <IconButtonSave/>
              <span>Lưu</span>
            </Button>
            <Button className="btn-outline" onClick={() => handleClose(false)}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalDungMoiHoanNguyen;
