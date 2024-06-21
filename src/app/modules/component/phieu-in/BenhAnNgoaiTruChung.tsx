import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import { HoiBenh, KyTenCuoiTrang, ThongTinHanhChinh, TongKetBenhAn, UnderLineDots } from "./components";

type Props = {
    show: boolean;
    handleClose: () => void;
};

const BenhAnNgoaiTruChung = (props: Props) => {
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
                <div style={styles.d_flex_j_between}>
                    <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Sở y tế:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Bệnh viện:<span style={styles.hr}></span></div>
                    </div>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                        <div style={styles.titleFrom}>BỆNH ÁN NGOẠI TRÚ</div>
                        <div style={{ ...styles.position.relative, fontWeight: "bold", lineHeight: "25px" }}>KHOA: <span style={{ ...styles.hr, ...styles.w_80 }}></span></div>
                    </div>
                    <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số ngoại trú:<span style={styles.hr}></span></div>
                        <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số lưu trữ:<span style={styles.hr}></span></div>
                    </div>
                </div>
                <ThongTinHanhChinh />
                <section>
                    <div style={{ ...styles.firstLineLetter, fontWeight: "bold", lineHeight: "25px" }}>
                        II. LÝ DO VÀO VIỆN:<span style={styles.hr}></span>
                    </div>
                </section>
                <HoiBenh />
                <section>
                    <div style={styles.position.relative}>
                        <div><strong>IV. KHÁM BỆNH:</strong></div>
                        <div style={{ position: "absolute", width: "170px", top: "0", right: "0", background: "#fff", padding: "4px", border: "1px solid", zIndex: "1" }}>
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
                    <UnderLineDots lineNumber={3} />
                    <div style={styles.firstLineLetter}>
                        <strong>3. Tóm tắt kết quả cận lâm sàng:</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={1} />
                    <div style={styles.firstLineLetter}>
                        <strong>4. Chẩn đoán ban đầu:</strong><span style={styles.hr}></span>
                    </div>
                    <div style={styles.firstLineLetter}>
                        <strong>5. Đã xử lý </strong><i>(Thuốc, chăm sóc)</i>: <span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={3} />
                    <div style={styles.firstLineLetter}>
                        <strong>6. Chẩn đoán khi ra viện:</strong><span style={styles.hr}></span>&nbsp;
                        <span style={styles.lastLetter}>
                            &nbsp; Mã &nbsp;
                            <span style={styles.box_square}></span>
                            <span style={styles.box_square}></span>
                            <span style={styles.box_square}></span>
                            <span style={styles.box_square}></span>
                        </span>
                    </div>
                </section>
                <KyTenCuoiTrang />
                <TongKetBenhAn />
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

export default BenhAnNgoaiTruChung;
