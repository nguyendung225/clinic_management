import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import ContextMenu from "../../../component/ContextMenuV3";
import { IconButtonSave } from "../../../component/IconSvg";
import InputSearch from "../../../component/InputSearch";
import SelectTree from "../../../component/SelectTree";
import { TableCollapse } from "../../../component/table/table-collapse/TableCollapse";
import { columnDanhSachMauChiDinhThuoc } from "../../columns/tab-thuoc/ColumnTabThuoc";
import { CODE_MENU_DANH_SACH_MAU_CHI_DINH_THUOC, contextMenuDanhSachMauChiDinhThuoc } from "../../constants/Thuoc";
import ModalKeThuoc from "../../modals/modal-ke-thuoc/ModalKeThuoc";
import { DsMauChiDinhTree, dataDSMauChiDinhThuoc } from "../FakeData";
import PageChiDinhThuoc from "./PageChiDinhThuoc";
import ModalNhomDonMau from "./ModalNhomDonMau";
import { ConfirmDialog } from "../../../component/ConfirmDialog";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalMauChiDinhThuoc: FC<Props> = (props) => {
  let { open, handleClose } = props;
  let [openCapNhatMauChiDinhDialog, setOpenCapNhatMauChiDinhDialog] = useState<boolean>(false);
  let [openPageChiDinhThuoc, setOpenPageChiDinhThuoc] = useState<boolean>(false);
  let [openModalNhomDonMau, setOpenModalNhomDonMau] = useState<boolean>(false);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);

  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_MENU_DANH_SACH_MAU_CHI_DINH_THUOC.SUA_MAU_THUOC]: () => setOpenPageChiDinhThuoc(true),
      [CODE_MENU_DANH_SACH_MAU_CHI_DINH_THUOC.SUA_NHOM_DON_MAU]: () => setOpenModalNhomDonMau(true),
      [CODE_MENU_DANH_SACH_MAU_CHI_DINH_THUOC.XOA_MAU_THUOC]: () => setShouldOpenConfirmDialog(true),
    };
    menuActions[value?.code]?.();
  };
  const handleContextMenu = (e: any, row: any) => {
    setContextMenu({ x: e?.clientX, y: e?.clientY });
  };
  const updatePageData = async () => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {};
  const handleSubmit = async (values: any) => {
    // handleClose(false);
  };

  const validationSchema = Yup.object().shape({});
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  useEffect(() => {
    setCodeCollapses([...DsMauChiDinhTree.filter.map((item) => item.code), DsMauChiDinhTree.code]);
  }, []);
  return (
    <>
      <Modal className="dialog-background" size="xl" show={open} animation centered backdropClassName="spaces top-50">
        <Formik<any>
          initialValues={{}}
          validationSchema={validationSchema}
          validateOnChange={true}
          validate={(values) => {
            const errors: FormikErrors<any> = {};
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form id="form-thuoc">
              <div className="thuoc-dialog">
                <Modal.Header className="py-3 header-modal">
                  <Modal.Title className="text-pri">Danh sách mẫu chỉ định thuốc</Modal.Title>
                  <button className="btn-close" onClick={() => handleClose(false)}></button>
                </Modal.Header>
                <Modal.Body className="pt-16 pb-10 px-24 spaces">
                  <div className="d-flex spaces gap-10 align-items-center justify-content-between mb-16">
                    <div className="d-flex gap-3">
                      <Button className="btn-outline spaces h-29">
                        <i className="bi bi-list m-0 p-0"></i>
                      </Button>
                      <Button className="btn-fill spaces " onClick={() => setOpenPageChiDinhThuoc(true)}>
                        <i className="bi bi-plus"></i>
                        Thêm
                      </Button>
                    </div>
                    <div className="d-flex gap-3">
                      <Button className="btn-fill spaces ">
                        <i className="bi bi-arrow-up"></i>
                        Lên
                      </Button>
                      <Button className="btn-fill spaces ">
                        <i className="bi bi-arrow-down"></i>
                        Xuống
                      </Button>
                      <Button className="btn-fill spaces ">
                        <IconButtonSave />
                        Lưu thứ tự sắp xếp
                      </Button>
                    </div>
                  </div>
                  <Row>
                    <Col xs="3" className="pe-0">
                      <SelectTree
                        codeCollapses={codeCollapses}
                        handleChangeCollapsesCode={setCodeCollapses}
                        idSelected={idSelected}
                        handleChangeSelectId={setIdSelected}
                        selectTree={DsMauChiDinhTree as any}
                        className="spaces width-100 h-calc-vh-245 overflow-auto border-left-1 pt-4"
                      />
                    </Col>
                    <Col xs="9">
                      <InputSearch
                        handleChange={handleChange}
                        handleSearch={updatePageData}
                        handleKeyDown={handleKeyDown}
                        placeholder="Tìm kiếm"
                        type="text"
                      />
                      <div className="table-ds-right min-h-calc-265 mt-3 spaces">
                        <TableCollapse
                          data={dataDSMauChiDinhThuoc}
                          columns={columnDanhSachMauChiDinhThuoc}
                          collapseHeader="tenNhom"
                          collapseBody="dsMau"
                          handleContextMenu={(e, row)=>handleContextMenu(e, row)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Modal.Body>
              </div>
            </Form>
          )}
        </Formik>
        {contextMenu && (
          <ContextMenu
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            handleCloseMenu={() => setContextMenu(null)}
            data={contextMenuDanhSachMauChiDinhThuoc}
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
      {openPageChiDinhThuoc && (
        <PageChiDinhThuoc
          handleClose={() => {
            setOpenPageChiDinhThuoc(false);
          }}
        />
      )}
      {openModalNhomDonMau && (
        <ModalNhomDonMau
          handleClose={() => {
            setOpenModalNhomDonMau(false);
          }}
        />
      )}
      <ConfirmDialog
          className="z-index-1060"
          show={shouldOpenConfirmDialog}
          title="Thông báo"
          message="Bạn có chắc chắn muốn xóa mẫu thuốc này không ?"
          yes="Có"
          close="Không"
          onCloseClick={() => setShouldOpenConfirmDialog(false)}
          onYesClick={() => setShouldOpenConfirmDialog(false)}
        />
    </>
  );
};

export default ModalMauChiDinhThuoc;
