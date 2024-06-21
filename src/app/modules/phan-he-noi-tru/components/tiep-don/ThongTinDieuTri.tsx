import { Form } from "react-bootstrap";
import "../../PhanHeNoiTru.scss";

type Props = {
  data: any;
};

const ThongTinDieuTri = (props: Props) => {
  const { data } = props;

  return (
    <div>
        <h5 className="text-center">Thông tin điều trị</h5>
        <div className="d-flex">
          <label>
            Lý do vào viện: <span className="text-muted">{data?.lydo}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Chẩn đoán vào viện: <span className="text-muted">{data?.cdVaoVien}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Chẩn đoán điều trị: <span className="text-muted">{data?.cdDieuTri}</span>
          </label>
        </div>
         
        <hr />

        <div className="d-flex">
          <label>
            Họ và tên: <span className="text-muted">{data?.tenBN}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Địa chỉ: <span className="text-muted">{data?.diaChi}</span>
          </label>
        </div>
        <div className="d-flex pt-2">
          <label className="col-sm-7">
            Ngày sinh: <span className="text-muted">{data?.ngaySinh}</span>
          </label>
          <label className="col-sm-5">
            Giới tính: <span className="text-muted">{data?.gioiTinh}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Đối tượng: <span className="text-muted">{data?.doiTuong}</span>
          </label>
        </div>
        <div className="d-flex pt-2">
          <label className="col-sm-8">
            Số thẻ BHYT: <span className="text-muted">{data?.maBHYT}</span>
          </label>
          <label className="col-sm-4">
            Tuyến: <span className="text-muted">{data?.tuyen}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10 flex-space-between">
          <label>Bảo hiểm:</label>
          <Form.Check className="customs-form-check" label={"5 năm"} />
          <Form.Check
            className="customs-form-check spaces pr-30"
            label={"6 tháng"}
          />
        </div>
        <div className="d-flex pt-2 gap-5">
          <label className="col-sm-6">
            Vào khoa: <span className="text-muted">{data?.vaoKhoa}</span>
          </label>
          <label className="col-sm-6">
            Ra khoa: <span className="text-muted">{data?.raKhoa}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Ngày ra viện: <span className="text-muted">{data?.ngayRaVien}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label>
            Kết quả điều trị: <span className="text-muted">{data?.kqDieuTri}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label className="col-sm-5">
            Tạm ứng: <span className="text-muted">{data?.tamUng}</span>
          </label>
          <label className="col-sm-5">
            Tổng: <span className="text-muted">{data?.tong}</span>
          </label>
        </div>
        <div className="d-flex pt-2 gap-10">
          <label className="col-sm-5">
            BH thanh toán: <span className="text-muted">{data?.bhThanToan}</span>
          </label>
          <label className="col-sm-5">
            Đã nộp: <span className="text-muted">{data?.daNop}</span>
          </label>
        </div>
      </div>
  );
};

export default ThongTinDieuTri;
