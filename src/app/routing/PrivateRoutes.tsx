import { FC, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { PhanHeCDHAVaTDCN } from "../modules/phan-he-cdha-va-tdcn/PhanHeCDHAVaTDCN";
import PhanHeDatLichHen from "../modules/phan-he-dat-lich-hen/PhanHeDatLichHen";
import PhanHeKhamBenh from "../modules/phan-he-kham-benh/PhanHeKhamBenh";
import PhanHeKhoDuoc from "../modules/phan-he-kho-duoc/PhanHeKhoDuoc";
import TiepDon from "../modules/phan-he-noi-tru/components/tiep-don/TiepDon";
import PhanHePhauThuatThuThuat from "../modules/phan-he-phau-thuat-thu-thuat/PhanHePhauThuatThuThuat";
import PhanHeQuanTriHeThong from "../modules/phan-he-quan-tri-he-thong/PhanheQuanTriHeThong";
import { PhanHeVienPhiBaoHiem } from "../modules/phan-he-tiep-nhan-thanh-toan/tab-thanh-toan/ThanhToan";
import BenhAnDienTu, { BaoCao } from "../modules/phan-he-tiep-nhan/components/benh-an-dien-tu/BenhAnDienTu";
import { PhanHeXetNghiem } from "../modules/phan-he-xet-nghiem/PhanHeXetNghiem";
import { HomePage } from "../pages/Homepage/HomePage";
import { MenuTestPage } from "../pages/MenuTestPage";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import PhanHeTiepNhan from "../modules/phan-he-tiep-nhan-thanh-toan/PhanHeTiepNhan";
import NhaThuocVaThuNgan from "../modules/nha-thuoc-va-thu-ngan/NhaThuocVaThuNgan";
import PhanHeChuyenKhoa from "../modules/phan-he-chuyen-khoa/PhanHeChuyenKhoa";
import PhanHeKhoVatTu from "../modules/phan-he-kho-vat-tu/PhanHeKhoVatTu";
import PhanHeHanhChinh from "../modules/phan-he-hanh-chinh/PhanHeHanhChinh";
import PhanHeDieuTri from "../modules/phan-he-dieu-tri/PhanHeDieuTri";
const PrivateRoutes = () => {
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));

  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/*" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/phan-he-tiep-nhan" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="menu-test" element={<MenuTestPage />} />
        <Route path="phan-he-tiep-nhan" element={<PhanHeTiepNhan />} />
        <Route path="benh-an-dien-tu" element={<BenhAnDienTu />} />
        <Route path="tiep-nhan/bao-cao" element={<BaoCao />} />
        <Route path="phau-thuat-thu-thuat" element={<PhanHePhauThuatThuThuat />} />
        <Route path="fee-and-insurance" element={<PhanHeVienPhiBaoHiem />} />
        <Route path="cdha-tdcn" element={<PhanHeCDHAVaTDCN />} />
        <Route path="kham-benh" element={<PhanHeKhamBenh />} />
        <Route path="/test" element={<PhanHeXetNghiem />} />
        <Route path="phan-he-noi-tru/tiep-don" element={<TiepDon />} />
        <Route path="phan-he-noi-tru/quan-ly-phong-benh" element={<TiepDon />} />
        <Route path="phan-he-noi-tru/quan-ly-giuong-benh" element={<TiepDon />} />
        <Route path="quan-tri-he-thong" element={<PhanHeQuanTriHeThong />} />
        <Route path="kho-duoc" element={<PhanHeKhoDuoc />} />
        <Route path="kho-vat-tu" element={<PhanHeKhoVatTu />} />
        <Route path="nha-thuoc-thu-ngan" element={<NhaThuocVaThuNgan />} />
        <Route path="hen-kham" element={<PhanHeDatLichHen />} />
        <Route path="chuyen-khoa" element={<PhanHeChuyenKhoa />} />
        <Route path="hanh-chinh" element={<PhanHeHanhChinh />} />
        <Route path="dieu-tri" element={<PhanHeDieuTri />} />
        {/* Lazy Modules */}
        <Route path="crafted/pages/profile/*" element={<SuspensedView></SuspensedView>} />
        <Route path="crafted/pages/profile/*" element={<SuspensedView></SuspensedView>} />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--kt-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };

