import { FC } from "react";
import TabChiDinhDV from "./components/TabChiDinhDV";
import ContextChiDinhDVProvider from "./components/ContextChiDinhDV";

const ChiDinhDichVu: FC = () => {
    return (
        <ContextChiDinhDVProvider>
            <TabChiDinhDV />
        </ContextChiDinhDVProvider>
    )
};

export default ChiDinhDichVu;
