import { FunctionComponent } from "react";
import { HINH_THUC, LOAI_DOI_TUONG_CONST, UU_TIEN } from "../constants/BenhNhanConst";
import { IBenhNhan } from "../models/DSBenhNhanKhamBenhModels";

interface InfoPatientProps {
    infoBenhNhan: IBenhNhan | undefined
}
 
const InfoPatient: FunctionComponent<InfoPatientProps> = ({infoBenhNhan}) => {
    return ( 
        <>
        {infoBenhNhan?.hoTen?<div>
        <div className="text-break fw-500 px-12 py-16 info-patient spaces min-h-124">
          <span className="text-uppercase fw-600 fs-14px line-height-22 spaces">
            {infoBenhNhan?.hoTen}&nbsp;
          </span>
          <span className="fs-14px line-height-22 spaces">
            | Tuổi: {infoBenhNhan?.age} | {infoBenhNhan?.gioiTinh} 
            <br/>
            {infoBenhNhan?.loaiDoiTuong===LOAI_DOI_TUONG_CONST.bhyt.code?"BHYT":"Dịch vụ"} |&nbsp;
          </span>
          <span className="fs-14px line-height-22 spaces">
            Mã BN: {infoBenhNhan?.maBn} 
          </span>
          <br />
          <span className="fs-14px line-height-22 spaces">
            Hình thức: {infoBenhNhan?.loaiTiepNhan===HINH_THUC.benhMoi.code?"Bệnh mới":"Tái khám"} |
            Ưu tiên: {infoBenhNhan?.uuTien===UU_TIEN.uuTien.code?"Có":"Không"}
          </span>
          <br />
          <div className="text-truncate fs-14px line-height-22 spaces">
            Địa chỉ: {infoBenhNhan?.diaChi}
          </div>
        </div>
      </div>:<div className="info-patient spaces h-110 min-h-124">&nbsp;</div> }
      </>
     );
}
 
export default InfoPatient;