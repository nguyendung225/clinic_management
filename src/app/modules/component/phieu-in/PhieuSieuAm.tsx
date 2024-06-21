import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import { HoiBenh, KyTenCuoiTrang, ThongTinHanhChinh, TongKetBenhAn, UnderLineDots } from "./components";
import HeaderPhieuInV2 from "./components/HeaderPhieuInV2";
import ThongTinChung from "./components/ThongTinChung";
import KyTen from "./components/KyTen";
import CustomTextarea from "../custom-textarea/CustomTextarea";

type Props = {
    show: boolean;
    handleClose: () => void;
};

const data = {
    title: "PHIẾU SIÊU ÂM",
    maSo: "22/BV-01"
}


const PhieuSieuAm = (props: Props) => {
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

                <ThongTinChung isPhieuSieuAm />

                <div style={{ ...styles.d_flex_j_between, marginTop: "10px" }}>
                    <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    </div>
                    <KyTen title="Bác sĩ điều trị" />
                </div>

                <div>
                    <table style={{ width: "100%", margin: "10px 0" }}>
                        <tr>
                            <th style={{ textAlign: "center", fontWeight: "bold", fontSize: "17px" }}>KẾT QUẢ SIÊU ÂM</th>
                        </tr>
                        <tr>
                            <td>
                                <div style={{display: "flex"}}>
                                    <div style={{flexGrow: "1"}}>
                                        <strong>1. Mô tả:</strong>
                                        <CustomTextarea rows={11} />
                                    </div>
                                    <div>
                                        <div style={{
                                            ...styles.d_flex,
                                            flexDirection: "column" as any,
                                            alignItems: "center",
                                            paddingLeft: "15px",
                                        }}>
                                            <strong style={{ fontSize: "16px", marginTop: "24px", marginBottom: "12px" }}>HÌNH ẢNH SIÊU ÂM</strong>
                                            <img src="" alt="" style={{
                                                width: "280px", height: "280px", objectFit: "center" as any
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>2. Kết luận:</strong>
                                <CustomTextarea rows={4}/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={styles.d_flex_j_between}>
                    <div style={{ ...styles.w_30, ...styles.overflow.hidden, marginLeft: "10px" }}>
                        <div style={{ ...styles.textAlign.center, marginTop: "15px" }}><strong style={{ fontSize: "16px", textDecoration: "underline", textUnderlineOffset: "2px" }}>Lời dặn của BS chuyên khoa:</strong></div>
                    </div>
                    <KyTen title="Bác sĩ chuyên khoa" />
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

export default PhieuSieuAm;
