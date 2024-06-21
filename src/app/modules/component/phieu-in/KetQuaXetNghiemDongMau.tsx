import { Button, Modal } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";

type Props = {
    show: boolean,
    handleClose: () => void,
}

const KetQuaXetNghiemDongMau = (props: Props) => {
    const { show, handleClose } = props;

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
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ textTransform: "uppercase" }}>
                        Sở y tế abc <br />
                        <strong>bệnh viện demo</strong>
                    </div>
                    <div>
                        <img src={toAbsoluteUrl('/media/images/Barcode.png')} alt='' height={40} />
                        <div>Số phiếu: <strong>XN231010.2</strong></div>
                        <div>Mã bệnh nhân: <strong>23000195</strong></div>
                        <strong><div>Barcode: <span>1111</span></div></strong>
                    </div>
                </div>
                <div style={{ margin: "15px 0" }}>
                    <h3 style={{ textTransform: "uppercase", textAlign: "center" }}>Phiếu kết quả xét nghiệm đông máu</h3>
                </div>
                <div style={{ lineHeight: "25px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "50%" }}>
                            <div style={{ display: "flex", justifyContent: "end", alignItems: "center", paddingRight: "50px" }}>
                                Thường: 
                                <svg style={{border: "1px solid", marginLeft: "8px"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <div>Họ tên người bệnh: <strong style={{ textTransform: "uppercase" }}>Trần Thị Thường Thường</strong></div>
                            <div>Địa chỉ: <span style={{ textTransform: "uppercase" }}>Nghệ An</span></div>
                            <div>Khoa: <strong>Khoa Khám Bệnh</strong></div>
                            <div>Bác sĩ chỉ định: <strong>Quản trị hệ thống</strong></div>
                        </div>
                        <div style={{ width: "50%" }}>
                            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", paddingRight: "50px" }}>
                                Cấp cứu: <div style={{ width: "20px", height: "20px", border: "1px solid", marginLeft: "8px" }}></div>
                            </div>
                            <div>Ngày sinh: 20/10/2000 <span style={{ marginLeft: "80px" }}>Giới tính: Nữ</span></div>
                            <div>Số thẻ BHYT: </div>
                            <div>Phòng chỉ định: <strong>P218 - Khám Răng</strong></div>
                            <div>Thời gian chỉ định: <strong>10:17 10/10/2023</strong></div>
                        </div>
                    </div>
                    <div>Phòng: </div>
                    <div>Giường: </div>
                    <div>Chẩn đoán: Y61-Dị vật nhỡ để quên trong cơ thể trong khi chăm sóc nội, ngoại khoa , Y61-Dị vật nhỡ để quên trong cơ thê trong khi chăm sóc nội, ngoại khoa</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "50%" }}>Người lấy mẫu: Quản trị hệ thống</div>
                        <div style={{ width: "50%" }}>Người thực hiện: Quản trị hệ thống</div>
                    </div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid", padding: "4px" }}>Tên xét nghiệm</th>
                            <th style={{ border: "1px solid", padding: "4px" }}>Kết quả</th>
                            <th style={{ border: "1px solid", padding: "4px" }}>GT Tham chiếu</th>
                            <th style={{ border: "1px solid", padding: "4px" }}>Đơn vị</th>
                            <th style={{ border: "1px solid", padding: "4px" }}>Máy XN/PPXN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5} style={{ border: "1px solid", padding: "4px" }}><strong>Động máu</strong></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid", padding: "4px" }}>Thời gian máu chảy phương thức Duke</td>
                            <td style={{ border: "1px solid", padding: "4px" }}></td>
                            <td style={{ border: "1px solid", padding: "4px" }}></td>
                            <td style={{ border: "1px solid", padding: "4px" }}></td>
                            <td style={{ border: "1px solid", padding: "4px" }}></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
                    <div style={{ width: "50%", textAlign: "center" }}>
                        <div><i>Giờ: 11:34 Ngày 10 tháng 10 năm 2023</i></div>
                        <div style={{ textTransform: "uppercase" }}>
                            <strong>
                                TRƯỜNG KHOA/TL. TRƯỜNG KHOA
                                <br />XÉT NGHIỆM
                            </strong>
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
}

export default KetQuaXetNghiemDongMau;