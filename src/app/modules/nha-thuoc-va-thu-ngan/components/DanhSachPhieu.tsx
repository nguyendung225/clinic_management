import { Col, Row } from "react-bootstrap";
import Autocomplete from "../../component/AutocompleteObject";
import CombinedTable from "../../component/table/combined-table/CombinedTable";
import { DsBenhNhanColumn } from "../const/Columns";
import InputSearch from "../../component/InputSearch";
import { dataDSBN } from "../const/Constants";
import { useState } from "react";
import ContextMenu from "../../component/ContextMenuV3";
type IProps = {
    getRowData: any
}
const DsPhieu = ({getRowData}: IProps) => {

    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);

    const menuDsBenhNhan = [
        {
            title: "Khách hàng",
        },
        {
            code: "0",
            name: "Gọi bệnh nhân",
        },
        {
            title: "Nhập thông tin in hóa đơn đỏ",
        },
        {
            code: "2",
            name: "Lịch sử khám bệnh",
        },
    ]

    const handleRightClick = (e: any, row: any) => {
        e.preventDefault()
        setContextMenu({ x: e.clientX, y: e.clientY });
    }


    return (
        <div className="border bg-white">
            <div className="d-flex align-items-center spaces gap-6 py-8 px-12">
                <div className="fs-5 fw-bold">Thông tin BN</div>
                <div className="flex-fill"><InputSearch placeholder='Tìm kiếm' handleChange={() => { }} className="spaces h-32 w-100" /></div>
            </div>
            <div className="overflow-auto">
                <CombinedTable
                    data={dataDSBN}
                    handleRightClick={handleRightClick}
                    userColumns={DsBenhNhanColumn}
                    getRowData={getRowData}
                    height={"calc(100vh - 270px)"}
                />
            </div>
            <div className="d-flex justify-content-center">
                <div className="spaces w-100 px-12 py-16">
                    <Row >
                        <Col xs={12}>
                            <Autocomplete
                                placeholder='Tất cả phiếu'
                                options={[]}
                                className="autocomplete-custom-tiep-nhan radius spaces h-32 my-4"
                            />
                        </Col>
                        <Col xs={12}>
                            <Autocomplete
                                placeholder='Tất cả thuốc'
                                options={[]}
                                className="autocomplete-custom-tiep-nhan radius spaces h-32 my-4"
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            {contextMenu && <ContextMenu data={menuDsBenhNhan} target={contextMenu} handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={() => { }} />}
        </div>
    );
};

export default DsPhieu;
