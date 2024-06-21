import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import {
  RH,
  loaiPTTT,
  nhomMau,
  phuMeData,
  phuMoData,
  loaiPPVoCam,
} from "../../const/PhanHePhauThuatThuThuatconst";
import { PhuMoColumns } from "./PhuMoColumns";
import { PhuMeColumns } from "./PhuMeColumns";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  open: boolean;
  onClose: () => any;
}

const PhieuPhauThuatThuThuat: FC<Props> = (props) => {
  let { open, onClose } = props;
  return (
    <Modal show={open} fullscreen animation centered onHide={onClose}>
      <Modal.Header className="py-4 header-modal" closeButton>
        <Modal.Title className="text-pri">
          Phiếu phẫu thuật thủ thuật
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Phòng</label>
            <input
              type="text form-control customs-input"
              value={"Phẫu thuật - Gây mê hồi sức"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-100px form-label m-0">TG vào viện</label>
            <input
              type="date form-control customs-input"
              value={"05/09/2023 09:35:40"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">TG chỉ định</label>
            <input
              type="date form-control customs-input"
              value={"06/09/2023 09:50:40"}
              disabled
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Mã BN</label>
            <input
              type="text form-control customs-input"
              value={"BN2023000078"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-100px form-label m-0">Họ tên</label>
            <input
              type="text form-control customs-input"
              value={"Nguyễn Văn A"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Ngày sinh</label>
            <input
              type="date form-control customs-input"
              value={"25/04/1981"}
              disabled
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Nghề nghiệp</label>
            <input
              type="text form-control customs-input"
              value={"Nhân viên"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-100px form-label m-0">Địa chỉ</label>
            <input
              type="text form-control customs-input"
              value={"25 Trương Định, Hai Bà Trưng, Hà Nội"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Tỷ lệ %</label>
            <input
              type="number form-control customs-input w-80px"
              value={"100"}
              disabled
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Thời gian PTTT</label>
            <input
              type="text form-control customs-input"
              value={"07/09/2023 14:20:00"}
              disabled
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-100px form-label m-0">Số người</label>
            <input
              type="number form-control customs-input w-80px"
            />
          </div>
          <div className="col-4 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Khoa chẩn đoán</label>
            <input
              type="text form-control customs-input min-w-80px"
              value={"Khoa khám bệnh"}
              disabled
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Chẩn đoán chính
            </label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Chẩn đoán phụ</label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Chẩn đoán trước PTTT
            </label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Chẩn đoán sau PTTT
            </label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Cách thức PTTT</label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Phương pháp PTTT
            </label>
            <input type="text" className="form-control customs-input" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Loại PTTT</label>
            <Autocomplete
              className="customs-input w-600px"
              options={loaiPTTT}
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Phương pháp vô cảm
            </label>
            <Autocomplete
              className="customs-input w-600px"
              options={loaiPPVoCam}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">PTV/TTV chính</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Bác sĩ gây mê</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Phụ mổ</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Phụ mê</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <div className="min-w-150px"></div>
            <TableCustom<any> data={phuMoData} columns={PhuMoColumns} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="min-w-150px"></div>
            <TableCustom<any> data={phuMeData} columns={PhuMeColumns} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Dụng cụ viên</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Bác sĩ thực hiện
            </label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Nhóm máu</label>
            <Autocomplete className="customs-input w-150px" options={nhomMau} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Giúp việc</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">RH</label>
            <Autocomplete className="customs-input w-150px" options={RH} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Tình hình PTTT</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Tai biến</label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Tử vong trong PTTT
            </label>
            <Autocomplete className="customs-input w-600px" options={[]} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex">
            <label className="min-w-150px form-label m-0">Mô tả</label>
            <textarea className="form-control resize-none" rows={3} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Giờ bắt đầu thuốc mê
            </label>
            <input
              type="date form-control customs-input"
              disabled
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">
              Giờ dứt thuốc mê
            </label>
            <input
              type="date form-control customs-input"
              disabled
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <label className="min-w-150px form-label m-0">Kết thúc PTTT</label>
            <input
              type="date form-control customs-input"
              disabled
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="col-4 d-flex align-items-center">
              <input type="checkbox" className="customs-input-check" />
              <label className="form-label m-0 ms-3">Bệnh phẩm gửi GPBL</label>
            </div>
            <div className="col-2 d-flex align-items-center">
              <input type="checkbox" className="customs-input-check" />
              <label className="form-label m-0 ms-3 text-nowrap">
                Hẹn trả sau
              </label>
            </div>
            <div className="col-6 d-flex align-items-center">
              <input type="text" className="form-control customs-input" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center py-1">
        <Button className="btn-navy min-w-80px" size="sm">
          Lưu
        </Button>
        <Button className="btn-navy min-w-70px" size="sm">
          In phiếu
        </Button>
        <Button
          className="btn-navy-outlined min-w-80px"
          size="sm"
          onClick={onClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { PhieuPhauThuatThuThuat };
