import { FunctionComponent } from "react";
import { LOAI_DOI_TUONG_CONST } from "../constants/BenhNhanConst";
import { IBenhNhan } from "../models/DSBenhNhanKhamBenhModels";

interface InfoPatientRightProps {
  benhNhanInfo: IBenhNhan | undefined;
}

const InfoPatientRight: FunctionComponent<InfoPatientRightProps> = ({ benhNhanInfo }) => {
  return (
    <>
      {benhNhanInfo ? (
        <div>
          <div className="text-break fw-500 p-1 text-end">
            <span className="text-uppercase fw-600 fs-7">
              {benhNhanInfo?.hoTen}&nbsp;|&nbsp;{benhNhanInfo?.maBn}&nbsp;|&nbsp;{benhNhanInfo?.age}
              &nbsp;|&nbsp;{benhNhanInfo?.gioiTinh}
            </span>
            <div className="text-truncate fs-7">
              Đối tượng: {benhNhanInfo?.loaiDoiTuong === LOAI_DOI_TUONG_CONST.bhyt.code ? "BHYT" : "Dịch vụ"}
            </div>
            <div className="text-truncate fs-7">Địa chỉ: {benhNhanInfo?.diaChi}</div>
          </div>
        </div>
      ) : (
        <div className="info-patient spaces h-90"></div>
      )}
    </>
  );
};

export default InfoPatientRight;
