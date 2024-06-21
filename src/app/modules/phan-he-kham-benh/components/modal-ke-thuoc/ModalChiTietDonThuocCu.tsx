import { Dispatch, FC, SetStateAction, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ContextMenu from "../../../component/ContextMenuV3";
import InputSearch from "../../../component/InputSearch";
import { SELECTION_MODE } from "../../../utils/Constant";
import { columnsPhieuChiDinhCuThuoc } from "../../columns/tab-thuoc/ColumnTabThuoc";
import { CODE_MENU_THAY_THE_THUOC, contextMenuChiTietMauThuocCu } from "../../constants/Thuoc";
import ModalKeThuoc from "../../modals/modal-ke-thuoc/ModalKeThuoc";
import { IMauThuocCu } from "../../models/ThuocModels";
import ModalTuyChonThuocThayThe from "./ModalTuyChonThuocThayThe";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  danhSachThuoc: IMauThuocCu[];
}

const ModalChiTietDonThuocCu: FC<Props> = (props) => {
  let { open, handleClose, danhSachThuoc } = props;
  let [openCapNhatMauChiDinhDialog, setOpenCapNhatMauChiDinhDialog] = useState<boolean>(false);
  let [openPageChiDinhThuoc, setOpenPageChiDinhThuoc] = useState<boolean>(false);
  let [openModalTuyChonThuocThayThe, setOpenModalTuyChonThuocThayThe] = useState<boolean>(false);

  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_MENU_THAY_THE_THUOC.THAY_THE_THUOC_CUNG_HOAT_CHAT]: () => setOpenModalTuyChonThuocThayThe(true),
      [CODE_MENU_THAY_THE_THUOC.THAY_THE_THUOC_BAT_KY]: () => setOpenModalTuyChonThuocThayThe(true),
    };
    menuActions[value?.code]?.();
  };
  const handleContextMenu = (e: any, row: any) => {
    setContextMenu({ x: e?.clientX, y: e?.clientY });
  };
  
  return (
    <>
      <Modal
        className={`dialog-background ${openPageChiDinhThuoc && "spaces top-50"}`}
        size="xl"
        show={open}
        animation
        centered
        backdropClassName="spaces top-50"
      >
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Tùy chọn thuốc trong đơn mẫu</Modal.Title>
          <button className="btn-close" onClick={() => handleClose(false)}></button>
        </Modal.Header>
        <Modal.Body className="pt-16 pb-10 px-24 spaces">
          <Row>
            <div>
              <InputSearch handleChange={() => {}} placeholder="Tìm kiếm" />
            </div>
          </Row>
          <Row>
            <Col xs="12">
              <div className="table-ds-right min-h-calc-265 mt-3 spaces">
                <TableCustom<any>
                  verticalScroll
                  columns={columnsPhieuChiDinhCuThuoc}
                  data={danhSachThuoc || []}
                  selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                  className="mt-3"
                  minHeight={450}
                  handleContextMenu={(e, row) => handleContextMenu(e, row)}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        {contextMenu && (
          <ContextMenu
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            handleCloseMenu={() => setContextMenu(null)}
            data={contextMenuChiTietMauThuocCu}
            target={contextMenu}
          />
        )}
      </Modal>
      {openCapNhatMauChiDinhDialog && (
        <ModalKeThuoc
          open={openCapNhatMauChiDinhDialog}
          handleClose={() => {
            setOpenCapNhatMauChiDinhDialog(false);
          }}
        />
      )}
      {openModalTuyChonThuocThayThe && (
        <ModalTuyChonThuocThayThe
          handleClose={() => {
            setOpenModalTuyChonThuocThayThe(false);
          }}
        />
      )}
    </>
  );
};

export default ModalChiTietDonThuocCu;
