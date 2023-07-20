import { FC, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import PhanHeTiepDon from "../modules/ds-benh-nhan-kham-benh/PhanHeTiepDon";
import { PhanHeVienPhiBaoHiem } from "../modules/phan-he-vien-phi-bao-hiem/PhanHeVienPhiBaoHiem";
import { HomePage } from "../pages/Homepage/HomePage";
import { MenuTestPage } from "../pages/MenuTestPage";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";

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
        <Route path="fee-and-insurance" element={<PhanHeVienPhiBaoHiem />} />
        <Route path="/ds-tiep-don" element={<PhanHeTiepDon />} />
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

