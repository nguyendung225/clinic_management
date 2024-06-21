import React, { FC, useContext, useEffect } from "react";
import { AppContext } from "../../../appContext/AppContext";
import { danhSachMenu } from "../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";

export const BenhAnDienTu: FC = () => {
    const { setDSMenu } = useContext(AppContext);
    useEffect(() => {
        setDSMenu(danhSachMenu);
        return () => {
            setDSMenu([]);
        };
    }, []);

    return (
        <div className="reception-list">
            <div className="reception__header py-4 px-3">
                Tính năng đang phát triển
            </div>
        </div>
    )
}

export default BenhAnDienTu;
