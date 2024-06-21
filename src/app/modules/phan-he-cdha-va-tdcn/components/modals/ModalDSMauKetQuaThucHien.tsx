import { useCallback, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import InputSearch from '../../../component/InputSearch';
import CombinedTable from '../../../component/table/combined-table/CombinedTable';
import { columnMauDSKetQuaThucHien } from '../../constants/Columns';
import { fakeListMauDSKetQuaThucHien } from '../../models/FakeData';

type Props = {
    handleClose: () => void
    selectMauKetQua: (row: any) => void
}

export default function ModalDSMauKetQuaThucHien({ handleClose, selectMauKetQua }: Props) {
    const [selectedRow, setSelectedRow] = useState<any>();
    const updatePageData = async () => { };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => { };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { };

    const getRowsSelected = useCallback((row: any) => {
        setSelectedRow(row)
    }, [])

    return (
        <Modal show animation centered className="dialog-background" size='lg' onHide={handleClose}>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Chọn mẫu kết quả dịch vụ
                </Modal.Title>
                <button
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
                <InputSearch
                    handleChange={handleChange}
                    handleSearch={updatePageData}
                    handleKeyDown={handleKeyDown}
                    placeholder="Tìm kiếm"
                    type="text"
                    className="mb-2"
                />
                <CombinedTable
                    data={fakeListMauDSKetQuaThucHien}
                    singleSelectTable
                    getRowsSelected={getRowsSelected}
                    userColumns={columnMauDSKetQuaThucHien}
                    minHeight={250}
                />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
                <Button
                    className="btn-fill"
                    type="submit"
                    onClick={() => {
                        selectMauKetQua(selectedRow);
                    }}
                >
                    <span>Lưu</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}