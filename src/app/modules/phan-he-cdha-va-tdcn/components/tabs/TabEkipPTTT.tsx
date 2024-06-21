import { useState } from 'react';
import { Column } from 'react-table';
import Autocomplete from '../../../component/AutocompleteObject';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { LIST_NHAN_VIEN, fakeDataEkip } from '../../models/FakeData';
import { IEkip } from '../../models/ModelsPhanHeCDHAVaTDCN';
import { ObjectSelectAutocomplete } from '../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel';

type Props = {}

export default function TabEkipPTTT({ }: Props) {
    const [listNhanVien, setListNhanVien] = useState<IEkip[]>(fakeDataEkip)

    const handleSelectNhanVien = (index: number, option: ObjectSelectAutocomplete) => {
        const newArr = listNhanVien?.map((item, indexNhanVien) => {
            if (index === indexNhanVien) {
                return { ...item, nhanVien: option }
            } else {
                return item;
            }
        })
        setListNhanVien(newArr)
    }

    const EKipPTTT: ReadonlyArray<Column<any>> = [
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    className='text-center spaces W-40'
                    title={"STT"}
                />
            ),
            id: 'stt',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className='text-center'
                    data={+props.row.id + 1}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    className='text-center'
                    title={"Vai trò"}
                />
            ),
            id: 'vaiTro',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    data={props?.row?.original?.vaiTro}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    className='text-center min-w-250px'
                    title={"Nhân viên"}
                />
            ),
            id: 'nhanVien',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    data={
                        <div>
                            <Autocomplete
                                name='nhanVien'
                                value={props?.row?.original?.nhanVien || null}
                                options={LIST_NHAN_VIEN}
                                onChange={(option) => handleSelectNhanVien(props?.row?.index, option)}
                            />
                        </div>
                    }
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    className='text-center min-w-100px'
                    title={"Chi trả"}
                />
            ),
            id: 'chiTra',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    data={props?.row?.original?.chiTra}
                />
            },
        },
    ];
    return (
        <>
            <TableCustom
                className='h-100'
                data={listNhanVien}
                columns={EKipPTTT}
            />
        </>
    )
}