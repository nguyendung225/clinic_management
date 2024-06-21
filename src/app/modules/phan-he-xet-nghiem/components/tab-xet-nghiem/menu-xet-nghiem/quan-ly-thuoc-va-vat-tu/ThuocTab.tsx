import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LabelRequired from '../../../../../component/LabelRequired'
import CustomTextarea from '../../../../../component/custom-textarea/CustomTextarea'
import CombinedTable from '../../../../../component/table/combined-table/CombinedTable'
import { columnsDanhSachThuoc } from '../../../../const/Columns'

type Props = {}

const ThuocTab = (props: Props) => {
    return (
        <>
            <Row>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Loại phiếu: "
                        className="spaces min-w-100"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Ngày y lệnh: "
                        className="min-w-90px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                    <LabelRequired
                        label="Ngày chỉ định: "
                        className="min-w-90px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Mã phiếu: "
                        className="min-w-100px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Nơi chỉ định: "
                        className="min-w-90px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Người chỉ định: "
                        className="min-w-100px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Trạng thái"
                        className="min-w-90px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Kho"
                        className="min-w-100px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
                <Col
                    xs={6}
                    className="d-flex align-items-center text-lable-input"
                >
                    <LabelRequired
                        label="Chẩn đoán"
                        className="min-w-90px"
                    />
                    <CustomTextarea className="spaces h-26" disabled marginUnderline={8} />
                </Col>
            </Row>
            <CombinedTable userColumns={columnsDanhSachThuoc} data={[]} height={"calc(100vh - 395px)"} />

        </>
    )
}

export default ThuocTab