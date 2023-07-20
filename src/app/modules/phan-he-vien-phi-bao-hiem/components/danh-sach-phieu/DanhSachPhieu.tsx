import React, { FC, useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import {
  BangDsPhieuModel,
  DanhSachPhieuProps,
  fakeBangDanhSachPhieuData,
  SearchObject
} from "../../models/DanhSachPhieuModel";
import { TableCustom } from "../../../component/table-custom/TableCustom";
import { searchByPage } from "../../../phan-he-tiep-nhan/services/DSTiepNhanServices";
import { BangDanhSachPhieuColumn } from "./BangDanhSachPhieuColumn";
import { loaiPhieu } from "../../const/constants";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { TablePagination } from "../../../component/TablePagination";
import AutocompleteField from "../../../component/AutocompleteField";
import { CODE } from "../../../utils/Constant";
import { toast } from "react-toastify";


const DanhSachPhieuDialog: FC<DanhSachPhieuProps> = (props) => {
  const { open, handleClose } = props;

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [itemList, setItemList] = useState<BangDsPhieuModel[]>();
  const [searchObject, setSearchObject] = useState<SearchObject>({
    pageIndex: 1,
    pageSize: 9999,
    keyword: "",
    ipm: "",
  });

  useEffect(() => {
    updatePageData();
  }, [page, rowsPerPage]);

  const updatePageData = (): any => {
    let object: SearchObject = {
      ...searchObject,
      keyword: "",
      pageIndex: 1,
      pageSize: 10,
    };
    searchByPage(object).then(({ data }) => {
      if(CODE.SUCCESS === data?.code){
        setItemList(data?.data?.content);
        setTotalPage(data?.data?.totalPages)
        setTotalElements(data?.data?.totalElements)
      }
      else {
        toast.warning(data.message)
      }
    }).catch((err) => {
      toast.error("Xảy ra lỗi, vui lòng thử lại")
    });
  };

  const handleChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setSearchObject({ ...searchObject, [event.target.name]: value });
  };

  return(
    <>
      <Modal show={open} onHide={handleClose} size="xl" fullscreen="lg-down" animation centered>
        <Modal.Header closeButton>
          <h1>
            Danh sách phiếu
          </h1>
        </Modal.Header>

        <Modal.Body className="pt-0">
          <Row className="spaces my-10">
            <Col xs={3}>
              <Row>
                <Col xs={3} className="flex align-items-center">
                  <label className="form-label m-0">
                    <b>Mã BN</b>
                  </label>
                </Col>
                <Col xs={9}>
                  <input
                    placeholder="Mã bệnh nhân"
                    name="ipm"
                    className="form-control customs-input"
                    type="text"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4} className="flex align-items-center">
                  <label className="form-label m-0">
                    <b>Loại phiếu</b>
                  </label>
                </Col>
                <Col xs={8}>
                  <AutocompleteField
                    className="customs-input"
                    name={searchObject.ipm}
                    options={loaiPhieu}
                    onChange={handleChangeValueInput}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4} className="flex align-items-center">
                  <label className="form-label m-0">
                    <b>Từ Ngày</b>
                  </label>
                </Col>
                <Col xs={8}>
                  <input
                    placeholder="DD/MM/YYYY"
                    value={searchObject.tuNgay}
                    name="tuNgay"
                    className="form-control customs-input"
                    type="date"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4} className="flex align-items-center">
                  <label className="form-label m-0">
                    <b>Đến Ngày</b>
                  </label>
                </Col>
                <Col xs={8}>
                  <input
                    placeholder="DD/MM/YYYY"
                    className="form-control customs-input"
                    value={searchObject.denNgay}
                    name="denNgay"
                    type="date"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <TableCustom<BangDsPhieuModel>
            isReceptionList={true}
            compact={true}
            // data={itemList}
            minHeight={400}
            data={fakeBangDanhSachPhieuData}
            columns={BangDanhSachPhieuColumn}
            handleSearchByPage={updatePageData}
            handleChangeValueInput={handleChangeValueInput}
          />
          <TablePagination
            className="border-bottom-0"
            page={page}
            setPage={setPage}
            handlePagesChange={handlePagesChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsForPage={rowsForPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            totalPages={totalPages}
            totalElements={totalElements}
          />
        </Modal.Body>

        <Modal.Footer className="flex justify-content-center">
          <Button className="btn-navy-outlined" size="sm" onClick={handleClose}>Hủy Phiếu</Button>
          <Button className="btn-navy min-w-60px" size="sm">In</Button>
          <Button className="btn-navy" size="sm">Duyệt kế toán</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DanhSachPhieuDialog