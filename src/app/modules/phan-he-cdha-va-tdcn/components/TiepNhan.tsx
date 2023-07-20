import { Button, Tab, Tabs } from "react-bootstrap";
import { BoLocKetQua } from "../../component/BoLocKetQua";
import { BangDanhSachBenhPham } from "./bang-danh-sach-benh-pham/BangDanhSachBenhPham";
import { ThongTinBenhNhan } from "./ThongTinBenhNhan";
import { BangDanhSachChiDinh } from "../../phan-he-xet-nghiem/components/bang-danh-sach-chi-dinh/BangDanhSachChiDinh";
import { DanhSachChiDinhData } from "../../phan-he-xet-nghiem/components/bang-danh-sach-chi-dinh/FakeData";
import { BangDanhSachKetQua } from "./bang-danh-sach-ket-qua/BangDanhSachKetQua";

const TiepNhan = () => {
  return (
    <div className="p-5">
      <BoLocKetQua label1='Đang thực hiện' label2="Đã trả kết quả"/>
      <BangDanhSachBenhPham/>
      <Tabs className="tabs mt-5">
        <Tab eventKey={"0"} title="Thông tin bệnh nhân">
          <ThongTinBenhNhan/>
        </Tab>
        <Tab eventKey={"1"} title="Danh sách chỉ định">
          <BangDanhSachChiDinh data={DanhSachChiDinhData}/>
        </Tab>
        <Tab eventKey={"2"} title="Kết quả CĐHA-TDCN">
          <BangDanhSachKetQua/>
        </Tab>
      </Tabs>
      <div className="flex flex-center pt-5">
        <Button className="btn-navy min-w-80px" size="sm">
          Lưu
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Hẹn trả KQ
        </Button>
        <Button className="btn-navy min-w-80px" size="sm">
          Thực hiện
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
