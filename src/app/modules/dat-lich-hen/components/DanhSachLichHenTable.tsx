import { FC, useState } from "react";
import { TableCustom } from "../../component/table/table-custom/TableCustom";
import { benhNhan, danhSachLichHen } from "../models/datLichHenModels";
import { benhNhanData } from "../models/datLichHenModels";
import { fakeDataDsHenKham } from "../constants/fakeData";
import { LichHenColumn } from "../columns/LichHenColumn";
import TextField from "../../component/TextField";
import {
  BO_LOC,
  SAP_XEP_THEO,
  trangThaiBenhNhanDatLich,
} from "../constants/datLichHenConstants";
import { Col, Row } from "react-bootstrap";
import LabelRequired from "../../component/LabelRequired";
import AutocompleteObjectV2 from "../../component/AutocompleteObjectV2";
import { useFormikContext } from "formik";

type IDSLichHen = {
  benhNhanData?: benhNhanData;
  updatePageData?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate?: (row: any) => void;
  handlePay?: (row: any) => void;
  handleContextMenu?: (e: any, row: any) => void;
};

export const DanhSachLichHenTable: FC<IDSLichHen> = (props) => {
  let { benhNhanData, updatePageData, handleContextMenu } = props;
  const { values, setFieldValue, handleChange, errors, touched } =
    useFormikContext<benhNhan>();

  return (
    <>
      <div className="spaces w-70 ds-hen bg-white ">
        <div className="d-flex bg-white border spaces p-4">
          <div className="spaces w-50">
            <div className="d-flex spaces w-100">
              <div className="text-info fs-4 spaces  fw-bold w-50">
                Danh sách hẹn
              </div>
              <div className="d-flex spaces w-50">
                <LabelRequired
                  label="Sắp xếp theo"
                  className="min-w-85px spaces fw-bold"
                />
                <AutocompleteObjectV2
                  options={SAP_XEP_THEO}
                  value={values?.gioiTinh}
                  name="gioiTinh"
                  onChange={(selectedOption) =>
                    setFieldValue(selectedOption, "gioiTinh")
                  }
                  touched={touched?.gioiTinh}
                  errors={errors?.gioiTinh}
                  className="autocomplete-custom-lich-hen radius spaces width-100 h-25"
                />
              </div>
            </div>
          </div>

          <div className="spaces w-50 pr-10 d-flex">
            <div className="d-flex spaces w-50">
              <LabelRequired
                label="Bộ lọc"
                className="min-w-50px spaces pl-4 fw-bold"
              />
              <AutocompleteObjectV2
                options={BO_LOC}
                value={values?.gioiTinh}
                name="gioiTinh"
                onChange={(selectedOption) =>
                  setFieldValue(selectedOption, "gioiTinh")
                }
                touched={touched?.gioiTinh}
                errors={errors?.gioiTinh}
                className="autocomplete-custom-lich-hen radius spaces w-100 h-25"
              />
            </div>
            <div className="position-relative spaces w-50 ml-8">
              <TextField
                name="soDienThoai"
                labelClassName="min-w-40px"
                className="ps-29px"
                value={values?.soDienThoai}
                placeholder={"Tìm kiếm"}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute cursor-pointer search-icon"></i>
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <div className="border">
            <TableCustom<danhSachLichHen>
              hasToolbar={false}
              maxHeight={450}
              data={fakeDataDsHenKham || benhNhanData?.data}
              columns={LichHenColumn}
              handleSearchByPage={updatePageData}
              handleChangeValueInput={handleChange}
              verticalScroll={true}
              handleContextMenu={handleContextMenu}
            />
          </div>
        </div>
        <div className="spaces pb-12 mt-26 d-flex justify-content-center">
          <div className="spaces w-100 ms-2">
            <Row className="d-flex spaces w-100">
              <Col xs={6} lg={3} className="min-w-90px text-start">
                <i className="bi bi-circle-fill pe-2 text-status-blue"></i>
                &nbsp;
                <span>{trangThaiBenhNhanDatLich.daTiepNhan.name}</span>
              </Col>
              <Col xs={6} lg={3} className="min-w-120px text-start">
                <i className="bi bi-circle-fill pe-2 text-status-yellow"></i>
                &nbsp;
                <span>{trangThaiBenhNhanDatLich.chuaDen.name}</span>
              </Col>
              <Col xs={6} lg={3} className="min-w-90px text-start">
                <i className="bi bi-circle-fill pe-2 text-status-orange"></i>
                &nbsp;
                <span>{trangThaiBenhNhanDatLich.daGoiNhacLich.name}</span>
              </Col>
              <Col xs={6} lg={3} className="min-w-90px text-start">
                <i className="bi bi-circle-fill pe-2 text-status-red"></i>
                &nbsp;
                <span>{trangThaiBenhNhanDatLich.koDenHuyLich.name}</span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanhSachLichHenTable;
