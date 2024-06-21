import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import { UnderLineDots } from "./components";

type TProps = {
    show: boolean;
    handleClose: () => void;
}

const PhieuKhamNghiemTuThi = (props: TProps) => {
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
                <div style={{ ...styles.d_flex_j_between, alignItems: "center" }}>
                    <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Sở y tế:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>BV:<span style={styles.hr}></span></div>
                    </div>
                    <div style={{ ...styles.w_50, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.titleFrom, fontSize: "18px" }}><span style={{ fontWeight: 400 }}>PHIẾU XÉT NGHIỆM GIẢI PHẪU BỆNH</span><br /> KHÁM NGHIỆM TỬ THI</div>
                    </div>
                    <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>MS: 37/BV-01</div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số vào viện:<span style={styles.hr}></span></div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <div style={{ width: "50%" }}>
                        <div style={{ display: "flex", justifyContent: "end", alignItems: "center", paddingRight: "50px" }}>
                            Thường:
                            <svg style={{ border: "1px solid", marginLeft: "8px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div style={{ display: "flex", justifyContent: "start", alignItems: "center", paddingRight: "50px" }}>
                            Cấp cứu: <div style={{ width: "20px", height: "20px", border: "1px solid", marginLeft: "8px" }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_70 }}>
                        <span>- Họ tên người bệnh:<span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_20 }}>
                        <span>Tuổi:<span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_10 }}>
                        <span>Nam/Nữ</span>
                    </div>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_100 }}>
                    <span>- Địa chỉ:<span style={styles.hr}></span></span>
                </div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>- Tử vong lúc:.........giờ........,ngày........./........./..........</span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>Tại khoa:<span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_100 }}>
                    <span>- Người chứng kiến:<span style={styles.hr}></span></span>
                </div>
                <div style={styles.mainContent}>TÓM TẮT QUÁ TRÌNH DIỄN BIẾN BỆNH</div>
                <UnderLineDots lineNumber={7} />
                <div style={styles.mainContent}>1. Chẩn đoán lâm sàng:</div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Khoa khám bệnh: <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Khoa điều trị: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Trước phẫu thuật (nếu có): <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Nguyên nhân tử vong: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={styles.mainContent}>2. Chẩn đoán GPB:</div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Bệnh chính: <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Bệnh kèm theo: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Biến chứng: <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>+ Nguyên nhân tử vong: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={styles.mainContent}>3. Khám nghiệm:</div>
                <div style={{ ...styles.firstLineLetter }}>
                    <span>a. Khám nghiệm tổng quát tử thi: <span style={styles.hr}></span></span>
                </div>
                <UnderLineDots lineNumber={4} />
                <div style={{ fontWeight: "bold" }}>b. Khám nghiệm các cơ quan, phủ tạng:</div>
                <div>1. Không bình thường &nbsp; 2.Bình thường &nbsp; 3.Nghi ngờ</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid" }}>TT</th>
                            <th style={{ border: "1px solid" }}>CƠ QUAN</th>
                            <th style={{ border: "1px solid" }}>MÃ</th>
                            <th style={{ border: "1px solid" }}>TT</th>
                            <th style={{ border: "1px solid" }}>CƠ QUAN</th>
                            <th style={{ border: "1px solid" }}>MÃ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>01</td>
                            <td style={{ border: "1px solid" }}>Nội tiết</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>07</td>
                            <td style={{ border: "1px solid" }}>Hô hấp</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>02</td>
                            <td style={{ border: "1px solid" }}>Thần kinh</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>08</td>
                            <td style={{ border: "1px solid" }}>Tiêu hoá</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>03</td>
                            <td style={{ border: "1px solid" }}>Mắt</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>09</td>
                            <td style={{ border: "1px solid" }}>Da và mô dưới da</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>04</td>
                            <td style={{ border: "1px solid" }}>Tai - Mũi - Họng</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>10</td>
                            <td style={{ border: "1px solid" }}>Cơ - Xương - Khớp</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>05</td>
                            <td style={{ border: "1px solid" }}>Răng - Hàm - Mặt</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>11</td>
                            <td style={{ border: "1px solid" }}>Tiết niệu - Sinh dục</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", textAlign: "center" }}>06</td>
                            <td style={{ border: "1px solid" }}>Tuần hoàn</td>
                            <td style={{ border: "1px solid" }}></td>
                            <td style={{ border: "1px solid", textAlign: "center" }}>12</td>
                            <td style={{ border: "1px solid" }}>Khác</td>
                            <td style={{ border: "1px solid" }}></td>
                        </tr>
                    </tbody>
                </table>
                <div>Mô tả chi tiết cơ quan bệnh lí:</div>
                <UnderLineDots lineNumber={15} />
                <div style={styles.mainContent}>4. Xét nghiệm tổ chức, tế bào:</div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>- Người pha: <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.w_30 }}>
                        <span>- Ngày pha:........./.........../...........</span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_20 }}>
                        <span>- Số mảnh: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>- Người làm tiêu bản: <span style={styles.hr}></span></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                        <span>- Số tiêu bản: <span style={styles.hr}></span></span>
                    </div>
                </div>
                <div style={{ ...styles.firstLineLetter }}>
                    <span>- Nhuộm đặc biệt: <span style={styles.hr}></span></span>
                </div>
                <div style={{ ...styles.firstLineLetter }}>
                    <span>- Kết quả: </span>
                </div>
                <div style={{ ...styles.firstLineLetter }}>
                    <span>+ Mô tả đại thể: </span>
                </div>
                <UnderLineDots lineNumber={3} />
                <div style={{ ...styles.firstLineLetter }}>
                    <span>+ Kết luận: </span>
                </div>
                <UnderLineDots lineNumber={3} />
                <div style={styles.mainContent}>5. Xét nghiệm vi khuẩn <span style={{ fontWeight: "normal" }}>(nếu có):</span></div>
                <UnderLineDots lineNumber={2} />
                <div style={styles.mainContent}>6. Xét nghiệm độc chất <span style={{ fontWeight: "normal" }}>(nếu có):</span></div>
                <UnderLineDots lineNumber={2} />
                <div style={styles.mainContent}>KẾT LUẬN CHUNG:</div>
                <div>- Chẩn đoán lâm sàng và chẩn đoán giải phẫu bệnh: &nbsp; 1. Phù hợp &nbsp; 2. Không phù hợp</div>
                <UnderLineDots lineNumber={8} />
                <div style={styles.d_flex_j_between}>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                        <div style={{ height: "19px" }}></div>
                        <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>BÁC SĨ ĐỌC KẾT QUẢ</strong></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                    </div>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    </div>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                        <div style={styles.textAlign.center}>Ngày ....... tháng ...... năm .......</div>
                        <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>BÁC SĨ ĐIỀU TRỊ</strong></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
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
}

export default PhieuKhamNghiemTuThi;