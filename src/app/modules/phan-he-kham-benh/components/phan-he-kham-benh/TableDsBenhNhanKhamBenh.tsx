import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { toast } from 'react-toastify';
import { AppContext } from '../../../appContext/AppContext';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { CODE, SELECTION_MODE } from '../../../utils/Constant';
import { formatTrangThaiBenhNhan } from '../../../utils/FormatUtils';
import { LOAI_DOI_TUONG_CONST, UU_TIEN, trangThaiBenhNhan } from '../../constants/BenhNhanConst';
import { INITIALVALUES } from '../../constants/KhamBenh';
import { IBenhNhan } from '../../models/DSBenhNhanKhamBenhModels';
import { getKhamBenh } from '../../services/KhamBenhService';
import { convertDataKhamBenh, resetDataKhamBoPhan, resetDataSinhHieu } from '../../utils/Utils';
import { fakeListBN } from '../FakeData';
import { ModalThongTinKhamBenh } from '../../modals/modal-thong-tin-kham-benh/ModalThongTinKhamBenh';
import { PhanHeTiepDonContext } from '../../contexts/PhanHeTiepDonContext';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

const TableDsBenhNhanKhamBenh = (props: any) => {
  const {setInfoBenhNhan} = props
  const { setBenhNhanInfo, benhNhanInfo, benhNhanList, setThongTinKhamBenh } = useContext(PhanHeTiepDonContext);
  const { setIsLoading } = useContext(AppContext);
  const [openModalThongTinKhamBenh, setOpenModalThongTinKhamBenh] = useState<Boolean>(false)
  
  useEffect(() => {
    handleSelectedBenhNhan(fakeListBN);
  },[])

  const handleSelectedBenhNhan = async (benhNhans: IBenhNhan[]) => {
    setInfoBenhNhan(benhNhans[0])
    setBenhNhanInfo(benhNhans[0]);
    try {
      let benhNhanInfo = benhNhans[0]
      let searchObject = {
        departmentId: benhNhanInfo?.departmentId,
        patientId: benhNhanInfo?.patientId,
        roomId: benhNhanInfo?.roomId,
        encounterId: benhNhanInfo?.encounterId,
      }

      if (benhNhanInfo) {
        setIsLoading(true);
        if (benhNhanInfo?.encounterId) {
          let { data } = await getKhamBenh(searchObject)
          if (CODE.SUCCESS === data?.code) {
            let TTKhamBenh = convertDataKhamBenh(data?.data)
            setBenhNhanInfo({
              ...benhNhanInfo,
              isKhamBenh: false,
              thongTinKhamBenh: TTKhamBenh
            });
            if (TTKhamBenh?.khamBoPhan) {
              setThongTinKhamBenh?.({ khamBoPhan: { ...TTKhamBenh?.khamBoPhan } })
            }
          }
        } else {
          setBenhNhanInfo({
            ...benhNhans[0],
            isKhamBenh: false,
            thongTinKhamBenh: {...INITIALVALUES}
          });
          resetDataKhamBoPhan();
          resetDataSinhHieu();
        }
      } else {
        setBenhNhanInfo({
          isKhamBenh: false,
          thongTinKhamBenh: {...INITIALVALUES}
        } as IBenhNhan);
        resetDataKhamBoPhan();
        resetDataSinhHieu();
      }
      
    } catch (error) {
      toast.error("Có lỗi xảy ra")
    } finally {
      setIsLoading(false);
    }
  };
  const DsBenhNhanColumn: ReadonlyArray<Column<IBenhNhan>> = [
    {
      Header: (props) => (
          <TableCustomHeader<IBenhNhan>
              tableProps={props}
              title={"TT"}
              className=" text-center text-light min-w-30px "
          />
      ),
      id: "TT",
      Cell: ({ ...props }) => <TableCustomCell className="text-center " 
      // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)} 
      data={formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThai)}
      />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"STT"}
                className="text-center text-light max-w-35 spaces "
            />
        ),
        id: "STT",
        Cell: ({ ...props }) => <TableCustomCell className="text-center " 
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)} 
        data={String(props?.row?.index + 1)}
        />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Tên bệnh nhân"}
                className="text-center text-light min-w-300px "
            />
        ),
        id: "tenBN",
        Cell: ({ ...props }) => (
            <div className='text-system '>
                <div className='flex m-0'>
                    <span className='text-uppercase fs-13px'>{props?.data[props?.row?.index]?.hoTen}</span>{props?.data[props?.row?.index]?.uuTien===UU_TIEN.uuTien.code?<span><i className="bi bi-check-circle-fill text-cyan ms-2"></i></span>:""}
                </div>
                <div className='flex m-0'>
                    <span className='text-uppercase fw-semibold fs-13px'>{props?.data[props?.row?.index]?.maBn}</span>
                    <span className='px-1 fs-13px'> - </span>
                    <span>{props?.data[props?.row?.index]?.loaiDoiTuong===LOAI_DOI_TUONG_CONST.dichVu.code?"Dịch vụ":"BHYT"}</span>
                    <span className='px-1 fs-13px'> - </span>
                    <span>{props?.data[props?.row?.index]?.gioiTinh}</span>
                </div>
            </div>
        )
    },
];

const handleDoubleClick = (row: any) => {
  setOpenModalThongTinKhamBenh(true)
  setBenhNhanInfo({...row?.original, isKhamBenh: benhNhanInfo?.isKhamBenh})
}
  return (
    <div className='spaces h-calc-vh-510'>
      <div className='h-100'>
        <TableCustom<IBenhNhan>
          data={fakeListBN || benhNhanList}
          columns={DsBenhNhanColumn}
          selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
          getSelectedRowsData={handleSelectedBenhNhan}
          verticalScroll={true}
          handleDoubleClick={handleDoubleClick}
          minHeight={300}
        />
      </div>
      <div className="d-flex justify-content-center spaces py-16 position-absolute bottom-15 w-100">
        <Row className="d-flex pt-4 spaces w-100 min-h-100">
          <Col xs={6}>
            <div className="status-1-bg text-center text-white rounded py-2">
              <span className='fs-4'>{`${trangThaiBenhNhan.dangKham.name}: 3`}</span>
            </div>
          </Col>
          <Col xs={6}>
            <div className="status-2-bg text-center rounded py-2">
              <span className='fs-4'>{`${trangThaiBenhNhan.choKQ.name}: 2`}</span>
            </div>
          </Col>
          <Col xs={6}>
            <div className="status-3-bg text-center text-white rounded py-2">
              <span className='fs-4'>{`${trangThaiBenhNhan.daCoKQ.name}: 4`}</span>
            </div>
          </Col>
          <Col xs={6}>
            <div className="status-4-bg text-center text-white rounded py-2">
              <span className='fs-4'>{`${trangThaiBenhNhan.ketThucKham.name}: 1`}</span>
            </div>
          </Col>
        </Row>
      </div>
      {openModalThongTinKhamBenh && <ModalThongTinKhamBenh handleClose={()=>setOpenModalThongTinKhamBenh(false)}/>}
    </div>
  );
};

export default TableDsBenhNhanKhamBenh;
