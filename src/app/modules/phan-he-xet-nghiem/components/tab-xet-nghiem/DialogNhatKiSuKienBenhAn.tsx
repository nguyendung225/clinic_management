import { Formik } from "formik";
import { Col, Modal, Row } from "react-bootstrap";
import InputSearch from './../../../component/InputSearch';
import CombinedTable from "../../../component/table/combined-table/CombinedTable";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

type Props = {
    handleCloseDialog: () => void;
};

const DialogNhatKiSuKienBenhAn = (props: Props) => {
    const { handleCloseDialog } = props;

    const mayCLSColumn = [
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"STT"}
                    className='text-center min-w-50px p-2 border-x'
                />
            ),
            id: 'stt',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={+props.row.id + 1}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Thời gian"}
                    className='text-center min-w-125px p-2 border-x'
                />
            ),
            id: 'thoiGian',
            accessor: "thoiGian",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.thoiGian}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Mã người dúng"}
                    className='text-center min-w-50px p-2 border-x'
                />
            ),
            id: 'maNguoiDung',
            accessor:"maNguoiDung",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.maNguoiDung}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Người dùng"}
                    className='text-center text-white min-w-50px p-2 border-x'
                />
            ),
            id: 'nguoidung',
            accessor:"nguoiDung",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.nguoiDung}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Nội dung"}
                    className='text-center text-white min-w-50px p-2 border-x'
                />
            ),
            id: 'noiDung',
            accessor:"noiDung",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.noiDung}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"PR_ID"}
                    className='text-center text-white min-w-50px p-2 border-x'
                />
            ),
            id: 'PR_ID',
            accessor:"PR_ID",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.PR_ID}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"PR_VP_ID"}
                    className='text-center text-white min-w-50px p-2 border-x'
                />
            ),
            id: 'PR_VP_ID',
            accessor:"PR_VP_ID",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.PR_VP_ID}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"MR_ID"}
                    className='text-center text-white min-w-50px p-2 border-x'
                />
            ),
            id: 'MR_ID',
            accessor:"MR_ID",
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    tableProps={props}
                    className="text-center border spaces py-4 h-100"
                    data={props.row.original.MR_ID}
                />
            },
        },
    ];


    const dsMayCLS = [
        {
            thoiGian:"11:20 27/06/2021",
            maNguoiDung:"1",
            nguoiDung:"Quản trị hệ thông",
            noidung:"Sửa thời gian trả kết quả xét nghiệm",
            PR_ID:"198",
            PR_VP_ID:"203",
            MR_ID:"11"
        
        },
        {
            thoiGian:"11:21 28/02/2024",
            maNguoiDung:"2",
            nguoiDung:"Quản trị hệ thống",
            noidung:"Sửa thời gian lấy mẫu",
            PR_ID:"198",
            PR_VP_ID:"203",
            MR_ID:"11"
        
        }
    ]
    

    

    return (
        <Modal show={true} centered onHide={handleCloseDialog} size="lg" >
            <Modal.Header closeButton className="py-5 header-modal">
                <Modal.Title className="title-dialog-color">
                    Lịch sử thay đổi hồ sơ bệnh án
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{}}
                onSubmit={(values) => {
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Modal.Body className="py-4">
                            <Row className="gap-4">
                                <Col>
                                    <div className="flex align-items-center">
                                        <label className="text-nowrap m-0 me-3">
                                            Từ ngày
                                        </label>
                                        <input className="form-control customs-input" type="date" />
                                    </div>

                                </Col>
                                <Col>
                                    <div className="flex align-items-center">
                                        <label className="text-nowrap m-0 me-3">
                                            Đến ngày
                                        </label>
                                        <input className="form-control customs-input" type="date" />
                                    </div>
                                </Col>
                                <Col>
                                    <InputSearch handleChange={() => { }} placeholder="Tìm kiếm" />
                                </Col>
                                <Col xs={12} >
                                    <CombinedTable
                                        data={dsMayCLS}
                                        userColumns={mayCLSColumn}
                                    />
                                </Col>

                            </Row>

                        </Modal.Body>
                    </form>
                )}
            </Formik>
        </Modal>
    );
};

export default DialogNhatKiSuKienBenhAn;
