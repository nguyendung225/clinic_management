import React, { FC } from "react";
import { Row } from "react-bootstrap";
import { benhNhan } from "../../models/PhanHeTiepNhanModel";
import TextField from "../../../component/TextField";

export type sinhHieu = {
  values: benhNhan;
  handleInputChangeSinhHieu: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TabSinhHieuV2: FC<sinhHieu> = (props) => {

  return (
    <>
      <Row className="space-row mt-4">
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="Mạch"
            name="sinhHieu.mach"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal"> lần/phút</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="Nhiệt độ"
            name="sinhHieu.nhietDo"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal">C</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <div className="d-flex justify-content-between w-575px gap-2 align-items-center">
            <div className="flex-auto">
              <TextField
                label="Huyết áp"
                name="sinhHieu.huyetAp1"
                labelClassName="ms-0 min-w-75px"
                
              />
            </div>
            <div>/</div>
            <div className="flex-auto">
              <TextField  name="sinhHieu.huyetAp2"  />
            </div>
          </div>
          <div className="fw-normal">mmHg</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="Nhịp thở"
            name="sinhHieu.nhipTho"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal">lần/phút</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="Cân nặng"
            name="sinhHieu.canNang"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal">kg</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="Chiều cao"
            name="sinhHieu.chieuCao"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal">cm</div>
        </div>
        <div className="d-flex gap-2 mb-1 align-items-center text-lable-input">
          <TextField
            className="w-500px"
            label="BMI"
            name="sinhHieu.BMI"
            labelClassName="ms-0 min-w-75px"
          />
          <div className="fw-normal">kg/m2</div>
        </div>
      </Row>
    </>
  );
};

export default TabSinhHieuV2;
