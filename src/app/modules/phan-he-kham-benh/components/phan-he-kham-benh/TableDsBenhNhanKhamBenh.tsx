import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { toast } from 'react-toastify';
import { AppContext } from '../../../appContext/AppContext';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { CODE, SELECTION_MODE } from '../../../utils/Constant';
import { formatTrangThaiBenhNhan } from '../../../utils/FormatUtils';
import { HINH_THUC, LOAI_DOI_TUONG_CONST, UU_TIEN, trangThaiBenhNhan } from '../../constants/BenhNhanConst';
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
                    <span>{props?.data[props?.row?.index]?.loaiTiepNhan===HINH_THUC.benhMoi.code?"Bệnh mới":"Tái khám"}</span>
                </div>
            </div>
        )
    },
    {
      Header: (props) => (
          <TableCustomHeader<IBenhNhan>
              tableProps={props}
              title={"Tuổi"}
              className="text-center text-light min-w-30px "
          />
      ),
      id: "Tuổi",
      Cell: ({ ...props }) => <TableCustomCell className="text-center " 
      // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)} 
      data={props?.data[props?.row?.index]?.age}
      />,
  },
];

const handleDoubleClick = (row: any) => {
  setOpenModalThongTinKhamBenh(true)
  setBenhNhanInfo({...row?.original, isKhamBenh: benhNhanInfo?.isKhamBenh})
}
  return (
    <div className='spaces h-calc-vh-425'>
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
      <div className="d-flex justify-content-center spaces py-16 px-24 position-absolute bottom-15">
        <div className="spaces w-100">
          <Row className="d-flex px-2 pt-4 spaces min-h-100">
            <Col xs={6} xxl={4} className="min-w-90px text-start fs-9 h-22 spaces">
              <i className="bi bi-circle-fill text-status-blue"></i>&nbsp;
              <span>{trangThaiBenhNhan.choKham.name}</span>
            </Col>
            <Col xs={6} xxl={4} className="min-w-120px text-start fs-9 h-22 spaces">
              <i className="bi bi-circle-fill text-status-ocean"></i>&nbsp;
              <span>{trangThaiBenhNhan.khamBenhKetHop.name}</span>
            </Col>
            <Col xs={6} xxl={4} className="min-w-90px text-start fs-9 h-22 spaces">
              <i className="bi bi-circle-fill text-status-green"></i>&nbsp;
              <span>{trangThaiBenhNhan.ketThucKham.name}</span>
            </Col>
            <Col xs={6} xxl={4} className="min-w-90px text-start fs-9 h-22 spaces">
              <i className="bi bi-circle-fill text-status-yellow"></i>&nbsp;
              <span>{trangThaiBenhNhan.daCoKQCLS.name}</span>
            </Col>
            <Col xs={6} xxl={4} className="min-w-120px text-start fs-9 h-22 spaces">
              <i className="bi bi-circle-fill text-status-orange"></i>&nbsp;
              <span>{trangThaiBenhNhan.dangKham.name}</span>
            </Col>
            <Col xs={6} xxl={4} className="min-w-90px text-start">
              <i className="bi bi-circle-fill  text-status-purple"></i>&nbsp;
              <span>{trangThaiBenhNhan.choKQCLS.name}</span>
            </Col>
          </Row>
        </div>
      </div>
      {openModalThongTinKhamBenh && <ModalThongTinKhamBenh handleClose={()=>setOpenModalThongTinKhamBenh(false)}/>}
    </div>
  );
};

export default TableDsBenhNhanKhamBenh;
