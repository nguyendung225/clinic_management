import React from "react"
import {Button, Modal} from "react-bootstrap"

type Props = {
  dialogDelete: boolean
  setDialogDelete: React.Dispatch<React.SetStateAction<boolean>>
  handleDelete: () => void
}

const DialogConfirmDelete = (props: Props) => {
  const {dialogDelete, setDialogDelete, handleDelete} = props
  return (
    <Modal
      centered
      show={dialogDelete}
      onHide={() => setDialogDelete(false)}
      style={{backgroundColor: "rgb(171, 173, 175,0.5)"}}
    >
      <Modal.Header closeButton className="py-5 header-modal">
        <Modal.Title>
          <div>Xác nhận xóa</div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-4">
        <h5>Bạn có chắc chắn muốn xóa không?</h5>
      </Modal.Body>
      <Modal.Footer className="flex flex-middle flex-center py-1">
        <Button className="btn-fill min-w-50px" onClick={handleDelete}>
          Xác nhận
        </Button>
        <Button className="btn-outline" onClick={() => setDialogDelete(false)}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DialogConfirmDelete
