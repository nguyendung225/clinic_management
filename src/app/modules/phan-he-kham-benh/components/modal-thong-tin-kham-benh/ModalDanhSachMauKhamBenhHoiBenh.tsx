import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ContextMenu from "../../../component/ContextMenuV2";
import { IconButtonSave } from "../../../component/IconSvg";
import InputSearch from "../../../component/InputSearch";
import { SELECTION_MODE } from "../../../utils/Constant";
import { ColunmDanhSachMauKhamBenh } from "../../constants/Columns";
import { CODE_ITEM_MENU_MAU_KHAM_BENH, contextMenuDSMauKhamBenh } from "../../constants/KhamBenh";
import { MauKhamBenh } from "../../models/ThongTinKhamBenhModel";
import { DataDanhSachMauKhamBenh } from "../FakeData";
import ModalMauKhamBenhHoiBenh from "./ModalMauKhamBenhHoiBenh";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import { useIntl } from "react-intl";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
interface Props {
  handleClose: () => void;
  setMauSelected: Dispatch<SetStateAction<MauKhamBenh | null>>;
}
const ModalDanhSachMauKhamBenhHoiBenh: FC<Props> = ({ handleClose, setMauSelected }) => {
  const intl = useIntl();
  const [selectedRow, setSelectedRow] = useState<any>();
  const [dataDanhSachMau, setDataDanhSachMau] = useState<MauKhamBenh[]>(DataDanhSachMauKhamBenh);
  const [openModalMauKhamBenh, setOpenModalMauKhamBenh] = useState<boolean>(false);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setSelectedRow(row?.original);
    setContextMenu({ x: e.clientX, y: e.clientY });
  };
  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_ITEM_MENU_MAU_KHAM_BENH.UPDATE]: () => setOpenModalMauKhamBenh(true),
      [CODE_ITEM_MENU_MAU_KHAM_BENH.DELETE]: () => {
        setShouldOpenConfirmDialog(true);
      },
    };

    menuActions[value?.code]();
  };
  const handleOnYesClick = () => {
    let dataSelected: any = selectedRow;
    setDataDanhSachMau(dataDanhSachMau?.filter((item) => dataSelected?.id !== item?.id));
    setShouldOpenConfirmDialog(false);
  };
  
  return (
    <>
      <Modal
        show
        centered
        size="xl"
        className="dialog-background"
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Danh sách mẫu khám bệnh, hỏi bệnh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4 d-flex justify-content-between">
            <Button
              className="btn-fill"
              onClick={() => {
                setSelectedRow([]);
                setOpenModalMauKhamBenh(true);
              }}
            >
              Thêm
            </Button>
            <div className="d-flex spaces width-40 align-items-center">
              <span className="me-4 spaces width-25">Tìm kiếm mẫu</span>
              <div className="spaces width-75">
                <InputSearch handleChange={() => {}} handleKeyDown={() => {}} handleSearch={() => {}} />
              </div>
            </div>
          </div>
          <TableCustom
            selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
            data={dataDanhSachMau}
            columns={ColunmDanhSachMauKhamBenh}
            getSelectedRowsData={setSelectedRow}
            minHeight={450}
            handleContextMenu={handleContextMenu}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-fill"
            onClick={() => {
              setMauSelected(selectedRow[0] || selectedRow);
              handleClose();
            }}
          >
            <IconButtonSave />
            Lưu
          </Button>
          <Button
            className="btn-outline"
            onClick={() => {
              handleClose();
            }}
          >
            Đóng
          </Button>
        </Modal.Footer>
        <div ref={contextRef}>
          {contextMenu && (
            <ContextMenu
              className="z-index-1060"
              data={contextMenuDSMauKhamBenh}
              x={contextMenu.x}
              y={contextMenu.y}
              handleClickOptionContextMenu={handleClickOptionContextMenu}
            />
          )}
        </div>
      </Modal>
      {openModalMauKhamBenh && (
        <ModalMauKhamBenhHoiBenh
          mauSelected={selectedRow}
          setMauSelected={setSelectedRow}
          dataDanhSachMau={dataDanhSachMau}
          setDataDanhSachMau={setDataDanhSachMau}
          handleClose={() => setOpenModalMauKhamBenh(false)}
        />
      )}
      <ConfirmDialog
        show={shouldOpenConfirmDialog}
        title={"Xác nhận"}
        message={"Bạn có chắc muốn xóa mẫu này không ?"}
        yes={intl.formatMessage({ id: "BTN.CONFIRM" })}
        onYesClick={handleOnYesClick}
        cancel={intl.formatMessage({ id: "BTN.CANCEL" })}
        onCancelClick={() => setShouldOpenConfirmDialog(false)}
      />
    </>
  );
};
export default ModalDanhSachMauKhamBenhHoiBenh;
