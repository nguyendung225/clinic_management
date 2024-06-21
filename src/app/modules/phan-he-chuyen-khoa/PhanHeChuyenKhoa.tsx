import { useEffect, useState } from 'react'
import { Button, Col, FormCheck, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { KTSVG } from '../../../_metronic/helpers'
import Autocomplete from '../component/AutocompleteObject'
import { ConfirmDialog } from '../component/ConfirmDialog'
import LabelRequired from '../component/LabelRequired'
import ModalPhieuIn from '../component/ModalPhieuIn'
import Menu from "../component/menu/Menu"
import { stylePrint } from '../component/phieu-in/constant'
import { trangThaiBenhNhanCDHA } from '../phan-he-cdha-va-tdcn/constants/Constants'
import { LIST_DOI_TUONG_TIEP_NHAN } from '../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan'
import TableBenhNhan from './components/TableBenhNhan'
import TableDichVu from './components/TableDichVu'
import PhieuInKetQua from './components/phieu-in/PhieuInKetQua'
import { HUY } from './constants/PhanHeChuyenKhoaConstants'

type Props = {}

const PhanHeChuyenKhoa = (props: Props) => {
  const [selectedRow, setSelectedRow] = useState<any>();
  const [batDauThucHien, setBatDauThucHien] = useState(false);
  const [traKetQua, setTraKetQua] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [noiDungXacNhan, setNoiDungXacNhan] = useState("");
  const [openPhieuIn, setOpenPhieuIn] = useState(false);

  useEffect(() => {
    selectedRow?.[0]?.trangThai && handleShowButton()
  }, [selectedRow?.[0]?.trangThai])

  const handleClickBatDauThucHien = () => {
    setBatDauThucHien(true);
    toast.success("Bắt đầu thực hiện thành công!")
  }

  const handleTraKetQua = () => {
    setTraKetQua(true);
    toast.success("Trả kết quả thành công!")
  }

  const handleOpenConfirmDialog = (noiDung: string) => {
    setOpenConfirmDialog(true);
    setNoiDungXacNhan(noiDung);
  }

  const handleClickHuyThucHien = () => {
    noiDungXacNhan === HUY.THUC_HIEN ?
      setBatDauThucHien(false) : setTraKetQua(false)
    setOpenConfirmDialog(false);
    toast.success(`Hủy ${noiDungXacNhan} thành công!`)
  }

  const handleInPhieuKetQua = () => {
    setOpenPhieuIn(true);
  }

  const handleShowButton = () => {
    const options = {
      [trangThaiBenhNhanCDHA.daTraKetQua.code]: () => {
        setTraKetQua(true);
        setBatDauThucHien(true)
      },
      [trangThaiBenhNhanCDHA.dangThucHien.code]: () => {
        setTraKetQua(false);
        setBatDauThucHien(true)
      },
      [trangThaiBenhNhanCDHA.choDenLuot.code]: () => {
        setTraKetQua(false);
        setBatDauThucHien(false)
      }
    }

    options[selectedRow?.[0]?.trangThai] && options[selectedRow?.[0]?.trangThai]();
  }

  const handleSelectOption = () => { }
  return (
    <div className="reception-list">
      <div className="reception__header spaces p-3 h-100">
        <Row className='border-bottom py-1'>
          <Col xs={12} className="d-flex align-items-center">
            <Menu
              handleSelectOption={handleSelectOption}
              listMenuItem={[]}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              } />

            <Menu
              handleSelectOption={handleSelectOption}
              listMenuItem={[]}
              menuLabel={<Button className='btn-fill spaces h-29 min-w-50px'>In</Button>}
            />

            <Button className="btn-fill ms-3">Màn hình chờ</Button>

            <div className="d-flex ms-3 min-w-300px">
              <LabelRequired label="Tìm theo" className='min-w-75px' />
              <Autocomplete
                className="autocomplete-custom-tiep-nhan h-26 pe-2 w-100"
                options={[]}
                name="timTheo"
              />
            </div>

            <div className='d-flex min-w-300px'>
              <LabelRequired label="Trạng thái" className='min-w-75px' />
              <Autocomplete
                className="autocomplete-custom-tiep-nhan h-26 pe-2 w-100"
                options={[]}
                name="trangThai"
              />
            </div>

            <FormCheck
              type="checkbox"
              label="Ngoại trú"
            />

            <FormCheck
              type="checkbox"
              label="Nội trú"
              className='ms-2'
            />

            <Button className="btn-fill mx-2">Tìm kiếm</Button>
          </Col>
        </Row>

        <Row className='h-100'>
          <Col xs={3} className='pe-0'>
            <TableBenhNhan setSelectedRow={setSelectedRow} selectedRow={selectedRow} />
            <Autocomplete
              className="autocomplete-custom-tiep-nhan h-26 w-100"
              options={[]}
              name="trangThai"
            />
          </Col>

          <Col className='border-start pt-1'>
            <Row>
              <Col xs={3} className='d-flex align-items-end pe-0'>
                <LabelRequired label='Số phiếu:' className='spaces min-w-100' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col xs={5} className='d-flex align-items-end spaces min-w-470 pe-0'>
                <LabelRequired label='Chẩn đoán:' className='spaces min-w-90' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col className='d-flex align-items-end'>
                <LabelRequired label='Ngày y lệnh:' className='spaces min-w-120' />
                <div className='dotted-bottom'>17:02 20/20/2000</div>
              </Col>
            </Row>

            <Row>
              <Col xs={3} className='d-flex align-items-end pe-0'>
                <LabelRequired label='Người chỉ định:' className='spaces min-w-100' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col xs={2} className='d-flex align-items-end spaces min-w-228'>
                <LabelRequired label='Nơi chỉ định:' className='spaces min-w-90' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col xs={3} className='d-flex align-items-end pe-0'>
                <LabelRequired label='Bắt đầu thực hiện:' className='spaces min-w-120' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col className='d-flex align-items-end'>
                <LabelRequired label='Người thực hiện:' className='spaces min-w-120' />
                <div className='dotted-bottom'></div>
              </Col>
            </Row>

            <Row>
              <Col xs={3} className='d-flex align-items-end pe-0'>
                <LabelRequired label='Nơi thực hiện:' className='spaces min-w-100' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col xs={2} className='d-flex align-items-end spaces min-w-228'>
                <LabelRequired label='Trả kết quả:' className='spaces min-w-90' />
                <div className='dotted-bottom'></div>
              </Col>

              <Col xs={3} className='d-flex align-items-end pe-0'>
                <LabelRequired label='Người trả kết quả:' className='spaces min-w-120' />
                <div className='dotted-bottom'></div>
              </Col>
            </Row>

            <Row className='spaces h-calc-vh-197 border-bottom mb-2'>
              <TableDichVu selectedRow={selectedRow} />
            </Row>

            {selectedRow?.[0]?.dsDichVu?.length > 0 &&
              <div className='d-flex justify-content-end py-2'>
                {(batDauThucHien && !traKetQua) &&
                  <>
                    <Button className='btn-fill me-2' onClick={() => handleOpenConfirmDialog(HUY.THUC_HIEN)}>Hủy thực hiện</Button>

                    <Button className='btn-fill me-2' onClick={handleTraKetQua}>Trả kết quả</Button>
                  </>
                }

                {!batDauThucHien && <Button className='btn-fill me-2' onClick={handleClickBatDauThucHien}>Bắt đầu thực hiện</Button>}

                {traKetQua &&
                  <>
                    <Button className='btn-fill me-2' onClick={() => handleOpenConfirmDialog(HUY.TRA_KET_QUA)}>Hủy trả kết quả</Button>

                    <Button className='btn-fill me-2' onClick={handleInPhieuKetQua}>In phiếu kết quả</Button>
                  </>
                }
              </div>
            }
          </Col>
        </Row>
      </div>

      <ConfirmDialog
        show={openConfirmDialog}
        close='Không' yes='Có'
        onYesClick={handleClickHuyThucHien}
        onCloseClick={() => setOpenConfirmDialog(false)}
        title='Xác nhận'
        message={`Bạn có chắc chắn muốn hủy ${noiDungXacNhan} phiếu này không?`}
      />

      <ModalPhieuIn
        show={openPhieuIn}
        handleCloseDialog={() => setOpenPhieuIn(false)}
        title='Phiếu kết quả'
        size='lg'
        stylePrint={stylePrint}
      >
        <PhieuInKetQua />
      </ModalPhieuIn>
    </div>
  )
}

export default PhanHeChuyenKhoa