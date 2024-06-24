import TextField from "../../component/TextField";
import { useFormikContext } from "formik";
import {
  SAP_XEP_THEO,
  trangThaiBenhNhanDatLich,
} from "../constants/datLichHenConstants";
import { Col, Row } from "react-bootstrap";
import LabelRequired from "../../component/LabelRequired";
import AutocompleteObjectV2 from "../../component/AutocompleteObjectV2";
import { useState } from "react";
import { benhNhan } from "../models/datLichHenModels";
import DanhSachLichHenTable from "./DanhSachLichHenTable";
import { DanhSachLichChoTable } from "./DanhSachLChoKhamTable";

const ListDatLich = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { values, setFieldValue, handleChange, errors, touched } =
    useFormikContext<benhNhan>();

  return (
    <div className="d-flex mt-10 spaces gap-8">
      <div className="spaces max-w-1328px pb-60 ds-hen bg-white ">
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

          <div className="spaces w-50 d-flex">
            <div className="d-flex spaces w-50">
              <LabelRequired
                label="Bộ lọc"
                className="min-w-50px spaces pl-4 fw-bold"
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
            <DanhSachLichHenTable
              // benhNhanData={benhNhanData}
              // updatePageData={updatePageData}
              handleChange={handleChange}
              // handleUpdate={handleUpdate}
              // handlePay={handlePay}
              page={page}
              rowsPerPage={rowsPerPage}
              //handleContextMenu={handleContextMenu}
            />
          </div>
        </div>
        <div className="pt-5 d-flex justify-content-center">
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

      <div className="spaces max-w-582px pb-40 bg-white">
        <div className="spaces w-100 h-100 ds-cho bg-white">
          <div className="d-flex bg-white border spaces p-4">
            <div className="spaces w-50">
              <div className="d-flex spaces w-100">
                <div className="text-info fs-4 spaces  fw-bold w-50">
                  Thông tin phòng khám
                </div>
              </div>
            </div>

            <div className="spaces w-50 d-flex">
              <div className="position-relative spaces w-100 ml-8">
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
              <DanhSachLichChoTable
                // benhNhanData={benhNhanData}
                // updatePageData={updatePageData}
                handleChange={handleChange}
                // handleUpdate={handleUpdate}
                // handlePay={handlePay}
                page={page}
                rowsPerPage={rowsPerPage}
                //handleContextMenu={handleContextMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDatLich;
