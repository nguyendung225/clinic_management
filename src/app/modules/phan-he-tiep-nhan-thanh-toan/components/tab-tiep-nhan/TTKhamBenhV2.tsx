import React, { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomTabMenu from "../../../component/CustomTabMenu";
import { DanhSachChoGoiV2 } from "../../../phan-he-tiep-nhan/components/danh-sach-cho-goi/DanhSachChoGoi";
import ThongTinChuyenTuyenModal from "../../../phan-he-tiep-nhan/components/modalComponents/ThongTinChuyenTuyenModal";
import { CODE, CODE_SELECT, SEARCH_OBJECT_MAX_SIZE, SIMPLE_CATEGORY_TYPE, VARIABLE_STRING } from "../../../utils/Constant";
import { formatDateDTO } from "../../../utils/FormatUtils";
import { IResponseData } from "../../../utils/models";
import { DOI_TUONG, KEY_TAB_KHAM_BENH, LOAI_TIEP_NHAN, MUC_BMI, PHAN_LOAI } from "../../constants/PhanHeTiepNhan";
import { getAllCategory } from "../../services/TiepNhanServices";
import { benhNhanProps } from "../../tab-tiep-nhan/TiepNhan";
import TabSinhHieuV2 from "./TabSinhHieuV2";
import TabDSDangKy from "./tab-ds-dang-ky/TabDSDangKy";
import TabLichSu from "./tab-lich-su-kham/TabLichSu";
import TabPhieuThu from "./tab-phieu-thu/TabPhieuThu";
import TabXacThuc from "./tab-xac-thuc/TabXacThuc";
import TabDanhSachGopPCR from "./tabDanhSachGopPCR/TabDanhSachGopPCR";
import TabGiaDinh from "./tabGiaDinh/TabGiaDinh";
import TabThongTinPhongKham from "./tabThongTinPhongKham/TabThongTinPhongKham";
import TabZalo from "./tabZalo/TabZalo";

const TTKhamBenhV2: FC<benhNhanProps> = React.memo(
  ({
    setActiveTab,
    values,
    setFieldValue,
    handleChecked,
    errors,
    touched,
    setValues,
    handleChangeSelect,
    handleInputChangeSinhHieu,
    isDatLichHen,
    handleChangeHenKham,
  }) => {
    const [shouldOpenModalPK, setShouldOpenModalPK] = useState<boolean>(false);
    const [shouldOpenTuyenModal, setShouldOpenTuyenModal] =
      useState<boolean>(false);
    const [isBHYT, setIsBHYT] = useState<boolean>(false);
    const [activeKey, setActiveKey] = useState<string>(
      KEY_TAB_KHAM_BENH.DICH_VU
    );
    const [dataLoaiTiepNhan, setDataLoaiTiepNhan] = useState<any>([]);

    const getLoaiTiepNhan = async () => {
      try {
        const { data }: IResponseData = await getAllCategory({
          ...SEARCH_OBJECT_MAX_SIZE,
          type: SIMPLE_CATEGORY_TYPE.LOAI_TIEP_NHAN,
        });
        if (CODE.SUCCESS === data?.code) {
          setDataLoaiTiepNhan(data?.data?.content);
          const itemLoaiTiepNhan = data?.data?.content?.find(
            (item: any) => item?.code === CODE_SELECT.LTT_BENH_MOI
          );

          setFieldValue(
            VARIABLE_STRING.LOAI_TIEP_NHAN,
            itemLoaiTiepNhan || null
          );
          return;
        }
      } catch (error) {
        toast.warning("Xảy ra lỗi, vui lòng thử lại!");
      }
    };

    useEffect(() => {
      if (!values?.caseId) {
        getLoaiTiepNhan();
      }
    }, [values?.caseId]);

    const handleTabSelect = (key: string | null) => {
      if (key !== null) {
        setActiveKey(key);
        setActiveTab(key)

      }
    };

    const handleOpenModalPK = () => {
      setShouldOpenModalPK(true);
    };

    const handleSelectTuyen = (valueSelected: any) => {
      if (valueSelected?.code === VARIABLE_STRING.CODE_GIOI_THIEU) {
        setShouldOpenTuyenModal(true);
      } else {
        setShouldOpenTuyenModal(false);
      }
    };
    useEffect(() => {
      if (values?.loaiDoiTuong) {
        setIsBHYT(values?.loaiDoiTuong?.name === DOI_TUONG.BHTY);
        return;
      }
      setIsBHYT(false);
    }, [values?.loaiDoiTuong]);

    useEffect(() => {
      if (
        values?.loaiTiepNhan?.code &&
        values?.loaiTiepNhan?.code === LOAI_TIEP_NHAN[2].code
      ) {
        handleChangeHenKham && handleChangeHenKham(true);
      } else {
        handleChangeHenKham && handleChangeHenKham(false);
      }
    }, [values?.loaiTiepNhan]);

    const handleCloseModal = () => {
      setShouldOpenModalPK(false);
      setShouldOpenTuyenModal(false);
    };

    const handleSaveThongTinTuyen = (value: any) => {
      setFieldValue?.("benhNhanBhyt.loaiTuyen", value);
    };

    const handleBMI = () => {
      let chieuCao = Number(values?.obs?.chieuCao?.value) / 100;
      let canNang = Number(values?.obs?.canNang?.value);
      let bmi: string | number = "";
      let phanLoai: string = "";

      if (chieuCao && canNang) {
        bmi =
          chieuCao !== 0 ? (canNang / (chieuCao * chieuCao)).toFixed(1) : "";
        let bmiValue = parseFloat(bmi);

        for (const [tenPhanLoai, mucBMI] of Object.entries(MUC_BMI)) {
          if (bmiValue < mucBMI) {
            phanLoai = PHAN_LOAI[tenPhanLoai];
            break;
          } else {
            const listPhanLoai = Object.values(PHAN_LOAI);
            const lastPhanLoai = listPhanLoai[listPhanLoai.length - 1];
            phanLoai = lastPhanLoai;
          }
        }
      }

      let value = bmi + " " + phanLoai;
      let itemSinhHieu = {
        code: VARIABLE_STRING.BMI,
        datatype: "string",
        value: value,
        datetime: formatDateDTO(new Date().toString()),
      };
      setFieldValue(`obs.${VARIABLE_STRING.BMI}`, itemSinhHieu);
    };

    useEffect(() => {
      handleBMI();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values?.obs?.chieuCao?.value, values?.obs?.canNang?.value]);

    const listTab = [
      {
        title: 'DS Đăng ký',
        component: <TabDSDangKy/>
      },
      {
        title: 'Lịch sử khám',
        component: <TabLichSu
          values={values}
          activeKey={activeKey}
        />
      },
      {
        title: 'Thông tin phòng khám',
        component: <TabThongTinPhongKham/>
      },
      {
        title: 'Danh sách chờ gọi',
        component: <DanhSachChoGoiV2 />
      },
      {
        title: 'Sinh hiệu',
        component: <TabSinhHieuV2
          values={values}
          handleInputChangeSinhHieu={handleInputChangeSinhHieu}
        />
      },
      {
        title: 'Zalo',
        component: <TabZalo/>
      },
      {
        title: 'Xác thực',
        component: <TabXacThuc />
      },
      {
        title: 'Gia đình',
        component: <TabGiaDinh />
      },
      {
        title: 'Phiếu thu',
        component: <TabPhieuThu />
      },
      {
        title: 'Danh sách gộp PCR',
        component: <TabDanhSachGopPCR />
      },
    ];

    return (
      <div className="reception-list__container py-0">
        <Row className="h-100">
          <Col xs={12} className="h-100">
            <CustomTabMenu danhsachTabs={listTab} childrenTab={true}/>
          </Col>
        </Row>

        {shouldOpenTuyenModal && (
          <ThongTinChuyenTuyenModal
            onSave={handleSaveThongTinTuyen}
            shouldOpenTuyenModal={shouldOpenTuyenModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    );
  }
);
export default TTKhamBenhV2;
