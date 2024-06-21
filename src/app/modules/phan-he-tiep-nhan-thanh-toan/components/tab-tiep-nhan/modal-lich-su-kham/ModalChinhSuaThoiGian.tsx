import { Modal } from "react-bootstrap";
import TreeExplorer from "../../../../component/tree-explorer/TreeExplorer";
import { columnChinhSuaThoiGian, directoryTree } from "../../fakeData";
import { useState } from "react";
import ModalSuaKham from "./ModalSuaKham";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalChinhSuaThoiGian = ({ show, handleCloseDialog }: Props) => {
  const [shouldOpenDialogSuaKham, setShouldOpenDialogSuaKham] = useState(false);

  const handleDoubleClick =() => {
    setShouldOpenDialogSuaKham(true);
  }

  return (
    <div>
      <Modal centered show={show} size="xl" onHide={handleCloseDialog}>
        <Modal.Header className="py-4" closeButton>
          <Modal.Title>
            Chỉnh sửa thời gian
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TreeExplorer columns={columnChinhSuaThoiGian} data={directoryTree} handleDoubleClick={handleDoubleClick}/>
        </Modal.Body>
      </Modal>
      
      <ModalSuaKham show={shouldOpenDialogSuaKham} handleCloseDialog={() => setShouldOpenDialogSuaKham(false)}/>
    </div>
  )
}

export default ModalChinhSuaThoiGian