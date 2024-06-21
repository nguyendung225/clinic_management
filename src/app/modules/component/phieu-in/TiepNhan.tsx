import moment from "moment";
import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import "./PhieuIn.scss";
import { benhNhan } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
interface Props {
  show: boolean;
  handleClose: () => void;
  data: benhNhan;
}
const TiepNhan: FC<Props> = (props) => {
  let { show, handleClose , data} = props;
  return (
    <>
      <Modal
        size="sm"
        animation
        centered
        id="kt_header_search_modal"
        aria-hidden="true"
        dialogClassName="modal-dialog modal-dialog-centered mw-300px"
        onHide={handleClose}
        show={show}
      >
        <Modal.Header closeButton className="py-2 header-modal">
          <Modal.Title className="text-pri">Phiếu in tiếp nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="phieu-in">
              <div className="text-center">
                <div className="text-uppercase fw-bold">Bệnh Viện 199</div>
                <div className="text-big text-uppercase fw-bold">PHIẾU TIẾP ĐÓN</div>
                <div className="start-date">
                  {moment().format("DD/MM/YYYY HH:mm:ss")}
                </div>
              </div>
            <hr />
            <div className="text-big text-center">NGUYEN VAN A</div>
            <div>Mã bệnh nhân: {data?.mpi}</div>
            <div className="space-bewtween">
              <span>Giới tính: {data?.gioiTinh?.name}</span> <span>- N.S.: {data?.ngaySinh ? "" : ""}</span>
            </div>
            <div className="text-capitalize">467 Nguyễn Trãi, Thanh Xuân, Hà Nội</div>s
            <hr />
            <div>
              <div className="space-bewtween">
                <div className="mw-80 text-center">
                  <b className="text-center ml-35">Phòng Khám</b>
                  <div className="text-big text-center">
                    PHÒNG KHÁM NỘI 1 (Tầng 1 - P.101)
                  </div>
                </div>
                <div className="text-center">
                  <b>Số TT</b>
                  <div className="text-big text-center">12</div>
                </div>
              </div>
              <b>Đối tượng khám: Thường</b>
            </div>
            <hr />
            <div className="text-center">
              <div className="fw-bold">
                <i>Thời gian dự kiến vào khám bệnh là:</i>
                <br />
                {moment().add(30, "m").format("DD/MM/YYYY HH:mm:ss")}
              </div>
              <i>
                (Thời gian này có thể thay đổi tùy thuộc vào số lượng bệnh nhân)
              </i>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button  className="btn-navy min-w-50px" onClick={handleClose}>
            In
          </Button>
          <Button className="btn-navy-outlined" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { TiepNhan };
