import React, { FC, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import XetNghiem from "./XetNghiem";
import DichVu from "./DichVu";
import { ChiDinhDVContext } from "./ContextChiDinhDV";
import { createDSChiDinhDV } from "../../../service/ChiDinhDVService";
import { PhanHeTiepDonContext } from "../../../PhanHeTiepDonContext";
import { toast } from "react-toastify";
import { RESPONSE_STATUS_CODE } from "../../../../auth/core/_consts";
import { AppContext } from "../../../../appContext/AppContext";

const TabChiDinhDV: FC = () => {
    const { dataDichVu } = useContext(ChiDinhDVContext)
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const { setIsLoading } = useContext(AppContext)

    const checkValidate = () => {
        let isCheck = dataDichVu?.length > 0 && dataDichVu.some((dichVu: any) => dichVu?.departmentId && dichVu?.quantity)
        if (dataDichVu?.length === 0) {
            toast.warning("Vui lòng chọn dịch vụ")
            return false;
        }
        if (!isCheck) {
            toast.warning("Vui lòng điền đủ thông tin số lượng và phòng thực hiện")
            return false;
        }
        return true;
    }

    const handleSubmit = async () => {
        try {
            if (!checkValidate()) return;
            let dataChiDichDV = {
                benhNhanId: benhNhanInfo?.personId,
                soVaoVien: benhNhanInfo?.soVaoVien,
                dichVus: dataDichVu
            }
            setIsLoading(true);
            let { data } = await createDSChiDinhDV(dataChiDichDV)

            if (RESPONSE_STATUS_CODE.SUCCESS === data.code) {
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.error("Có lỗi xảy ra")
            }

        } catch (error) {
            toast.error("Có lỗi xảy ra")
        }
    }

    return (
        <div className="chiDinhCLS">
            <div >
                <Row className="m-4 mb-3">
                    <Col sm="5" className="box-shadow-36 p-0">
                        <XetNghiem />
                    </Col>
                    <Col sm="7" className="box-shadow-36 p-0" >
                        <DichVu />
                    </Col>
                </Row>
            </div>
            <div className="flex flex-center pb-3">
                <Button
                    className="btn-navy mr-5 w-80px"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Lưu
                </Button>
            </div>
        </div>
    )
};


export default TabChiDinhDV;
