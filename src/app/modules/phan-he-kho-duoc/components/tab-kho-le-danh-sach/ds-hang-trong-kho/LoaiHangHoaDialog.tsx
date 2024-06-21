import React, { useState } from 'react'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
import ActionTable from '../../../../component/action-table/ActionTable';
import { Column } from 'react-table';
import { xuatKhoMau } from '../../../models/QuanLyKhoModels';
import InputSearch from '../../../../component/InputSearch';
import { TablePagination } from '../../../../component/table/components/TablePagination';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../../utils/PageUtils';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
  handleCloseDialog: () => void;
}

const LoaiHangHoaDialog = (props: Props) => {
  const { handleCloseDialog } = props;
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const DSMauColumns: ReadonlyArray<Column<xuatKhoMau>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 w-60px"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={String(props.row.index + 1)} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "actions",
      Cell: ({ ...props }) => (
        <ActionTable data={props.data[props.row.index]} handleSelectAction={() => {}} isDelete />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "ma",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.ma} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "ten",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.ten} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"SL tồn"}
          className="text-center text-white px-3 min-w-70px"
        />
      ),
      id: "soLuonTon",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.soLuongTon} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn vị"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "donVi",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.donVi} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nồng độ"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "nongDo",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.nongDo} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hạn sử dụng"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hanSuDung",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hanSuDung} />
      ),
    },
  ];

  return (
    <Modal centered show={true} onHide={handleCloseDialog} className="background-blur" size='lg'>
      <ModalHeader className="header-modal" closeButton>
        <ModalTitle>
          Danh sách hàng hóa
        </ModalTitle>
      </ModalHeader>

      <ModalBody className="py-4 pt-2">
        <Row className="d-flex justify-content-end my-3">
          <Col xs={4}>
            <InputSearch handleChange={() => { }} placeholder="Tìm kiếm" />
          </Col>
        </Row>

        <Row>
          <Col>
            <TableCustom columns={DSMauColumns} data={[]} minHeight={250} />
            <TablePagination
              handlePagesChange={handlePagesChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              rowsForPage={rowsForPage}
              page={page}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
              totalPages={99}
              totalElements={10}
            />
          </Col>
        </Row>
      </ModalBody>

      <ModalFooter className="py-3 flex flex-center">
        <Button variant="secondary" className="min-w-80px btn btn-primary btn-sm" onClick={handleCloseDialog}>
          Hủy
        </Button>

        <Button variant="primary" className="btn-navy min-w-80px btn btn-primary btn-sm" type="submit">
          Lưu
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default LoaiHangHoaDialog