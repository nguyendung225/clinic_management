import { Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';

import LabelRequired from '../../../component/LabelRequired';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import TextValidator from '../../../component/TextValidator';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

type Props = {}

export default function TabBenhAnPTTT({ }: Props) {
    const EKipPTTT: ReadonlyArray<Column<any>> = [
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"STT"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'stt',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="text-center px-3 spaces line-height-40"
                    data={+props.row.id + 1}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Dịch vụ"}
                    className='col-4 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'tenDichVu',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="text-center px-3 spaces line-height-40"
                    data={props.row.original.tenDichVu}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Kết quả"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'soLuong',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="text-center px-3 spaces line-height-40"
                    data={props.row.original.soLuong}
                />
            },
        },
    ];
    return (
        <>
            <Row className='mt-2'>
                <Col xs={12}>
                    <LabelRequired
                        label="Tóm tắt bệnh sử"
                    />
                    <TextValidator
                        name="dienBienBenhVaTrieuChung"
                        as='textarea'
                        rows={4}
                    />
                </Col>
                <Col className='mt-4 text-lable-input' xs={12}>Kết quả cận lâm sàng</Col>
                <Col xs={12}>
                    <TableCustom<any>
                        data={[]}
                        columns={EKipPTTT}
                        className='mt-5'
                        minHeight={250}
                    />
                </Col>
            </Row>
        </>
    )
}