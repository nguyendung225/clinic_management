import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { TrieuChung } from "../../models/ThongTinKhamBenhModel";
import InputSearch from "../../../component/InputSearch";
import { ColunmTrieuChung } from "../../constants/Columns";
import { KEY, SELECTION_MODE } from "../../../utils/Constant";
import { DataTrieuChung } from "../FakeData";
import { toast } from "react-toastify";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setListTrieuChung: (item: string) => any
}

const ModalTrieuChung: FC<Props> = ({ handleClose, setListTrieuChung }) => {

  const [selectedRows, setSelectRows] = useState<TrieuChung[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
  };

  const updatePageData = () => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const handleSubmit = () =>{
    if(selectedRows.length === 0) return toast.warning("Vui lòng chọn triệu chứng !")
    setListTrieuChung(selectedRows?.map((item:TrieuChung)=> item.trieuChung).join(", "))
    handleClose(false)
  }
  return (
    <>
      <Modal size="lg" show={true} animation centered className="dialog-background">
        <div className="timKiemBenhNhan">
          <Modal.Header className="py-3 header-modal">
            <Modal.Title className="text-pri">Triệu chứng</Modal.Title>
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
              data={DataTrieuChung}
              columns={ColunmTrieuChung}
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

export default ModalTrieuChung;
