import { HeaderPhieuIn, KyTenCuoiTrang, ThongTinHanhChinh, UnderLineDots } from "./components";
import { styles } from "./constant";
import { Button, Modal } from "react-bootstrap";


type Props = {
    show: boolean;
    handleClose: () => void;
}

const BenhAnTaiMuiHong = (props: Props) => {
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
                <HeaderPhieuIn title="BỆNH ÁN NGOẠI TRÚ" subTitle="CHUYÊN KHOA TAI MŨI HỌNG" />
                <ThongTinHanhChinh />
                <section>
                    <div style={{ ...styles.firstLineLetter, ...styles.mainContent }}>
                        II. LÝ DO VÀO VIỆN:<span style={styles.hr}></span>
                    </div>
                </section>
                <section>
                    <div style={styles.mainContent}><strong>III. HỎI BỆNH:</strong></div>
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>1. Quá trình bệnh lý:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={6} />
                    <div>
                        <strong>2. Tiền sử bệnh:</strong>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Bản thân: <span style={styles.hr}></span>
                    </div>
                    <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                        + Gia đình: <span style={styles.hr}></span>
                    </div>
                </section>
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
                    <UnderLineDots lineNumber={4} />
                    <div style={styles.firstLineLetter}>
                        <strong>2. Khám chuyên khoa: </strong>
                    </div>
                    <div style={{ ...styles.d_flex, justifyContent: "space-around", marginTop: "130px" }}>
                        <div>Màng nhĩ phải</div>
                        <div>Màng nhĩ trái</div>
                        <div>Mũi trước</div>
                        <div>Mũi sau</div>
                    </div>
                    <UnderLineDots lineNumber={3} />
                    <div style={{height: "250px"}}></div>
                    <div style={{ ...styles.d_flex, justifyContent: "space-around"}}>
                        <div>Thanh quản</div>
                        <div>Họng</div>
                        <div>Cổ phải nghiêng</div>
                        <div>Cổ trái nghiêng</div>
                    </div>
                    <UnderLineDots lineNumber={5} />
                    <div style={styles.firstLineLetter}>
                        <strong>3. Chẩn đoán của phòng khám:</strong>
                    </div>
                    <UnderLineDots lineNumber={1} />
                </section>
                <section>
                    <div style={{ ...styles.firstLineLetter, ...styles.mainContent }}>
                        <strong>V. ĐÃ XỬ LÝ:</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={10} />
                </section>
                <KyTenCuoiTrang />
                <div style={{height: "250px"}}></div>
                <section style={{ marginTop: "100px" }}>
                    <div style={{ border: "2px solid" }}>
                        <div style={{ padding: "8px" }}>
                            <div>
                                <strong>VI. KẾT QUẢ ĐIỀU TRỊ</strong>
                            </div>
                            <div style={styles.firstLineLetter}>
                                <strong>1. Tình trạng toàn thân:</strong><span style={styles.hr}></span>
                            </div>
                            <UnderLineDots lineNumber={5} />
                            <div style={styles.firstLineLetter}>
                                <strong>2. Tại chỗ:</strong><span style={styles.hr}></span>
                            </div>
                            <UnderLineDots lineNumber={8} />
                            <div style={styles.firstLineLetter}>
                                <strong>3. Chẩn đoán ra viện:</strong><span style={styles.hr}></span>
                            </div>
                            <div style={{ ...styles.firstLineLetter, lineHeight: "25px" }}>
                                - Bệnh chính: <span style={styles.hr}></span>
                                <span style={styles.lastLetter}>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                </span>
                            </div>
                            <div style={{ ...styles.firstLineLetter, lineHeight: "25px" }}>
                                - Bệnh kèm theo <i>(nếu có)</i>: <span style={styles.hr}></span>
                                <span style={styles.lastLetter}>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                    <span style={styles.box_square}></span>
                                </span>
                            </div>
                            <div style={styles.firstLineLetter}>
                                <strong>4. Tiên lượng bệnh:</strong><span style={styles.hr}></span>
                            </div>
                            <UnderLineDots lineNumber={3} />
                            <div style={styles.mainContent}>
                                <strong>VII. NHỮNG CHỈ DẪN ĐIỀU TRỊ TIẾP TỤC</strong>
                            </div>
                            <UnderLineDots lineNumber={9} />
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
                                <div style={{padding: "6px"}}>
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
                    </div>
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

export default BenhAnTaiMuiHong