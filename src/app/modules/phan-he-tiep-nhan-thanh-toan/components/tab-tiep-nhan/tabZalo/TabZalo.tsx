import LabelRequired from '../../../../component/LabelRequired'
import TextField from '../../../../component/TextField'
import { Button } from 'react-bootstrap'

type Props = {}

const TabZalo = (props: Props) => {
  return (
    <div className="tableKhamBenh">
      <div className="spaces width-40 d-flex align-items-start">
        <LabelRequired label="ID người dùng Zalo" className='min-w-125px pt-1'/>
        <div>
        <TextField
          
          name="idZalo"
          labelClassName="ms-0 pe-1 min-w-75px"
        />

        <div className="d-flex mt-2 justify-content-end">
          <div>
            <Button className="btn-fill">
              <i className="bi bi-search"></i>
              <span>Tìm ID</span>
            </Button>
          </div>

          <div className="ps-6">
            <Button className="btn-fill">
              <i className="fa-solid fa-circle-info"></i>
              <span>Kiểm tra ID</span>
            </Button>
          </div>

          <div className="ps-6">
            <Button className="btn-fill">
              <i className="fa-solid fa-floppy-disk"></i>
              <span>Lưu</span>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TabZalo