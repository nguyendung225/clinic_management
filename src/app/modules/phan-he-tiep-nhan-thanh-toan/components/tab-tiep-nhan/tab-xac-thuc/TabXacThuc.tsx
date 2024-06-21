import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";
import LabelRequired from "../../../../component/LabelRequired";
import UploadImagePopup from "../../../../component/upload-image/UploadImagePopup";
import { benhNhan, iUploadImage } from "../../../models/PhanHeTiepNhanModel";
import { useFormikContext } from "formik";
import { Col, Row } from "react-bootstrap";

const TabXacThuc = () => {
  const { values, setFieldValue } = useFormikContext<benhNhan>();

  const API_PATH_BENH_NHAN_IMAGE =
    (process.env.REACT_APP_PMS_API_URL || "") + "/v3/files/avatar/";
  const [codeUploadImage, setCodeUploadImage] = useState<string>("");

  const checkUrlImage = (value: string) => {
    let urlImage: string = "";
    switch (value) {
      case "avatar":
        urlImage = values?.xacThuc?.avatar?.src
          ? values?.xacThuc?.avatar?.src
          : values?.xacThuc?.avatar?.split
            ? API_PATH_BENH_NHAN_IMAGE +
            values?.xacThuc?.avatar.split("..").join("")
            : toAbsoluteUrl("/media/avatars/blank.png");
        return urlImage;
      case "cccdMatTruoc":
        urlImage = values?.xacThuc?.cccdMatTruoc?.src
          ? values?.xacThuc?.cccdMatTruoc?.src
          : values?.xacThuc?.cccdMatTruoc?.split
            ? API_PATH_BENH_NHAN_IMAGE +
            values?.xacThuc?.cccdMatTruoc.split("..").join("")
            : toAbsoluteUrl("/media/avatars/cccd.png");
        return urlImage;
      case "cccdMatSau":
        urlImage = values?.xacThuc?.cccdMatSau?.src
          ? values?.xacThuc?.cccdMatSau?.src
          : values?.xacThuc?.cccdMatSau?.split
            ? API_PATH_BENH_NHAN_IMAGE +
            values?.xacThuc?.cccdMatSau.split("..").join("")
            : toAbsoluteUrl("/media/avatars/cccdms.png");
        return urlImage;
      case "bhyt":
        urlImage = values?.xacThuc?.bhyt?.src
          ? values?.xacThuc?.bhyt?.src
          : values?.xacThuc?.bhyt?.split
            ? API_PATH_BENH_NHAN_IMAGE +
            values?.xacThuc?.bhyt.split("..").join("")
            : toAbsoluteUrl("/media/avatars/bhyt.png");
        return urlImage;
      default:
        break;
    }
  };

  const handleOpenUploadImage = (code: string) => {
    setCodeUploadImage(code);
  };

  const handleClose = () => {
    setCodeUploadImage("");
  };

  const handleUploadImage = (files: iUploadImage) => {
    let formData = new FormData();
    formData.append(codeUploadImage, files?.files[0]);
    files.formData = formData;
    setFieldValue(`xacThuc.${codeUploadImage}`, files);
    handleClose();
  };

  return (
    <Row className="w-100 d-flex">
      <Col xs={2}>
        <Row className="h-100">
          <Col xs={12} className="d-flex mt-4 border-bottom border-2" role="button">
            <i className="fa-solid fa-plus fs-1 text-info me-2"></i>
            <span className="pt-1">Đăng ký vân tay</span>
          </Col>

          <Col xs={12} className="d-flex mt-4 border-bottom border-2" role="button">
            <i className="fa-solid fa-plus fs-1 text-info me-2"></i>
            <span className="pt-1">Đăng ký mống mắt</span>
          </Col>
        </Row>
      </Col>

      <Col xs={10} className="pt-3 d-flex justify-content-between">
        <div>
          <div
            className="d-flex flex-center"
            onClick={() => handleOpenUploadImage("avatar")}
          >
            <img
              src={checkUrlImage("avatar")}
              alt="Ảnh bệnh nhân"
              className="img-xac-thuc img-xac-thuc-avatar"
            />
          </div>
          <LabelRequired label="Ảnh bệnh nhân" className="d-flex flex-center mt-2" />
        </div>

        <div>
          <div
            className="d-flex flex-center"
            onClick={() => handleOpenUploadImage("cccdMatTruoc")}
          >
            <img
              src={checkUrlImage("cccdMatTruoc")}
              alt="CCCD mặt trước"
              className="img-xac-thuc"
            />
          </div>
          <LabelRequired
            label="CCCD mặt trước"
            className="d-flex flex-center mt-2"
          />
        </div>

        <div>
          <div
            className="d-flex flex-center"
            onClick={() => handleOpenUploadImage("cccdMatSau")}
          >
            <img
              src={checkUrlImage("cccdMatSau")}
              alt="CCCD mặt sau"
              className="img-xac-thuc"
            />
          </div>
          <LabelRequired label="CCCD mặt sau" className="d-flex flex-center mt-2" />
        </div>

        <div>
          <div
            className="d-flex flex-center"
            onClick={() => handleOpenUploadImage("bhyt")}
          >
            <img
              src={checkUrlImage("bhyt")}
              alt="BHYT"
              className="img-xac-thuc"
            />
          </div>
          <LabelRequired label="Thẻ BHYT" className="d-flex flex-center mt-2" />
        </div>
      </Col>
      {codeUploadImage && (
        <UploadImagePopup
          open={!!codeUploadImage}
          handleClose={handleClose}
          handleUpdate={handleUploadImage}
        />
      )}
    </Row>
  );
};

export default TabXacThuc;
