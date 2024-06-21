import { Button, Modal } from 'react-bootstrap';
import { Column } from 'react-table';
import InputSearch from '../../../../component/InputSearch';
import LabelRequired from '../../../../component/LabelRequired';
import TextValidator from '../../../../component/TextValidator';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalChonPhong = ({ show, handleCloseDialog }: Props) => {

  const dsPhongColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số phòng"}
          className="text-center spaces W-100"
        />
      ),
      id: "soPhong",
      Cell: ({ ...props }) => (
        <TableCustomCell data={props?.row?.original?.soPhong} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên phòng"}
          className="text-center"
        />
      ),
      id: "tenPhong",
      Cell: ({ ...props }) => (
        <TableCustomCell data={props?.row?.original?.tenPhong} />
      ),
    },
  ]

  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>
          Chọn phòng
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputSearch handleChange={() => { }} />

        <TableCustom columns={dsPhongColumn} data={[]}/>
      </Modal.Body>

      <Modal.Footer className='justify-content-between py-2'>
        <div className='d-flex'>
          <LabelRequired label='Ngày thực hiện:' className='min-w-100px' />
          <TextValidator type="date" />
        </div>

        <Button className='btn-fill'>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalChonPhong