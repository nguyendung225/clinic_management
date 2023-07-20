import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { HomePage } from "../pages/Homepage/HomePage";
import { PhanHeTiepNhan } from "../modules/phan-he-tiep-nhan/PhanHeTiepNhan";
import { PhanHeVienPhiBaoHiem } from "../modules/phan-he-vien-phi-bao-hiem/PhanHeVienPhiBaoHiem";
import PhanHeTiepDon from "../modules/ds-benh-nhan-kham-benh/PhanHeTiepDon";
import TiepDon from "../modules/phan-he-noi-tru/components/tiep-don/TiepDon";
import { PhanHeXetNghiem } from "../modules/phan-he-xet-nghiem/PhanHeXetNghiem";
import PhanHePhauThuatThuThuat from "../modules/phan-he-phau-thuat-thu-thuat/PhanHePhauThuatThuThuat";
import { PhanHeCDHAVaTDCN } from "../modules/phan-he-cdha-va-tdcn/PhanHeCDHAVaTDCN";
import { MenuTestPage } from "../pages/MenuTestPage";
import BenhAnDienTu, { BaoCao } from "../modules/phan-he-tiep-nhan/components/benh-an-dien-tu/BenhAnDienTu";
const PrivateRoutes = () => {
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));

  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/*" element={<HomePage />} />
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/home" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="menu-test" element={<MenuTestPage />} />
        <Route path="phan-he-tiep-nhan" element={<PhanHeTiepNhan />} />
        <Route path="benh-an-dien-tu" element={<BenhAnDienTu />} />
        <Route path="tiep-nhan/bao-cao" element={<BaoCao />} />
        <Route path="phau-thuat-thu-thuat" element={<PhanHePhauThuatThuThuat />} />
        <Route path="fee-and-insurance" element={<PhanHeVienPhiBaoHiem />} />
        <Route path="cdha-tdcn" element={<PhanHeCDHAVaTDCN />} />
        <Route path="/ds-tiep-don" element={<PhanHeTiepDon />} />
        <Route path="/test" element={<PhanHeXetNghiem />} />
        <Route path="phan-he-noi-tru/tiep-don" element={<TiepDon />} />
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
