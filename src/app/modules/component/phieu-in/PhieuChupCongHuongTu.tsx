import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import HeaderPhieuInV2 from "./components/HeaderPhieuInV2";
import ThongTinChung from "./components/ThongTinChung";
import CustomTextarea from "../custom-textarea/CustomTextarea";
import KyTen from "./components/KyTen";

type Props = {
    show: boolean;
    handleClose: () => void;
};

const data = {
    title: "PHIẾU CHỤP CỘNG HƯỞNG TỪ",
    maSo: "21/BV-01"
}

const PhieuChupCongHuongTu = (props: Props) => {
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
                <HeaderPhieuInV2 data={data} />

                <ThongTinChung 
                    isPhieuChupCongHuongTu
                />

                <div style={styles.d_flex_j_between}>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    </div>
                    <KyTen title="Bác sĩ điều trị"/>
                </div>

                <table style={{ width: "100%", margin: "10px 0" }}>
                    <tr>
                        <th style={{ textAlign: "center", fontWeight: "bold", fontSize: "17px" }}>KẾT QUẢ</th>
                    </tr>
                    <tr>
                        <td>
                            <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                                <div style={{ ...styles.w_100 }}>
                                    <span
                                        className="mb-6px"
                                        style={{ marginBottom: "-2px", width: "200px" }}>
                                            <strong>1. Mô tả:</strong>
                                        </span>
                                    <CustomTextarea
                                        disabled
                                        rows={12} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                                <div style={{ ...styles.w_100 }}>
                                    <span
                                        className="mb-6px"
                                        style={{ marginBottom: "-2px", width: "200px" }}>
                                        <strong>2. Kết luận:</strong>
                                    </span>
                                    <CustomTextarea
                                        disabled
                                        rows={4} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <div style={styles.d_flex_j_between}>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden, marginLeft: "10px" }}>
                        <div style={{ ...styles.textAlign.center, marginTop: "15px" }}><strong style={{ fontSize: "16px", textDecoration: "underline", textUnderlineOffset: "2px" }}>Lời dặn của BS chuyên khoa:</strong></div>
                    </div>
                    <KyTen title="Bác sĩ chuyên khoa"/>
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

export default PhieuChupCongHuongTu;
