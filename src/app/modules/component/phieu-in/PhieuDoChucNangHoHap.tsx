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
    title: "PHIẾU ĐO CHỨC NĂNG HÔ HẤP",
    maSo: "26/BV-01"
}

const tableData = [
    { rowData: "- Dự kiến" },
    { rowData: "- Thực tế" },
    { rowData: "- Tỷ lệ giảm %" },
    { rowData: "-" },
    { rowData: "-" },
]

const PhieuDoChucNangHoHap = (props: Props) => {
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

                <ThongTinChung isPhieuDoChucNangHoHap/>

                <table style={{ width: "100%", margin: "10px 0", border: "1px solid #000", borderCollapse: "collapse" }}>
                    <tr>
                        <th style={{textAlign: "center", border: "1px solid #000"}}></th>
                        <th style={{textAlign: "center", border: "1px solid #000"}}>DUNG TÍCH SỐNG</th>
                        <th style={{textAlign: "center", border: "1px solid #000"}}>DT.THỞ RA TỐI ĐA/GIÂY</th>
                        <th style={{textAlign: "center", border: "1px solid #000"}}>TỈ SỐ TIFFENAU</th>
                        <th style={{textAlign: "center", border: "1px solid #000"}}>THÔNG KHÍ PHÚT/ TỐI ĐA</th>
                        <th style={{textAlign: "center", border: "1px solid #000"}}>KHÍ DỰ TRỮ</th>
                    </tr>
                    {tableData?.map(item => (
                        <tr style={{borderBottom: "1px dotted #000"}}>
                            <td style={{ padding: "2px 4px",width: "15%"}}>{item?.rowData}</td>
                            <td style={{ padding: "2px 4px",borderLeft: "1px solid #000"}}></td>
                            <td style={{ padding: "2px 4px",borderLeft: "1px solid #000"}}></td>
                            <td style={{ padding: "2px 4px",borderLeft: "1px solid #000"}}></td>
                            <td style={{ padding: "2px 4px",borderLeft: "1px solid #000"}}></td>
                            <td style={{ padding: "2px 4px",borderLeft: "1px solid #000"}}></td>
                        </tr>
                    ))}
                    
                </table>

                <div style={styles.d_flex_j_between}>
                    <KyTen title="Bác sĩ điều trị" />
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

export default PhieuDoChucNangHoHap;
