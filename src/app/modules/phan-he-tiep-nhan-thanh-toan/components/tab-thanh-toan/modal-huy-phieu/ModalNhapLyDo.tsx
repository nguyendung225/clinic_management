import { Button, Modal } from 'react-bootstrap'
import LabelRequired from '../../../../component/LabelRequired';
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2';
import TextField from '../../../../component/TextField';
import { LIST_HINH_THUC } from '../../fakeData';
import { useState } from 'react';
import { ObjectSelectAutocomplete } from '../../../models/PhanHeTiepNhanModel';
import { ConfirmDialog } from '../../../../component/ConfirmDialog';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalNhapLyDo = ({ show, handleCloseDialog }: Props) => {
  const [lyDo, setLyDo] = useState<string>("");
  const [hinhThucThanhToan, setHinhThucThanhToan] = useState<ObjectSelectAutocomplete | null>(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleChangeLyDo = (e: any) => {
    setLyDo(e.target.value);
  }

  const handleXacNhanHuyPhieu = () => {
    console.log(lyDo, hinhThucThanhToan);
    setOpenConfirmDialog(true);
  }

  const handleOnYesClick = () => {
    setOpenConfirmDialog(false);
  }

  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header className="py-4" closeButton>
        <Modal.Title>
          Lý do hủy phiếu
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TextField
          as="textarea"
          name="lyDoHuyPhieu"
          rows={4}
          value={lyDo || ""}
          onChange={(e: any) => handleChangeLyDo(e)}
        />
        <div className="spaces width-100 d-flex mt-5">
          <LabelRequired label="Hình thức thanh toán" className="min-w-125px" />
          <AutocompleteV2
            options={LIST_HINH_THUC}
            value={hinhThucThanhToan || null}
            name="gender"
            onChange={selectOption => setHinhThucThanhToan(selectOption)}
            className="autocomplete-custom-tiep-nhan radius spaces width-40 h-25"
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="py-3">
        <Button className="btn-fill min-w-50px" onClick={handleXacNhanHuyPhieu}>
          Lưu
        </Button>
      </Modal.Footer>

      <ConfirmDialog
        show={openConfirmDialog}
        yes="Đồng ý" title="Thông báo"
        message="Đã duyệt thanh toán!"
        onYesClick={handleOnYesClick}
        onCloseClick={() => setOpenConfirmDialog(false)}
      />
    </Modal>
  )
}

export default ModalNhapLyDo