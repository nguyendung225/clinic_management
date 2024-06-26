import { Col, Row } from "react-bootstrap";
import { Column } from "react-table";
import Autocomplete from "../../component/AutocompleteObject";
import CombinedTable from "../../component/table/combined-table/CombinedTable";
import {
  HINH_THUC,
  LOAI_DOI_TUONG_CONST,
  UU_TIEN,
  trangThaiBenhNhan,
} from "../../phan-he-kham-benh/constants/BenhNhanConst";
import { formatTrangThaiBenhNhan } from "../../utils/FormatUtils";
import { IBenhNhanModel } from "../models/DanhSachBenhNhanModels";
import { fakeListBNXN } from "../const/FakeData";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

const DsBenhNhan = (props: any) => {
  const { setInfoBenhNhan } = props;
  ;
  const handleSelectedBenhNhan = async (benhNhans: any) => {
    setInfoBenhNhan(benhNhans.original);
  };
  const DsBenhNhanColumnV2: ReadonlyArray<Column<IBenhNhanModel>> = [
    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={"TT"}
          className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
        />
      ),
      id: "TT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center border spaces py-4 h-100"
          data={formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThai)}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={"Tên bệnh nhân"}
          className="text-center text-light min-w-200px p-2 border-x"
        />
      ),
      id: "tenBN",
      Cell: ({ ...props }) => (
        <div className="text-system border-bottom spaces p-1">
          <div className="flex m-0">
            <span className="text-uppercase">{props?.data[props?.row?.index]?.hoTen}</span>
            {props?.data[props?.row?.index]?.uuTien === UU_TIEN.uuTien.code ? (
              <span>
                <i className="bi bi-check-circle-fill text-cyan ms-2"></i>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex m-0">
            <span className="text-uppercase fw-semibold">{props?.data[props?.row?.index]?.maBn}</span>
            <span className="px-1"> - </span>
            <span>
              {props?.data[props?.row?.index]?.loaiDoiTuong === LOAI_DOI_TUONG_CONST.dichVu.code ? "Dịch vụ" : "BHYT"}
            </span>
            <span className="px-1"> - </span>
            <span>
              {props?.data[props?.row?.index]?.loaiTiepNhan === HINH_THUC.benhMoi.code ? "Bệnh mới" : "Tái khám"}
            </span>
          </div>
        </div>
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={"Barcode"}
          className="text-center text-light min-w-30px p-2 border-x"
        />
      ),
      id: "Barcode",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center border spaces py-4 h-100"
          data={props?.data[props?.row?.index]?.barCode}
        />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={"Mã BP"}
          className="d-flex justify-content-center text-center text-light min-w-100px p-2 border-x"
        />
      ),
      id: "Mã BP",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center border spaces py-4 h-100"
          data={props?.data[props?.row?.index]?.maBenhPham}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={" STTLM"}
          className="d-flex justify-content-center text-center text-light min-w-60px p-2 border-x"
        />
      ),
      id: "STTLM",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center border spaces py-4 h-100"
          data={""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<IBenhNhanModel>
          tableProps={props}
          title={" STT"}
          className="d-flex justify-content-center text-center text-light min-w-60px p-2 border-x"
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center border spaces py-4 h-100"
          data={""}
        />
      ),
    },
  ];
  return (
    <>
      <div className="overflow-auto">
        <CombinedTable
          data={fakeListBNXN}
          userColumns={DsBenhNhanColumnV2}
          getRowData={handleSelectedBenhNhan}
          height={"calc(100vh - 230px)"}
        />
      </div>
      <div className="d-flex justify-content-center">
        <div className="spaces w-100">
          <Row className="d-flex pt-4 spaces w-100 min-h-100">
            <Col xs={6}>
              <div className="status-1-bg text-center text-white rounded py-2">
                <span className='fs-4'>{`${trangThaiBenhNhan.dangKham.name}: 3`}</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="status-2-bg text-center rounded py-2">
                <span className='fs-4'>{`${trangThaiBenhNhan.choKQ.name}: 2`}</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="status-3-bg text-center text-white rounded py-2">
                <span className='fs-4'>{`${trangThaiBenhNhan.daCoKQ.name}: 4`}</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="status-4-bg text-center text-white rounded py-2">
                <span className='fs-4'>{`${trangThaiBenhNhan.ketThucKham.name}: 1`}</span>
              </div>
            </Col>
            <Col xs={12} className="p-2">
              <Autocomplete
                isDisabled
                placeholder='Tất cả các phòng'
                options={[]}
                className="autocomplete-custom-tiep-nhan radius spaces h-26"
              />
            </Col>
          </Row>
        </div>
      </div>

    </>
  );
};

export default DsBenhNhan;
