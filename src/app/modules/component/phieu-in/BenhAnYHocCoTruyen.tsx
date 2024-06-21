import { UnderLineDots } from "./components";
import { styles } from "./constant";
import { Button, Modal } from "react-bootstrap";


type Props = {
    show: boolean;
    handleClose: () => void;
}

const BenhAnYHocCoTruyen = (props: Props) => {
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
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Khoa:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                            <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                                Buồng<span style={styles.hr}></span>
                            </div>
                            <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                                Giường<span style={styles.hr}></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.titleFrom, fontSize: "20px" }}>BỆNH ÁN NGOẠI TRÚ</div>
                        <div style={{ ...styles.position.relative, ...styles.textAlign.center, lineHeight: "25px", fontSize: "16px" }}>Y HỌC CỔ TRUYỀN</div>
                    </div>
                    <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số ngoại trú:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số lưu trữ:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Mã số bệnh tật:<span style={styles.hr}></span></div>
                    </div>
                </div>
                <section>
                    <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "17px" }}>PHẦN I: PHẦN CHUNG</div>
                    <div style={styles.mainContent}>I. HÀNH CHÍNH:</div>
                    <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                            <span>1. Họ và tên <i>(In hoa)</i>:<span style={styles.hr}></span></span>
                        </div>
                        <div style={{ ...styles.d_flex, ...styles.w_50, justifyContent: "space-between", paddingLeft: "8px" }}>
                            <div>
                                <span style={{ marginRight: "8px" }}>2. Ngày sinh:</span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </div>
                            <div style={{ ...styles.position.relative }}>
                                <span style={{ position: "absolute", bottom: "100%", width: "100%", textAlign: "center" }}>Tuổi</span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.w_50, ...styles.d_flex }}>
                            3. Giới:
                            <div style={styles.w_10}></div> 1.Nam <span style={styles.box_square}></span>
                            <div style={styles.w_10}></div> 2.Nữ <span style={styles.box_square}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                            4. Nghề nghiệp:<span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                            5. Dân tộc:<span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                            6. Ngoại kiều:<span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_20 }}>
                            7. Địa chỉ: Số nhà<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_30 }}>
                            Thôn, phố<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                            Xã, phường:<span style={styles.hr}></span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                            Huyện(Q, Tx)<span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                            Tỉnh, thành phố:<span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={styles.firstLineLetter}>
                            8. Nơi làm việc:<span style={styles.hr}></span>
                            <div style={{ ...styles.lastLetter, paddingLeft: "8px" }}>
                                <div style={styles.d_flex}>
                                    9. Đối tượng: &nbsp;
                                    1.BHYT <span style={styles.box_square}></span> &nbsp;
                                    2.Thu phí <span style={styles.box_square}></span>&nbsp;
                                    3.Miễn <span style={styles.box_square}></span>&nbsp;
                                    4.Khác <span style={styles.box_square}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={styles.firstLineLetter}>
                            10. BHYT giá trị đến ngày.......tháng.......năm <span style={styles.hr}></span>
                            <div style={{ ...styles.lastLetter, paddingLeft: "8px" }}>
                                <div style={styles.d_flex}>
                                    Số thẻ BHYT &nbsp;
                                    <span style={{ ...styles.box_square, width: "40px" }}></span>
                                    <span style={{ ...styles.box_square, width: "40px" }}></span>
                                    <span style={{ ...styles.box_square, width: "40px" }}></span>
                                    <span style={{ ...styles.box_square, width: "40px" }}></span>
                                    <span style={{ ...styles.box_square, width: "80px" }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={styles.firstLineLetter}>
                            11. Họ tên, địa chỉ người nhà khi cần báo tin <span style={styles.hr}></span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                            <span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                            Điện thoại số <span style={styles.hr}></span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={styles.firstLineLetter}>
                            12. Đến khám bệnh lúc.........giờ.........phút &nbsp; ngày.........tháng........năm.........
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        13. Nơi giới thiệu
                        <div style={{ paddingLeft: "8px" }}>
                            <div style={styles.d_flex}>
                                1.Cơ quan y tế &nbsp;<span style={styles.box_square}></span>&nbsp;
                                2.Tự đến &nbsp;<span style={styles.box_square}></span>&nbsp;
                                3.Khác &nbsp;<span style={styles.box_square}></span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.firstLineLetter}>
                        14. Chẩn đoán của nơi giới thiệu <span style={styles.hr}></span>
                    </div>
                    <div style={{ lineHeight: "25px" }}>
                        15. Chẩn đoán của khoa khám bệnh:
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "25px", paddingLeft: "15px" }}>
                        - Theo YHCT: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "25px", paddingLeft: "15px" }}>
                        - Theo YHHĐ: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.d_flex, justifyContent: "end" }}>
                        <div style={{ fontWeight: "bold", textAlign: "center", ...styles.w_40, marginBottom: "70px" }}>
                            THẦY THUỐC KHÁM BỆNH <br />
                            (Ký tên, ghi rõ họ tên)
                        </div>
                    </div>
                    <section>
                        <div style={styles.mainContent}>
                            II. CHẨN ĐOÁN:
                        </div>
                        <div style={{ border: "1px solid" }}>
                            <div style={styles.d_flex}>
                                <div style={{ ...styles.w_40, borderRight: "1px solid" }}>
                                    <div style={{ fontWeight: "bold", padding: "8px" }}>1.Chẩn đoán theo YTHĐ</div>
                                    <div style={{ padding: "8px" }}>
                                        <div>1.2. Nơi điều trị:</div>
                                        <UnderLineDots lineNumber={2} />
                                        <div>1.3: Ra viện:</div>
                                        <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                                            - Bệnh chính: <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                                            - Bệnh kèm theo: <span style={styles.hr}></span>
                                        </div>
                                        <UnderLineDots lineNumber={2} />
                                    </div>
                                </div>
                                <div style={{ ...styles.w_60 }}>
                                    <div style={{ fontWeight: "bold", borderBottom: "1px solid", padding: "8px" }}>2. CHẨN ĐOÁN THEO YTCT</div>
                                    <div style={{ padding: "8px" }}>
                                        <div>2.2. Nơi điều trị:</div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.1 Bệnh danh:</strong> <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.2 Bát cương:</strong> <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.3 Tảng phủ:</strong> <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.4 Kinh mạch:</strong> <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.5 Nguyên nhân:</strong> <span style={styles.hr}></span>
                                        </div>
                                        <div style={{ ...styles.firstLineLetter, height: "25px" }}>
                                            <strong>2.2.6 Chẩn đoán ra viện:</strong> <span style={styles.hr}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div style={styles.mainContent}><strong>III. KẾT QUẢ ĐIỀU TRỊ:</strong></div>
                        <div style={{ ...styles.d_flex, justifyContent: "space-around" }}>
                            <div>1. Khỏi </div>
                            <div>2. Đỡ </div>
                            <div>3. Nặng hơn </div>
                            <div>4. Chuyển viện </div>
                            <div>5. Tử vong </div>
                            <div>6. Tiên lượng năng gia đình xin về </div>
                        </div>
                        <div style={{ textAlign: "right", marginRight: "50px" }}>Ngày......tháng.......năm......</div>
                        <div style={{ ...styles.d_flex, justifyContent: "space-around", marginBottom: "100px" }}>
                            <strong>Giám đốc BV</strong>
                            <strong>Trưởng phòng KHTH</strong>
                            <strong>Trưởng khoa</strong>
                            <strong>Thầy thuốc điều trị</strong>
                        </div>
                    </section>
                </section>
                <section>
                    <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "17px" }}>PHẦN II: BỆNH ÁN</div>
                    <div style={styles.mainContent}><strong>A/ Y HỌC HIỆN ĐẠI:</strong></div>
                    <div style={{ ...styles.firstLineLetter, ...styles.mainContent }}>
                        <strong>I. LÝ DO VÀO VIỆN: </strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={1} />
                    <div style={styles.mainContent}><strong>II. BỆNH SỬ:</strong></div>
                    <UnderLineDots lineNumber={6} />
                    <div style={styles.mainContent}><strong>III. TIỀN SỬ:</strong></div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Bản thân: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Gia đình: <span style={styles.hr}></span>
                    </div>
                    <section>
                        <div style={styles.position.relative}>
                            <div style={styles.mainContent}><strong>IV. KHÁM BỆNH:</strong></div>
                            <div style={{ position: "absolute", width: "170px", top: "20px", right: "0", background: "#fff", padding: "4px", border: "1px solid", zIndex: "1" }}>
                                <div style={styles.firstLineLetter}>
                                    Mạch <span style={styles.hr}></span>
                                    <span style={styles.lastLetter}>lần/ph</span>
                                </div>
                                <div style={styles.firstLineLetter}>
                                    Nhiệt độ <span style={styles.hr}></span>
                                    <span style={styles.lastLetter}>lần/ph</span>
                                </div>
                                <div style={styles.firstLineLetter}>
                                    Huyết áp......../<span style={styles.hr}></span>
                                    <span style={styles.lastLetter}>mmHg</span>
                                </div>
                                <div style={styles.firstLineLetter}>
                                    Nhịp thở <span style={styles.hr}></span>
                                    <span style={styles.lastLetter}>lần/ph</span>
                                </div>
                                <div style={styles.firstLineLetter}>
                                    Cân nặng <span style={styles.hr}></span>
                                    <span style={styles.lastLetter}>kg</span>
                                </div>
                            </div>
                        </div>
                        <div style={styles.firstLineLetter}>
                            <strong>1. Toàn thân: </strong><span style={styles.hr}></span>
                        </div>
                        <UnderLineDots lineNumber={2} />
                        <div style={styles.firstLineLetter}>
                            <strong>2. Các bộ phận: </strong><span style={styles.hr}></span>
                        </div>
                        <UnderLineDots lineNumber={6} />
                        <div style={styles.firstLineLetter}>
                            <strong>3. Tóm tắt kết quả lâm sàng: </strong><span style={styles.hr}></span>
                        </div>
                        <UnderLineDots lineNumber={4} />
                        <div><strong>4. Chẩn đoán: </strong></div>
                        <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                            - Chẩn đoán bệnh chính: <span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                            - Bệnh kèm theo: <span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                            - Chẩn đoán phân biệt: <span style={styles.hr}></span>
                        </div>
                        <UnderLineDots lineNumber={1} />
                    </section>
                </section>
                <section>
                    <div style={styles.mainContent}><strong>B/ Y HỌC CỔ TRUYỀN:</strong></div>
                    <div style={styles.mainContent}><strong>I. VỌNG CHẨN: </strong></div>
                    <div style={styles.firstLineLetter}>
                        Mô tả: <span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={2} />
                    <div style={styles.mainContent}><strong>II. VĂN CHẨN: </strong></div>
                    <div style={styles.firstLineLetter}>
                        Mô tả: <span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={2} />
                    <div style={styles.mainContent}><strong>III. VẤN CHẨN: </strong></div>
                    <div style={styles.firstLineLetter}>
                        Mô tả: <span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={6} />
                    <div style={styles.mainContent}><strong>IV. THIẾT CHẨN: </strong></div>
                    <div><strong>1. Xúc chẩn: </strong></div>
                    <div style={styles.firstLineLetter}>
                        - Mô tả: <span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={1} />
                    <div><strong>2. Mạch chẩn: </strong></div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Mạch tay phải: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Mạch tay trái: <span style={styles.hr}></span>
                    </div>
                    <div style={styles.mainContent}><strong>V. TÓM TẮT TỨ CHẨN: </strong></div>
                    <UnderLineDots lineNumber={3} />
                    <div style={styles.mainContent}><strong>VI. BIỆN CHỨNG LUẬN TRỊ: </strong></div>
                    <UnderLineDots lineNumber={3} />
                    <div style={styles.mainContent}><strong>VII. Chẩn đoán: </strong></div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        - Bệnh danh: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        - Bát cương: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        - Tạng phủ - Kinh lạc: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        - Nguyên nhân: <span style={styles.hr}></span>
                    </div>
                </section>
                <section>
                    <div style={styles.mainContent}><strong>C. ĐIỀU TRỊ: </strong></div>
                    <div style={styles.mainContent}><strong>I. Điều trị đơn thuần YHCT: </strong></div>
                    <div style={styles.firstLineLetter}>
                        1. Phương pháp điều trị: <span style={styles.hr}></span>
                    </div>
                    <div style={styles.firstLineLetter}>
                        2. Phương thuốc: <span style={styles.hr}></span>
                    </div>
                    <div style={styles.firstLineLetter}>
                        3. Phương huyệt: <span style={styles.hr}></span>
                    </div>
                    <div style={styles.firstLineLetter}>
                        <strong>II. Điều trị kết hợp với YHHĐ</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={1} />
                    <div style={styles.firstLineLetter}>
                        <strong>III. Chế độ dinh dưỡng tại nhà</strong><span style={styles.hr}></span>
                    </div>
                    <div style={styles.firstLineLetter}>
                        <strong>IV. Chế độ hộ lý tại nhà</strong><span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, ...styles.mainContent }}>
                        <strong>D. TIÊN LƯỢNG</strong><span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.d_flex, justifyContent: "end" }}>
                        <div style={{ ...styles.w_40, textAlign: "center", marginBottom: "100px" }}>
                            <div>giờ.........ngày.........tháng.........năm.........</div>
                            <div>Thầy thuốc làm bệnh án</div>
                            <div>(Ký, ghi rõ họ tên)</div>
                        </div>
                    </div>
                </section>
                <div style={{ height: "150px" }}></div>
                <section style={{ border: "1px solid" }}>
                    <div style={{ padding: "8px" }}>
                        <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "17px" }}>PHẦN III: TỔNG KẾT BỆNH ÁN RA VIỆN</div>
                        <div style={styles.firstLineLetter}>
                            1. Lý do ra viện: <span style={styles.hr}></span>
                        </div>
                        <div style={styles.firstLineLetter}>
                            2. Quá trình bệnh lý và diễn biến lâm sàng: <span style={styles.hr}></span>
                        </div>
                        <UnderLineDots lineNumber={3} />
                        <div>3.Kết quả xét nghiệm cận lâm sàng có giá trị chẩn đoán:</div>
                        <UnderLineDots lineNumber={2} />
                        <div>4. Chẩn đoán vào viện:</div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHHĐ: <span style={styles.hr}></span>
                        </div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHCT: <span style={styles.hr}></span>
                        </div>
                        <div>5. Phương pháp điều trị:</div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHHĐ: <span style={styles.hr}></span>
                        </div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHCT: <span style={styles.hr}></span>
                        </div>
                        <div style={styles.d_flex}>
                            <div>6. Kết quả điều trị:</div>
                            <div style={{ ...styles.d_flex }}>
                                <div>&nbsp;1. Khỏi&nbsp;</div>
                                <div>&nbsp;2. Đỡ&nbsp;</div>
                                <div>&nbsp;3. Không đỡ&nbsp;</div>
                                <div>&nbsp;4. Chuyển viện&nbsp;</div>
                                <div>&nbsp;5. Tử vong&nbsp;</div>
                            </div>
                        </div>
                        <div>5. Chẩn đoán ra viện:</div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHHĐ: <span style={styles.hr}></span>
                        </div>
                        <div style={styles.firstLineLetter}>
                            - Theo YHCT: <span style={styles.hr}></span>
                        </div>
                        <div>8. Tình trạng người bệnh khi ra viện:</div>
                        <UnderLineDots lineNumber={2} />
                        <div>9. Thơi gian điều trị: Tổng số:.......ngày "từ đến"</div>
                        <div>10. Hướng điều trị và các chế độ tiếp:</div>
                        <UnderLineDots lineNumber={4} />
                    </div>
                    <footer style={styles.d_flex}>
                        <div style={{ ...styles.w_40, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid" }}>
                            <div style={styles.textAlign.center}><strong>Hồ sơ, phim, ảnh</strong></div>
                            <div style={styles.d_flex}>
                                <div style={{ ...styles.w_70, ...styles.overflow.hidden, borderTop: "1px solid", borderRight: "1px solid" }}>
                                    <div style={styles.textAlign.center}><strong>Loại</strong></div>
                                    <div style={{ ...styles.position.relative, height: "23px", borderBottom: "1px dotted", borderTop: "1px solid", padding: "0 8px" }}>- X-quang</div>
                                    <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- CT Scanner</div>
                                    <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Siêu âm</div>
                                    <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Xét nghiệm</div>
                                    <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Khác<span style={{ ...styles.hr, ...styles.w_70 }}></span></div>
                                    <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>Toàn bộ hồ sơ</div>
                                </div>
                                <div style={{ ...styles.w_30, borderTop: "1px solid" }}>
                                    <div style={styles.textAlign.center}><strong>Số tờ</strong></div>
                                    <div style={{ height: "23px", borderBottom: "1px dotted", borderTop: "1px solid", padding: "0 8px" }}></div>
                                    <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                    <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                    <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                    <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                    <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ ...styles.w_25, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid", borderLeft: "1px solid", borderRight: "1px solid" }}>
                            <div style={{ padding: "6px" }}>
                                <div style={styles.textAlign.center}><strong>Người giao hồ sơ:</strong></div>
                                <div style={{ ...styles.position.relative, marginTop: "40px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_60 }}></span></div>
                            </div>
                            <div style={{ borderTop: "1px solid", padding: "6px" }}>
                                <div style={styles.textAlign.center}><strong>Người nhận hồ sơ:</strong></div>
                                <div style={{ ...styles.position.relative, marginTop: "40px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_60 }}></span></div>
                            </div>
                        </div>
                        <div style={{ ...styles.w_35, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid", padding: "8px" }}>
                            <div style={styles.textAlign.center}>Ngày.........tháng.........năm..........</div>
                            <div style={styles.textAlign.center}><strong>Bác sĩ điều trị</strong></div>
                            <div style={{ ...styles.position.relative, marginTop: "100px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_70 }}></span></div>
                        </div>
                    </footer>
                </section>
                <div style={{ height: "150px" }}></div>
                <section>
                    <div style={{ ...styles.d_flex_j_between, alignItems: "center" }}>
                        <div style={{ ...styles.w_25, ...styles.overflow.hidden, }}>
                            <div style={{ ...styles.position.relative, lineHeight: "25px", textAlign: "center" }}><strong>SỞ Y TẾ</strong></div>
                            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>BỆNH VIỆN:<span style={styles.hr}></span></div>
                        </div>
                        <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                            <div style={{ ...styles.titleFrom, fontSize: "18px" }}>PHIẾU ĐIỀU TRỊ</div>
                            <div style={{ ...styles.position.relative, ...styles.textAlign.center, lineHeight: "25px", fontSize: "16px" }}>Y HỌC CỔ TRUYỀN</div>
                        </div>
                        <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số vào viện:<span style={styles.hr}></span></div>
                        </div>
                    </div>
                    <div style={{ height: "25px" }}></div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                            Họ tên người bệnh<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_20 }}>
                            Tuổi<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_30 }}>
                            Giới<span style={styles.hr}></span>
                        </div>
                    </div>
                    <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_30 }}>
                            Khoa<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_30 }}>
                            Phòng<span style={styles.hr}></span>
                        </div>
                        <div style={{ ...styles.firstLineLetter, ...styles.w_40 }}>
                            Chẩn đoán<span style={styles.hr}></span>
                        </div>
                    </div>
                    <table style={{ ...styles.w_100, borderCollapse: "collapse", marginTop: "15px" }}>
                        <thead>
                            <tr>
                                <td rowSpan={2} style={{ border: "1px solid", textAlign: "center" }}><strong>NGÀY GIỜ</strong></td>
                                <td rowSpan={2} style={{ border: "1px solid", textAlign: "center" }}><strong>DIỄN BIẾN BỆNH</strong></td>
                                <td colSpan={2} style={{ border: "1px solid", textAlign: "center" }}><strong>Y LỆNH ĐIỀU TRỊ</strong></td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid", textAlign: "center" }}><strong>THUỐC VÀ PHƯƠNG PHÁP ĐIỀU TRỊ</strong></td>
                                <td style={{ border: "1px solid", textAlign: "center" }}><strong>HẾ ĐỘ DD, CHĂM SÓC</strong></td>
                            </tr>
                        </thead>
                        <thead>
                            {[...Array(25)].map((_, index) => (
                                <tr key={index}>
                                    <td style={{ border: "1px solid", height: "25px" }}></td>
                                    <td style={{ border: "1px solid", height: "25px" }}></td>
                                    <td style={{ border: "1px solid", height: "25px" }}></td>
                                    <td style={{ border: "1px solid", height: "25px" }}></td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </section>
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

export default BenhAnYHocCoTruyen