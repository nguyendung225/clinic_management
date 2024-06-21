import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { numberExceptThisSymbols } from "../../../../utils/FormatUtils";
import { benhNhan } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

export type sinhHieu = {
    values: benhNhan;
    handleInputChangeSinhHieu: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TabSinhHieu: FC<sinhHieu> = (props) => {
    let { handleInputChangeSinhHieu, values } = props;

    return (
        <>
            <Row className="space-row">
                <Col xs={4} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Cân nặng (kg)"
                        />
                        <TextField
                            name="canNang"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.canNang?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Chiều cao (cm)"
                        />
                        <TextField
                            name="chieuCao"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.chieuCao?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        <LabelRequired
                            label="BMI"
                        />
                        <TextField
                            name="BMI"
                            value={values?.obs?.BMI?.value}
                            readOnly={true}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <LabelRequired
                        label="Huyết áp "
                    />
                    <div className="d-flex">
                        <div className='flex-1'>
                            <TextField
                                name="huyetApTren"
                                type="number"
                                onKeyDown={numberExceptThisSymbols}
                                value={values?.obs?.huyetApTren?.value}
                                onChange={handleInputChangeSinhHieu}
                            />
                        </div>
                        <h4 className="m-0 px-1">/</h4>
                        <div className='flex-1'>
                            <TextField
                                name="huyetApDuoi"
                                type="number"
                                value={values?.obs?.huyetApDuoi?.value}
                                onChange={handleInputChangeSinhHieu}
                                onKeyDown={numberExceptThisSymbols}
                            />
                        </div>
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div className="spaces pr-10">
                        <LabelRequired
                            label="Mạch (l/p)"
                        />
                        <TextField
                            name="mach"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.mach?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        <LabelRequired
                            label="Nhiệt độ (℃)"
                        />
                        <TextField
                            name="nhietDo"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.nhietDo?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="SPO2 (%)"
                        />
                        <TextField
                            name="SPO2"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.SPO2?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
                <Col xs={6}>
                    <div>
                        <LabelRequired
                            label="Nhịp thở (l/p)"
                        />
                        <TextField
                            name="nhipTho"
                            type="number"
                            onKeyDown={numberExceptThisSymbols}
                            value={values?.obs?.nhipTho?.value}
                            onChange={handleInputChangeSinhHieu}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default TabSinhHieu;
