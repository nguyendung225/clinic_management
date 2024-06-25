import { ChangeEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import { KEY_LOCALSTORAGE } from "../../../auth/core/_consts";
import InputSearch from "../../../component/InputSearch";
import {
  CODE,
  RESPONSE_MESSAGE
} from "../../../utils/Constant";
import { localStorageItem } from "../../../utils/LocalStorage";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import BenhAnNgoaiTru from "../../modals/modal-benh-an-ngoai-tru/BenhAnNgoaiTru";
import ChuyenPhongKhamModal from "../../modals/modal-chuyen-phong-kham/ChuyenPhongKhamModal";
import BienBanHoiChanModal from "../../modals/modal-hoi-chan/BienBanHoiChanModal";
import PageKeThuoc from "../../modals/modal-ke-thuoc/PageKeThuoc";
import ModalKeVatTu from "../../modals/modal-ke-vat-tu/ModalKeVatTu";
import { IBenhNhan } from "../../models/DSBenhNhanKhamBenhModels";
import { getDSKhamBenh } from "../../services/PhanHeTiepDonServer";
import TableDsBenhNhanKhamBenh from "./TableDsBenhNhanKhamBenh";
import PageChiDinhDichVu from "../../modals/modal-chi-dinh-dich-vu/PageChiDinhDichVu";
import ThongTinChiPhi from "../ThongTinChiPhi";
import { Autocomplete } from "../../../component/Autocomplete";

export const DSBenhNhanKhamBenh = () => {
  const [shouldOpenThuocModal, setShouldOpenThuocModal] =
    useState<boolean>(false);
  const [shouldOpenChuyenPKModal, setShouldOpenChuyenModalPK] =
    useState<boolean>(false);
  const [shouldOpenBenhAnNgoaiTruDialog, setShouldOpenBenhAnNgoaiTruDialog] =
    useState<boolean>(false);
  const [shouldOpenHoiChanDialog, setShouldOpenHoiChanDialog] =
    useState<boolean>(false);
  const [shouldOpenChiDinhDichVuModal, setShouldOpenChiDinhDichVuModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { setIsLoading } = useContext(AppContext);
  const [keyword, setKeyword] = useState<string>("");
  const { setBenhNhanList } = useContext(PhanHeTiepDonContext);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [infoBenhNhan, setInfoBenhNhan] = useState<IBenhNhan>();
  const [totalElements, setTotalElements] = useState<number>(1);
  const { benhNhanInfo, setBenhNhanInfo } = useContext(PhanHeTiepDonContext);

  const [openCapNhatMauChiDinhDialog, setOpenCapNhatMauChiDinhDialog] =
    useState<boolean>(false);

  const [openCapNhatMauChiDinhVatTuDialog, setOpenCapNhatMauChiDinhVatTuDialog] =
    useState<boolean>(false);

  let department = localStorageItem.get(KEY_LOCALSTORAGE.DEPARTMENT);
  let room = localStorageItem.get(KEY_LOCALSTORAGE.ROOM);

  const handleCloseModal = () => {
    setShouldOpenThuocModal(false);
    setShouldOpenChuyenModalPK(false);
  };

  const handleCloseHoiChan = () => {
    setShouldOpenHoiChanDialog(false);
  };
  const handleOpenChiDinhDichVu = () => {
    setShouldOpenChiDinhDichVuModal(true);
  };
  const handleCloseChiDinhDichVu = () => {
    setShouldOpenChiDinhDichVuModal(false);
  };

  const handleCloseDialog = () => {
    setShouldOpenBenhAnNgoaiTruDialog(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const updatePageData = async () => {
    setIsLoading(true);
    let searchObject: any = {
      keyword: keyword,
      pageIndex: page,
      pageSize: rowsPerPage,
      departmentId: department?.id ? department?.id : null,
      roomId: room?.id ? room?.id : null,
    };
    try {
      let { data } = await getDSKhamBenh(searchObject);
      if (data?.code === CODE.SUCCESS) {
        setBenhNhanList?.(data?.data?.content || []);
        setTotalElements(data?.data?.totalElements);
        setTotalPages(data?.data?.totalPages);
      } else {
        toast.warning(RESPONSE_MESSAGE.ERROR);
      }
      setIsLoading(false);
    } catch (e) {
      toast.error(RESPONSE_MESSAGE.ERROR);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    updatePageData();
  }, [page, rowsPerPage]);
  
  return (
    <div className="bangDSBenhNhan p-0 position-relative">
      <div className="d-flex mt-3 px-3 justify-content-between">
        <h4 className="text-title fw-bold fs-4">Thông tin chi phí - Nguyễn Văn Quang Huy</h4>
        <div className="cursor-pointer mt-1">
          <i className="bi bi-list text-title fs-1"></i>
        </div>
      </div>
      <ThongTinChiPhi/>
      <div className="mt-3 px-3">
        <h4 className="text-title fw-bold fs-4 mb-0">Danh sách bệnh nhân</h4>
      </div>

      <div className="d-flex mt-3 px-3 justify-content-between align-items-center mb-3">
        <h4 className="fw-bold fs-4 spaces W-80 mb-0">Sắp xếp</h4>
        <div className="d-flex align-items-center flex-grow-1">
          <Autocomplete
            options={[]}
            value={null}
            name="sort_1"
            className="Autocomplete-custom-tiep-nhan radius spaces w-100 h-25 pe-2"
            placeholder="Chọn hình thức"
          />
          <Autocomplete
            options={[]}
            value={null}
            name="sort_2"
            className="Autocomplete-custom-tiep-nhan radius spaces w-100 h-25"
            placeholder="Tăng dần"
          />
        </div>
      </div>
      <div className="d-flex px-3">
        <div className="flex-auto">
            <InputSearch
              placeholder="Tìm kiếm bệnh nhân"
              value=""
              handleChange={handleChange}
              className="py-5"
            />
        </div>
      </div>
      <div className="flex-1 flex flex-column">
        <div className="pt-3 flex-1">
          <TableDsBenhNhanKhamBenh setInfoBenhNhan={setInfoBenhNhan}/>
        </div>
      </div>

      {shouldOpenBenhAnNgoaiTruDialog && (
        <BenhAnNgoaiTru
          handleClose={handleCloseDialog}
          open={shouldOpenBenhAnNgoaiTruDialog}
        />
      )}

      {shouldOpenChuyenPKModal && (
        <ChuyenPhongKhamModal
          shouldOpenChuyenPKModal={shouldOpenChuyenPKModal}
          handleCloseModal={handleCloseModal}
        />
      )}
      {shouldOpenHoiChanDialog && (
        <BienBanHoiChanModal
          shouldOpenHoiChanDialog={shouldOpenHoiChanDialog}
          handleCloseHoiChan={handleCloseHoiChan}
        />
      )}
      {shouldOpenChiDinhDichVuModal && (
        <PageChiDinhDichVu
          handleClose={handleCloseChiDinhDichVu}
        />
      )}
      {openCapNhatMauChiDinhDialog &&
        <PageKeThuoc
          open={openCapNhatMauChiDinhDialog}
          handleClose={() => { setOpenCapNhatMauChiDinhDialog(false) }
          } />}
      {openCapNhatMauChiDinhVatTuDialog &&
        <ModalKeVatTu
          open={openCapNhatMauChiDinhVatTuDialog}
          handleClose={() => { setOpenCapNhatMauChiDinhVatTuDialog(false) }} />
      }
    </div>
  );
};

export default DSBenhNhanKhamBenh;
