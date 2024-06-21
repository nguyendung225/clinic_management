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
          <Row className="d-flex p-2">
            <Col xs={6} className="min-w-90px text-start">
              <i className="bi bi-circle-fill text-status-blue"></i>&nbsp;
              <span>{trangThaiBenhNhan.choKham.name}</span>
            </Col>
            <Col xs={6} className="min-w-120px text-start">
              <i className="bi bi-circle-fill text-status-ocean"></i>&nbsp;
              <span>{trangThaiBenhNhan.khamBenhKetHop.name}</span>
            </Col>
            <Col xs={6} className="min-w-90px text-start">
              <i className="bi bi-circle-fill text-status-green"></i>&nbsp;
              <span>{trangThaiBenhNhan.ketThucKham.name}</span>
            </Col>
            <Col xs={6} className="min-w-90px text-start">
              <i className="bi bi-circle-fill text-status-yellow"></i>&nbsp;
              <span>{trangThaiBenhNhan.daCoKQCLS.name}</span>
            </Col>
            <Col xs={6} className="min-w-120px text-start">
              <i className="bi bi-circle-fill text-status-orange"></i>&nbsp;
              <span>{trangThaiBenhNhan.dangKham.name}</span>
            </Col>
            <Col xs={4} className="min-w-90px text-start">
              <i className="bi bi-circle-fill  text-status-purple"></i>&nbsp;
              <span>{trangThaiBenhNhan.choKQCLS.name}</span>
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
