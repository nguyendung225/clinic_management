import { Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import InputSearch from "../../../component/InputSearch";
import "../../PhanHeKhamBenh.scss";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { benhAnColumns } from "../../columns/tab-benh-an-dien-tu/ColumnTabBenhAnDienTu";
import { KEY_TAB_BA_DIEN_TU } from "../../constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import moment from "moment";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabBenhAnDienTu = () => {
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [activeKey, setActiveKey] = useState<string>(
    KEY_TAB_BA_DIEN_TU.LOAI_TAI_LIEU
  );
  const [dsPhieuDetail, setDsPhieuDetail] = useState<any[]>([]);
  const [openKeDonThuocDialog, setOpenKeDonThuocDialog] = useState<boolean>(false);
  const initialValues: any = {
    maPhieu: "",
    ngayYLenh: "",
    nguoiThucHien: "",
    noiChiDinh: "",
    trangThai: "",
    noiThucHien: "",
    chuanDoan: "",
  };
  const handleTabSelect = (key: string | null) => {};
  const handleSelectRowData = (rowData: any) => {
    setDsPhieuDetail(rowData.dsTaiLieu);
  };

  useEffect(() => {
    setDsPhieuDetail([]);
  }, [benhNhanInfo]);

  const updatePageData = async () => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {};
  const dsLoaiTaiLieu = [
    { loaiTaiLieu: "Phiếu thu tạm ứng", soLuong: 2, dsTaiLieu:[{trangThai:1,tenTaiLieu:"Phiếu tạm ứng 1",ngayTao:moment().subtract(1,"hour").format("hh:ss DD/MM/YYYY"),nguoiTao:"Quản trị hệ thống",ngayKy:moment().format("hh:ss DD/MM/YYYY"),khoa:"Khoa nội"}]},
    { loaiTaiLieu: "Phiếu thu hoàn ứng", soLuong: 2 },
    { loaiTaiLieu: "Phiếu chỉ định cận lâm sàng", soLuong: 3 },
    { loaiTaiLieu: "Phiếu chỉ định chuyên khoa", soLuong: 1 },
    { loaiTaiLieu: "Giấy vào viện", soLuong: 1 },
    { loaiTaiLieu: "Đơn thuốc", soLuong: 2 },
    { loaiTaiLieu: "Phiếu sơ kết 15 ngày điều trị", soLuong: 2 },
    { loaiTaiLieu: "Phiếu chăm sóc", soLuong: 2 },
    { loaiTaiLieu: "Phiếu chăm sóc (kế hoạch)", soLuong: 2 },
    { loaiTaiLieu: "Phiếu theo dõi truyền dịch", soLuong: 2 },
    { loaiTaiLieu: "Tiền sử dị ứng", soLuong: 2 },
    { loaiTaiLieu: "Phiếu yêu cầu sử dụng khánh sinh", soLuong: 2 },
    { loaiTaiLieu: "Phiếu truyền máu", soLuong: 2 },
    { loaiTaiLieu: "Phiếu thăm dò hô hấp", soLuong: 2 },
    { loaiTaiLieu: "Phiếu thử phản ứng thuốc", soLuong: 2 },
    { loaiTaiLieu: "Phiếu khám gây mê trước mổ", soLuong: 2 },
    { loaiTaiLieu: "Phiếu gây mê hồi sức", soLuong: 2 },
    { loaiTaiLieu: "Phiếu cam đoan PTTT", soLuong: 2 },
    { loaiTaiLieu: "Biên bản hội chẩn", soLuong: 2 },
    { loaiTaiLieu: "Sổ hội chẩn", soLuong: 2 },
    { loaiTaiLieu: "Phiếu chẩn bị bệnh nhân", soLuong: 2 },
    { loaiTaiLieu: "Phiếu nghỉ ốm", soLuong: 2 },
    { loaiTaiLieu: "Phiếu lượng giá hoạt động chức năng và sự tham gia", soLuong: 2 },
    { loaiTaiLieu: "Phiếu khám và chỉ định phục hồi chức năng", soLuong: 2 },
    { loaiTaiLieu: "Phiếu điều trị", soLuong: 2 },
    { loaiTaiLieu: "Phiếu kết quả CĐHA", soLuong: 2 },
  ];
  console.log(dsPhieuDetail);
  
  return (
    <Row className="h-100">
      <Col xs={3}>
        <div className="table-cdha border mt-4">
          <div className="p-0 tabKhamBenh">
            <Tabs className="tabs" activeKey={activeKey} onSelect={handleTabSelect}>
              <Tab
                eventKey={KEY_TAB_BA_DIEN_TU.LOAI_TAI_LIEU}
                title={
                  <div className="label">
                    <span>Loại tài liệu</span>
                  </div>
                }
              >
                <div className="spaces h-100">
                  <div className="loai-tai-lieu">
                    {dsLoaiTaiLieu?.map((item,index) => (
                      <div className="p-table row" key={index} onClick={()=>handleSelectRowData(item)}>
                        <div>{item.loaiTaiLieu}</div>
                        <div className="text-danger">{item.soLuong} Phiếu</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab
                tabClassName="h-tab"
                eventKey={KEY_TAB_BA_DIEN_TU.TRANG_THAI}
                title={
                  <div className="label">
                    <span>Trạng thái</span>
                  </div>
                }
              >
                <div className="spaces h-100"></div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Col>
      <Col xs={9}>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          <Form className="pe-6 pt-4 h-100">
            <div className="d-flex flex-column justify-content-between h-calc-25px">
              <div className="my-2 mx-2">
                <InputSearch
                  handleChange={handleChange}
                  handleSearch={updatePageData}
                  handleKeyDown={handleKeyDown}
                  placeholder="Tìm kiếm"
                  type="text"
                />
              </div>
              <div className="tableLichSu border h-100 my-4">
                <TableCustom data={dsPhieuDetail || []} columns={benhAnColumns} />
              </div>
            </div>
          </Form>
        </Formik>
      </Col>
    </Row>
  );
};

export default TabBenhAnDienTu;
