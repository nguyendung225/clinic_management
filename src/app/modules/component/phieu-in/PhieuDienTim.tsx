import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import { HoiBenh, KyTenCuoiTrang, ThongTinHanhChinh, TongKetBenhAn, UnderLineDots } from "./components";
import CustomTextarea from "../custom-textarea/CustomTextarea";
import ThongTinChung from "./components/ThongTinChung";
import HeaderPhieuInV2 from "./components/HeaderPhieuInV2";

type Props = {
    show: boolean;
    handleClose: () => void;
};

const data = {
    title: "PHIẾU ĐIỆN TIM",
    maSo: "23/BV-01"
}

const PhieuDienTim = (props: Props) => {
    let { show, handleClose } = props;

    const handlePrint = () => {
        let content = document.getElementById("print-contents");
        let pri = (document.getElementById("ifmcontentstoprint") as any)
            .contentWindow;
        pri.document.open();

        pri.document.write((content as HTMLElement).innerHTML);

        pri.document.close();
        pri.focus();
        pri.print();
    };

    return (
        <Modal show={show} centered size="lg" onHide={handleClose}>
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title id="example-custom-modal-styling-title">
                    Phiếu in
                </Modal.Title>
            </Modal.Header>
            <iframe
                id="ifmcontentstoprint"
                style={{
                    height: "0px",
                    width: "0px",
                    position: "absolute",
                }}
            ></iframe>
            <Modal.Body id="print-contents" className="dialog-body-scroll">
                <HeaderPhieuInV2 data={data}/>
                
                <ThongTinChung isPhieuDienTim/>

                <div style={{ ...styles.d_flex_j_between, marginTop: "10px" }}>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    </div>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                        <div style={styles.textAlign.center}>Ngày ....... tháng ...... năm .......</div>
                        <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong style={{ fontSize: "16px" }}>Bác sĩ điều trị</strong></div>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "100px" }}>Họ và tên:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <strong style={{display: "block", fontSize: "16px", marginBottom: "8px"}}>KẾT QUẢ ĐIỆN TIM</strong>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100 }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "200px" }}>- Chuyển đạo mẫu:</span>
                            <CustomTextarea
                                disabled
                                rows={2} />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_60, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "120px" }}>- Nhịp, tần số:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                        <div style={{ ...styles.w_40, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "55px" }}>Góc  &#945;:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_60, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "50px" }}>- Trục:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                        <div style={{ ...styles.w_40, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "98px" }}>Tư thế tim:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_60, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "25px" }}>- P:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                        <div style={{ ...styles.w_40, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "28px" }}>PQ:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100 }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "40px" }}>- QRS:</span>
                            <CustomTextarea
                                disabled
                                rows={2} />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "35px" }}>- ST:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "25px" }}>- T:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "38px" }}>- QT:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "198px" }}>- Chuyển đạo trước tim:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <strong style={{ display: "block", fontSize: "16px", marginTop: "10px" }}>KẾT LUẬN</strong>
                    <div style={{ ...styles.w_100 }}>
                        <CustomTextarea
                            disabled
                            rows={6} />
                    </div>
                </div>



                <div style={{ ...styles.d_flex_j_between, marginTop: "15px"}}>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden, marginLeft: "10px" }}>
                        <div style={{ ...styles.textAlign.center, marginTop: "15px" }}><strong style={{ fontSize: "16px", textDecoration: "underline", textUnderlineOffset: "2px" }}>Lời dặn của BS chuyên khoa:</strong></div>
                    </div>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                        <div style={styles.textAlign.center}>Ngày ....... tháng ...... năm .......</div>
                        <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong style={{ fontSize: "16px" }}>Bác sĩ chuyên khoa</strong></div>
                        <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                            <span
                                className="mb-6px"
                                style={{ marginBottom: "-2px", width: "100px" }}>Họ và tên:</span>
                            <CustomTextarea
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="py-2">
                <Button variant="secondary" onClick={props.handleClose}>
                    Hủy
                </Button>
                <Button onClick={handlePrint}>In phiếu</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PhieuDienTim;
