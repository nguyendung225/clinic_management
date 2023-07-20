import { Button, Tab, Tabs } from "react-bootstrap";
import { Filter } from "./Filter";
import { BangDanhSachBenhPham } from "./bang-danh-sach-benh-pham/BangDanhSachBenhPham";
import { BangDanhSachKetQua } from "./bang-danh-sach-ket-qua/BangDanhSachKetQua";
import { DanhSachKetQua } from "./bang-danh-sach-ket-qua/FakeData";
import { DanhSachChiDinhData } from "./bang-danh-sach-chi-dinh/FakeData";
import { BangDanhSachChiDinh } from "./bang-danh-sach-chi-dinh/BangDanhSachChiDinh";
import { BoLocKetQua } from "../../component/BoLocKetQua";

const TiepNhan = () => {
  return (
    <div className="p-5">
      <BoLocKetQua label1='Đang thực hiện' label2="Đã trả kết quả"/>
      <BangDanhSachBenhPham />
      <Tabs className="tabs mt-5">
        <Tab eventKey={"0"} title="Danh sách chỉ định">
          <BangDanhSachChiDinh data={DanhSachChiDinhData}/>
        </Tab>
        <Tab eventKey={"1"} title="Danh sách kết quả">
          <BangDanhSachKetQua data={DanhSachKetQua} />
        </Tab>
      </Tabs>
      <div className="flex gap-4 justify-content-center mt-5">
        <Button className="btn-navy min-w-80px" size="sm">
          Lưu
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Hủy
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Tiếp nhận BP
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Từ chối BP
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Trả kết quả
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          In phiếu
        </Button>
      </div>
    </div>
  );
};

export { TiepNhan };
