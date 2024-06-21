import { HeaderPhieuIn, HoiBenh, KyTenCuoiTrang, ThongTinHanhChinh, TongKetBenhAn, UnderLineDots } from "./components";
import { styles } from "./constant";
import { Button, Modal } from "react-bootstrap";


type Props = {
    show: boolean;
    handleClose: () => void;
}

const BenhAnRangHamMat = (props: Props) => {
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
                <HeaderPhieuIn title="BỆNH ÁN NGOẠI TRÚ" subTitle="CHUYÊN KHOA RĂNG HÀM MẶT" />
                <ThongTinHanhChinh />
                <section>
                    <div style={{ ...styles.firstLineLetter, ...styles.mainContent}}>
                        II. LÝ DO VÀO VIỆN:<span style={styles.hr}></span>
                    </div>
                </section>
                <HoiBenh />
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
                    <UnderLineDots lineNumber={4}/>
                    <div style={styles.firstLineLetter}>
                        <strong>2. Bệnh chuyên khoa: </strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={12} />
                    <div style={{...styles.firstLineLetter, marginTop: "100px"}}>
                        <strong>3. Hình vẽ mô tả tổn thương khi vào viện:</strong>
                    </div>
                    <div style={{...styles.d_flex, justifyContent: "space-around", alignItems: "flex-end", height: "300px"}}>
                        <div>Phải</div>
                        <div>Thẳng</div>
                        <div> Trái </div>
                        <div>Hàm trên và Họng </div>
                        <div> Hàm dưới</div>
                        <div>Phân loại khe hở <br/> môi vòm miệng</div>
                    </div>
                    <div style={{float: "right"}}>
                        1 và 4 là khe hở môi <br/>
                        2 và 5 là khe hở xương ổ răng <br/>
                        3 và 6 là khe hở cung hàm <br/>
                        7 và 8 là khe hở vòng miệng cứng <br/>
                        9 là khe hở vòng miệng mềm
                    </div>
                    <div style={styles.firstLineLetter}>
                        <strong>4. Tóm tắt bệnh án:</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={6} />
                    <div style={styles.firstLineLetter}>
                        <strong>5. Chẩn đoán của khoa khám bệnh:</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={3} />
                    <div style={styles.firstLineLetter}>
                        <strong>6. Đã xử lý của tuyến dưới:</strong><span style={styles.hr}></span>
                    </div>
                    <UnderLineDots lineNumber={8} />
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
}

export default BenhAnRangHamMat