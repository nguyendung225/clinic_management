import { Button, Modal } from 'react-bootstrap';
import { stylePrint, styles } from '../../../../component/phieu-in/constant';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalPhieuKhamBenh = ({ show, handleCloseDialog }: Props) => {

  const handlePrint = () => {
    let content = document.getElementById("print-contents");
    let pri = (document.getElementById("ifmcontentstoprint") as any).contentWindow;
    pri.document.open();

    pri.document.write(stylePrint);
    pri.document.write((content as HTMLElement).innerHTML);

    pri.document.close();
    pri.focus();
    pri.print();
  };

  return (
    <div>
      <Modal centered show={show} size="sm" onHide={handleCloseDialog}>
        <Modal.Header className="py-4" closeButton>
          <Modal.Title>
            Phiếu khám bệnh
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
          <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.paddingBottom._10px }}>
            <div>Mã BN: 24000025</div>
            <div>Mã LK: 188</div>
          </div>

          <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.paddingBottom._20px }}>
            <div>BỆNH VIỆN ĐK VÂN ĐÌNH</div>
            <div>ĐIỆN THOẠI: 1900571238</div>
          </div>

          <div style={{ ...styles.textAlign.center, ...styles.fontBold }}>
            <div style={{ ...styles.borderBottom, ...styles.fontSize._18px }}>PHIẾU KHÁM BỆNH</div>
            <div style={{ ...styles.fontSize._24px }}>P317 - TAI MŨI HỌNG</div>
            <div style={{ ...styles.fontSize._24px }}>STT: 3</div>
          </div>

          <div style={{ ...styles.textAlign.center, ...styles.fontSize._18px, ...styles.paddingBottom._10px }}>Khám tai mũi họng</div>

          <div style={{ ...styles.paddingBottom._10px }}>
            <div style={{ ...styles.fontBold }}>TRẦN BÚN - 2000</div>
            <div>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
            <div>Giới tính: Nam</div>
            <div style={{ ...styles.paddingBottom._20px }}>Thẻ BHYT: Yêu cầu</div>
            <div>Khám ngày: 15:30 09/01/2024</div>
            <div style={{ ...styles.fontBold, ...styles.fontSize._12px }}>Quét mã QR để kiểm tra trạng thái khám bệnh</div>
          </div>

          <div style={{ ...styles.width._120px, ...styles.height._120px, ...styles.marginLeft._10px }}>
            <img style={{ ...styles.w_100 }} src="/media/images/qrCode.png" alt="" />
          </div>

          <div style={{ ...styles.textAlign.center, ...styles.fontBold, ...styles.marginTop._10px }}>Người ĐT: Quản trị hệ thống</div>
        </Modal.Body>

        <Modal.Footer className="py-3">
          <Button className='btn-outline' onClick={handleCloseDialog}>
            Hủy
          </Button>

          <Button className='btn-fill' onClick={handlePrint}>In phiếu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalPhieuKhamBenh