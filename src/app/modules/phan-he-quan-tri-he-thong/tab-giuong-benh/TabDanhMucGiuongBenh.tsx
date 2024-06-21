import { useState } from 'react'
import { Button } from 'react-bootstrap'
import DanhMucGiuongBenhDialog from '../modals/modal-giuong-benh/ModalGiuongBenh'
import { GiuongBenhContext } from '../contexts/TabGiuongBenhContext'
import { IGiuongBenh } from '../models/ModelGiuongBenh'
import { columns } from './TabGiuongBenhColumns'
import DialogConfirmDelete from '../../component/dialog-confirm-delete/DialogConfirmDelete'
import { TableCustom } from '../../component/table/table-custom/TableCustom'

type Props = {}

const data: IGiuongBenh[] = [
    {
        department: {
            id: "2",
            name: "Khoa cấp cứu"
        },
        room: {
            id: "2",
            name: "Phòng mổ"
        },
        maGiuong: "G001",
        tenGiuong: "Giường mổ",
        giaGiuong: "200.000đ",
        namGhepToiDa: 1,
    },
    {
        department: {
            id: "3",
            name: "Khoa điều dưỡng"
        },
        room: {
            id: "1",
            name: "Phòng khám bệnh"
        },
        maGiuong: "G001",
        tenGiuong: "Giường khám bệnh",
        giaGiuong: "100.000đ",
        namGhepToiDa: 2,
    },
    {
        department: {
            id: "1",
            name: "Khoa khám bệnh"
        },
        room: {
            id: "1",
            name: "Phòng khám bệnh"
        },
        maGiuong: "G001",
        tenGiuong: "Giường khám bệnh",
        giaGiuong: "100.000đ",
        namGhepToiDa: 2,
    }
]

const DanhMucGiuongBenhTab = (props: Props) => {
    const [dataGiuongBenh, setDataGiuongBenh] = useState<IGiuongBenh>()
    const [shouldOpenDMGBDialog, setShouldOpenDMGBDialog] = useState<boolean>(false);
    const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState<boolean>(false);

    const handleOpenDMGBDialog = (data?: IGiuongBenh) => {
        if (data) {
            setDataGiuongBenh(data);
        } else {
            setDataGiuongBenh(undefined)
        }
        setShouldOpenDMGBDialog(true);
    }

    const handleCloseDMGBDialog = () => {
        setShouldOpenDMGBDialog(false);
    }

    const handleOpenConfirmDeleteDialog = (data: IGiuongBenh) => {
        setShouldOpenConfirmDeleteDialog(true);
    }

    return (
        <GiuongBenhContext.Provider value={{ handleOpenDMGBDialog, handleOpenConfirmDeleteDialog }}>
            <div className="p-5 border bg-white">
                <Button className="btn-navy min-w-50px mb-4" onClick={()=>handleOpenDMGBDialog()}>
                     Thêm mới
                </Button>
                <TableCustom<IGiuongBenh>
                    data={data}
                    columns={columns}
                    // height='min-h-600px'
                />
                {
                    shouldOpenDMGBDialog && <DanhMucGiuongBenhDialog
                        handleClose={handleCloseDMGBDialog}
                        data={dataGiuongBenh}
                    />
                }
                {
                    shouldOpenConfirmDeleteDialog && <DialogConfirmDelete
                        handleDelete={() => {}}
                        dialogDelete={shouldOpenConfirmDeleteDialog}
                        setDialogDelete={setShouldOpenConfirmDeleteDialog}
                    />
                }
            </div>
        </GiuongBenhContext.Provider>
    )
}

export default DanhMucGiuongBenhTab