import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AppContext } from "../../../appContext/AppContext";
import { CODE } from "../../../utils/Constant";
import "../../PhanHeKhamBenh.scss";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { createKhamBenh, updateKhamBenh } from "../../services/KhamBenhService";
import { convertDataKhamBenhDto } from "../../utils/Utils";
import KhamChuyenKhoa from "../../components/tab-phieu-khac/danh-sach-phieu/KhamChuyenKhoa";
import { TableDanhSachPhieu, dsPhieuModel } from "../../components/tab-phieu-khac/TableDanhSachPhieu";
import KhamSucKhoeLaiXe from "../../components/tab-phieu-khac/danh-sach-phieu/KhamSucKhoeLaiXe";
import SoKhamThai from "../../components/tab-phieu-khac/danh-sach-phieu/SoKhamThai";
import SoDatVong from "../../components/tab-phieu-khac/danh-sach-phieu/SoDatVong";
import BangBanGiaoNguoiBenhDiMo from "../../components/tab-phieu-khac/danh-sach-phieu/BangBanGiaoNguoiBenhDiMo";
import BienBanHoiChan from "../../components/tab-phieu-khac/danh-sach-phieu/BienBanHoiChan";
import GiayNghiOm from "../../components/tab-phieu-khac/danh-sach-phieu/GiayNghiOm";
import PhieuNghiDuongThai from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuNghiDuongThai";
import TongKetBenhAn from "../../components/tab-phieu-khac/danh-sach-phieu/TongKetBenhAn";
import PhieuChuyenTuyen from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuChuyenTuyen";
import PhieuTruyenNhiem from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuTruyenNhiem";
import GiayBaoTu from "../../components/tab-phieu-khac/danh-sach-phieu/GiayBaoTu";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabPhieuKhac = () => {
  const { benhNhanInfo, thongTinKhamBenh } = useContext(PhanHeTiepDonContext);
  const { setIsLoading, thongTinBenhNhan } = useContext(AppContext);
  const [selectedPhieu, setSelectedPhieu] = useState<dsPhieuModel[]>([{ code: "kck", name: "Khám chuyên khoa" }]);

  const validationSchema = Yup.object({});

  const handleSubmit = async (values: any) => {
    try {
      const concepts: any =
        convertDataKhamBenhDto({
          ...values,
          khamBoPhan: thongTinKhamBenh?.khamBoPhan,
        }) || {};
      let obs = {
        concepts: concepts,
        patientId: benhNhanInfo?.patientId,
        encounterId: benhNhanInfo?.encounterId,
        personId: benhNhanInfo?.personId,
      };
      setIsLoading(true);
      if (benhNhanInfo?.encounterId) {
        let { data } = await updateKhamBenh(obs);
        if (CODE.SUCCESS === data.code) {
          toast.success("Thành Công");
        } else {
          toast.error("Xảy ra lỗi, vui lòng thử lại!");
        }
      } else {
        let { data } = await createKhamBenh(obs);
        if (CODE.SUCCESS === data.code) {
          toast.success("Thành Công");
        } else {
          toast.error("Xảy ra lỗi, vui lòng thử lại!");
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRowData = (rowData: dsPhieuModel[]) => {
    setSelectedPhieu(rowData);
  };
  const renderPhieu = (code: string) => {
    switch (code) {
      case "khamChuyenKhoa":
        return <KhamChuyenKhoa />;
      case "kskLaiXe":
        return <KhamSucKhoeLaiXe />;
      case "soKhamThai":
        return <SoKhamThai />;
      case "soDatVong":
        return <SoDatVong />;
      case "bangBanGiaoNguoiBenhDiMo":
        return <BangBanGiaoNguoiBenhDiMo />;
      case "bienBanHoiChan":
        return <BienBanHoiChan />;
      case "giayNghiOm":
        return <GiayNghiOm />;
      case "giayBaoTu":
        return <GiayBaoTu />;
      case "phieuNghiDuongThai":
        return <PhieuNghiDuongThai />;
      case "tongKetBenhAn":
        return <TongKetBenhAn />;
      case "phieuChuyenTuyen":
        return <PhieuChuyenTuyen />;
      case "phieuTruyenNhiem":
        return <PhieuTruyenNhiem />;
      default:
        return <KhamChuyenKhoa />;
    }
  };
  return (
    <Formik initialValues={benhNhanInfo?.thongTinKhamBenh || thongTinBenhNhan} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="ps-1 pt-7 pe-2 tab-kham-benh">
        <Row>
          <Col xs={3}>
            <div className="h-ds-phieu border">
              <div className="my-2 mx-2">
                <TableDanhSachPhieu handleSelectRowData={handleSelectRowData} />
              </div>
            </div>
          </Col>
          <Col xs={9} className="d-flex flex-column justify-content-between pe-5">
            {renderPhieu(selectedPhieu[0]?.code)}
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default TabPhieuKhac;
