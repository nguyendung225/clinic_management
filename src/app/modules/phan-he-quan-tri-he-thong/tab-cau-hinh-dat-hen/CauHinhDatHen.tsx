import { Button } from "react-bootstrap";
import DichVuTable from "../components/tab-cau-hinh-dat-hen/DichVuTable";
import PhongKhamTable from "../components/tab-cau-hinh-dat-hen/PhongKhamTable";
import ThoiGianKhamTable from "../components/tab-cau-hinh-dat-hen/ThoiGianKhamTable";
import BacSiTable from "../components/tab-cau-hinh-dat-hen/BacSiTable";
import CacNgayTrongTuanTable from "../components/tab-cau-hinh-dat-hen/CacNgayTrongTuanTable";
import NgayNghiTable from "../components/tab-cau-hinh-dat-hen/NgayNghiTable";
import { useEffect, useState } from "react";
import DanhMucDichVuDialog, {
  fakeDataDichVu,
} from "../modals/modal-cau-hinh-dat-hen/DanhMucDichVuDialog";
import {
  DanhMucBacSiModel,
  DanhMucChonThoiGianKhamModel,
  DanhMucDichVuModel,
  DanhMucNgayLamViecModel,
  DanhMucNgayNghiModel,
  DanhMucPhongKhamModel,
} from "../models/ModelDatHen";
import DanhMucPhongKhamDialog, {
  fakeDataPhongKham,
} from "../modals/modal-cau-hinh-dat-hen/DanhMucPhongKhamDialog";
import DanhMucBacSiDialog, {
  fakeDataBacSi,
} from "../modals/modal-cau-hinh-dat-hen/DanhMucBacSiDialog";
import DanhMucNgayLamViecDialog, {
  fakeDataNgayLamViec,
} from "../modals/modal-cau-hinh-dat-hen/DanhMucNgayLamViecDialog";
import DanhMucChonThoiGianKhamDialog from "../modals/modal-cau-hinh-dat-hen/DanhMucChonThoiGianKhamDialog";
import DanhMucNgayNghiDialog from "../modals/modal-cau-hinh-dat-hen/DanhMucNgayNghiDialog";
import moment from "moment";
import LabelRequired from "../../component/LabelRequired";
import Autocomplete from "../../component/AutocompleteObject";
import TextValidator from "../../component/TextValidator";
import { IconButtonSave } from "../../component/IconSvg";
type Props = {};

const dataDichVuFake: DanhMucDichVuModel[] = [
  {
    maDichVu: "klsc",
    tenDichVu: "Khám lâm sàng chung",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "xq",
    tenDichVu: "Chụp X-quang",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
];

const dataPhongKhamFake: DanhMucPhongKhamModel[] = [
  { maPhong: "klsc", tenKhoaPhong: "Khám lâm sàng chung", soPhong: 1003 },
  { maPhong: "xq", tenKhoaPhong: "Chụp X-quang", soPhong: 3001 },
];

const dataBacSiFake: DanhMucBacSiModel[] = [
  {
    maChucDanh: "bsklsc",
    hoTen: "Nguyễn Thị Tường",
    phongBan: "Khám lâm sàng chung",
  },
];

const dataNgayLamViecFake: DanhMucNgayLamViecModel[] = [
  { ngay: "Thứ 2" },
  { ngay: "Thứ 3" },
];

export const dataChonThoiGianKhamFake: DanhMucChonThoiGianKhamModel[] = [
  { stt: 1, tu: "09:00", den: "10:30" },
  { stt: 2, tu: "10:30", den: "11:30" },
];

const dataNgayNghiFake: DanhMucNgayNghiModel[] = [
  { tu: moment().subtract(1,'days').format("DD/MM/YYYY"), den: moment().add(2, 'days').format("DD/MM/YYYY") },
  { tu: moment().add(2, 'days').format("DD/MM/YYYY"), den: moment().add(4, 'days').format("DD/MM/YYYY") },
];
export default function CauHinhDatHen({}: Props) {
  const [openDanhMucDichVuDialog, setOpenDanhMucDichVuDialog] =
    useState<boolean>(false);
  const [dataDichVu, setDataDichVu] =
    useState<DanhMucDichVuModel[]>(dataDichVuFake);
  const [openDanhMucPhongKhamDialog, setOpenDanhMucPhongKhamDialog] =
    useState<boolean>(false);
  const [openDanhMucBacSiDialog, setOpenDanhMucBacSiDialog] =
    useState<boolean>(false);
  const [dataBacSi, setDataBacSi] =
    useState<DanhMucBacSiModel[]>(dataBacSiFake);
  const [openDanhMucNgayLamViecDialog, setOpenDanhMucNgayLamViecDialog] =
    useState<boolean>(false);
  const [dataNgayLamViec, setDataNgayLamViec] =
    useState<DanhMucNgayLamViecModel[]>(dataNgayLamViecFake);
  const [
    openDanhMucChonThoiGianKhamDialog,
    setOpenDanhMucChonThoiGianKhamDialog,
  ] = useState<boolean>(false);
  const [dataChonThoiGianKham, setDataChonThoiGianKham] = useState<
    DanhMucChonThoiGianKhamModel[]
  >(dataChonThoiGianKhamFake);
  const [
    openDanhMucNgayNghiDialog,
    setOpenDanhMucNgayNghiDialog,
  ] = useState<boolean>(false);
  const [dataNgayNghi, setDataNgayNghi] = useState<
    DanhMucNgayNghiModel[]
  >(dataNgayNghiFake);
  const [dataPhongKham, setDataPhongKham] =
    useState<DanhMucPhongKhamModel[]>(dataPhongKhamFake);
  const [selectedRow, setSelectedRow] = useState<any[]>([]);
  const [dataCauHinhDichVu, setDataCauHinhDichVu] = useState<
    DanhMucDichVuModel[]
  >([]);
  const [dataCauHinhPhongKham, setDataCauHinhPhongKham] = useState<
    DanhMucPhongKhamModel[]
  >([]);
  const [dataCauHinhBacSi, setDataCauHinhBacSi] = useState<DanhMucBacSiModel[]>(
    []
  );
  const [dataCauHinhNgayLamViec, setDataCauHinhNgayLamViec] = useState<
    DanhMucNgayLamViecModel[]
  >([]);
  const [dataCauHinhNgayNghi, setDataCauHinhNgayNghi] = useState<any[]>([]);
  const [dataCauHinhThoiGianKham, setDataCauHinhThoiGianKham] = useState<
    DanhMucChonThoiGianKhamModel[]
  >([]);
  const [dataCauHinhs, setDataCauHinhs] = useState<any>({});

  useEffect(() => {
    setDataCauHinhs({
      dichVu: Object.assign({}, ...dataCauHinhDichVu),
      phongKham: Object.assign({}, ...dataCauHinhPhongKham),
      bacSi: Object.assign({}, ...dataCauHinhBacSi),
      ngayLamViec: Object.assign({}, ...dataCauHinhNgayLamViec),
      ngayNghi: Object.assign({}, ...dataCauHinhNgayNghi),
      thoiGianKham: Object.assign({}, ...dataCauHinhThoiGianKham),
    });
  }, [
    dataCauHinhDichVu,
    dataCauHinhPhongKham,
    dataCauHinhBacSi,
    dataCauHinhNgayLamViec,
    dataCauHinhNgayNghi,
    dataCauHinhThoiGianKham,
  ]);

  const handleTakeAll = (name: string) => {
    switch (name) {
      case "dichVu":
        setDataDichVu(fakeDataDichVu);
        break;
      case "phongKham":
        setDataPhongKham(fakeDataPhongKham);
        break;
      case "bacSi":
        setDataBacSi(fakeDataBacSi);
        break;
      case "ngayLamViec":
        setDataNgayLamViec(fakeDataNgayLamViec);
        break;
      default:
        break;
    }
  };
  
  const handleSubmitCauHinhs = ( )=>{
    console.log(dataCauHinhs,"data cấu hình"); 
  }

  return (
    <div className="cau-hinh-dat-hen">
      <div className="d-flex justify-content-between  spaces pb-6 gap-24">
        <div className="d-flex w-25 ">
          <LabelRequired
            label="Cơ sở KCB spaces pr-6 min-w-75px justify-content-end"
          />
          <Autocomplete
            options={[]}
            name="1 w-100"
            maxMenuHeight={24}
          />
        </div>
        <div className="d-flex w-25">
          <LabelRequired
            label="Địa chỉ spaces pr-6 min-w-75px justify-content-end"
          />
          <TextValidator type="text" name="2" className=" spaces w-100 " />
        </div>
        <div className="d-flex w-25">
          <LabelRequired
            label="Số ĐT spaces pr-6 min-w-75px justify-content-end"
          />
          <TextValidator type="text" name="3" className=" spaces w-100" />
        </div>
        <div className="d-flex w-25">
          <LabelRequired
            label="Email spaces pr-6 min-w-75px justify-content-end"
          />
          <TextValidator type="text" name="4" className=" spaces w-100" />
        </div>
      </div>
      <div className="cau-hinh-container-bottom h-calc-150px">
        <div className="spaces width-30">
          <div className="spaces gap-12 flex-between spaces pb-12">
            <div className="d-flex spaces gap-12 w-100">
              <LabelRequired
                label="Dịch vụ KCB"
                className="spaces pr-6 min-w-90px justify-content-end"
              />
              <Button
                className="btn-outline  flex-auto"
                onClick={() => handleTakeAll("dichVu")}
              >
                <i className="bi bi-list-ul"></i>
                Lấy tất cả từ danh mục
              </Button>
            </div>
            <div>
              <Button
                className="btn-fill "
                onClick={() => setOpenDanhMucDichVuDialog(true)}
              >
                <i className="bi bi-plus"></i>
                Thêm
              </Button>
            </div>
          </div>
          <div className="border h-table-dat-hen">
            <DichVuTable
              data={dataDichVu}
              setDataCauHinh={setDataCauHinhDichVu}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
        </div>
        <div className="spaces width-30">
          <div className="spaces gap-12 flex-between  spaces pb-12">
            <div className="d-flex spaces gap-12 w-100">
              <LabelRequired
                label="Phòng khám"
                className="spaces pr-6 min-w-90px justify-content-end"
              />
              <Button
                className="btn-outline  flex-auto"
                onClick={() => handleTakeAll("phongKham")}
              >
                <i className="bi bi-list-ul"></i>
                Lấy tất cả từ danh mục
              </Button>
            </div>
            <div>
              <Button
                className="btn-fill "
                onClick={() => setOpenDanhMucPhongKhamDialog(true)}
                disabled={dataCauHinhDichVu.length===0}
              >
                <i className="bi bi-plus"></i>
                Thêm
              </Button>
            </div>
          </div>
          <div className="border h-table-dat-hen">
            <PhongKhamTable
              setDataCauHinh={setDataCauHinhPhongKham}
              data={dataPhongKham}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
        </div>
        <div className="spaces width-24">
          <div className="spaces gap-12 flex-between spaces pb-12">
            <div className="d-flex spaces gap-12 w-100">
              <LabelRequired
                label="Bác sĩ"
                className="spaces pr-6 min-w-50px justify-content-end"
              />
              <div className="flex-auto"></div>
            </div>
            <div>
              <Button
                className="btn-fill "
                onClick={() => setOpenDanhMucBacSiDialog(true)}
                disabled={dataCauHinhPhongKham.length===0}
              >
                <i className="bi bi-plus"></i>
                Thêm
              </Button>
            </div>
          </div>
          <div className="spaces pb-24">
            <BacSiTable
              setDataCauHinh={setDataCauHinhBacSi}
              data={dataBacSi}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
          <div className="spaces gap-12 flex-between spaces pb-12">
            <div className="d-flex spaces gap-12 w-100">
              <LabelRequired
                label="Ngày"
                className="spaces pr-6 min-w-50px justify-content-end"
              />
              <Button
                className="btn-outline  flex-auto"
                onClick={() => handleTakeAll("ngayLamViec")}
              >
                <i className="bi bi-list-ul"></i>
                Lấy tất cả từ danh mục
              </Button>
            </div>
            <div>
              <Button
                className="btn-fill "
                onClick={() => setOpenDanhMucNgayLamViecDialog(true)}
                disabled={dataCauHinhBacSi.length===0}
              >
                <i className="bi bi-plus"></i>
                Thêm
              </Button>
            </div>
          </div>
          <div className="spaces h-calc-416px border">
            <CacNgayTrongTuanTable
              setDataCauHinh={setDataCauHinhNgayLamViec}
              data={dataNgayLamViec}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
          <div className="d-flex spaces gap-12 justify-content-end spaces py-12">
            <div>
              <Button className="btn-fill " onClick={()=>setOpenDanhMucNgayNghiDialog(true)} disabled={dataCauHinhNgayLamViec.length===0}>
                <i className="bi bi-plus"></i>
                Thêm ngày nghỉ
              </Button>
            </div>
          </div>
          <div className="border min-h-180px border">
            <NgayNghiTable
              setDataCauHinh={setDataCauHinhNgayNghi}
              data={dataNgayNghi}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
        </div>

        <div className=" spaces width-15">
          <div className="d-flex spaces gap-8 justify-content-end spaces pb-12">
            <div>
              <Button
                className="btn-fill "
                onClick={() => setOpenDanhMucChonThoiGianKhamDialog(true)}
                disabled={dataCauHinhNgayNghi.length===0}
              >
                <i className="bi bi-plus"></i>
                Thêm TG khám
              </Button>
            </div>
          </div>
          <div className="border h-table-dat-hen">
            <ThoiGianKhamTable
              setDataCauHinh={setDataCauHinhThoiGianKham}
              data={dataChonThoiGianKham}
              updatePageData={() => {}}
              handleChange={() => {}}
              page={0}
              rowsPerPage={0}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-center bg-white pb-18px spaces pt-24">
        <Button className="btn-fill mr-5" type="submit" onClick={()=>handleSubmitCauHinhs()}>
          <>
            <IconButtonSave/>
            <span>Lưu</span>
          </>
        </Button>
        <Button className="btn-outline mr-5">
          <span>Hủy</span>
        </Button>
      </div>

      {openDanhMucDichVuDialog && (
        <DanhMucDichVuDialog
          open={openDanhMucDichVuDialog}
          handleClose={setOpenDanhMucDichVuDialog}
          setSelectedRow={setSelectedRow}
          setDataDichVu={setDataDichVu}
          dataDichVu={dataDichVu}
          selectedRow={selectedRow}
        />
      )}
      {openDanhMucPhongKhamDialog && (
        <DanhMucPhongKhamDialog
          open={openDanhMucPhongKhamDialog}
          handleClose={setOpenDanhMucPhongKhamDialog}
          setSelectedRow={setSelectedRow}
          setDataPhongKham={setDataPhongKham}
          dataPhongKham={dataPhongKham}
          selectedRow={selectedRow}
        />
      )}
      {openDanhMucBacSiDialog && (
        <DanhMucBacSiDialog
          open={openDanhMucBacSiDialog}
          handleClose={setOpenDanhMucBacSiDialog}
          setSelectedRow={setSelectedRow}
          setDataBacSi={setDataBacSi}
          dataBacSi={dataBacSi}
          selectedRow={selectedRow}
        />
      )}
      {openDanhMucNgayLamViecDialog && (
        <DanhMucNgayLamViecDialog
          open={openDanhMucNgayLamViecDialog}
          handleClose={setOpenDanhMucNgayLamViecDialog}
          setSelectedRow={setSelectedRow}
          setDataNgayLamViec={setDataNgayLamViec}
          dataNgayLamViec={dataNgayLamViec}
          selectedRow={selectedRow}
        />
      )}
      {openDanhMucChonThoiGianKhamDialog && (
        <DanhMucChonThoiGianKhamDialog
          open={openDanhMucChonThoiGianKhamDialog}
          handleClose={setOpenDanhMucChonThoiGianKhamDialog}
          setSelectedRow={setSelectedRow}
          setDataChonThoiGianKham={setDataChonThoiGianKham}
          dataChonThoiGianKham={dataChonThoiGianKham}
          selectedRow={selectedRow}
        />
      )}
      {openDanhMucNgayNghiDialog && (
        <DanhMucNgayNghiDialog
          open={openDanhMucNgayNghiDialog}
          handleClose={setOpenDanhMucNgayNghiDialog}
          setSelectedRow={setSelectedRow}
          setDataNgayNghi={setDataNgayNghi}
          dataNgayNghi={dataNgayNghi}
          selectedRow={selectedRow}
        />
      )}
    </div>
  );
}
