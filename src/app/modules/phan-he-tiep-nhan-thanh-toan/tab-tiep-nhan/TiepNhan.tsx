import {
  FormikErrors,
  FormikProps,
  FormikTouched,
  useFormikContext,
} from "formik";
import React, { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import ModalTimKiemBenhNhan from "../../component/modal-tim-kiem-benh-nhan/ModalTimKiemBenhNhan";
import { TimKiemBenhNhanModel } from "../../phan-he-tiep-nhan/components/timKiemBenhNhan/TimKiemBenhNhanModels";
import { removeEventEnter } from "../../utils/AppFunction";
import { VARIABLE_STRING } from "../../utils/Constant";
import { formatDateDTO, handleAgeCalculate } from "../../utils/FormatUtils";
import { PhanHeTiepNhanContext } from "../PhanHeTiepNhan";
import TTHanhChinhV2 from "../components/tab-tiep-nhan/TTHanhChinhV2";
import TTKhamBenhV2 from "../components/tab-tiep-nhan/TTKhamBenhV2";
import {
  defaultOptionSelect,
  initialValuesTiepNhan
} from "../constants/PhanHeTiepNhan";
import { KEY_TAB } from "../constants/constants";
import { DialogDanhSachHenKham } from "../modal-danh-sach-hen-kham/DialogDanhSachHenKham";
import {
  ObjectSelectAutocomplete,
  benhNhan,
} from "../models/PhanHeTiepNhanModel";
import { IconButtonSave } from "../../component/IconSvg";

export type benhNhanProps = {
  setActiveTab?:any
  values: benhNhan;
  setFieldValue: (field: string, value: any) => void;
  handleInputChangeSinhHieu: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: FormikErrors<benhNhan>;
  touched?: FormikTouched<benhNhan>;
  DSDichVu?: any[];
  setValues?: (value: benhNhan) => void;
  onAgeCalculate?: (DOB: string) => string;
  handleClearValue: (
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  handleChangeSelect: (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  handleOpenTKBNDialog?: () => void;
  isDatLichHen?: boolean;
  handleChangeHenKham?: (value: boolean) => void;
};

const TiepNhan: FC = () => {
  const { eventKey, currentTab, setCurrentTabChildren } = useContext(AppContext);
  const {
    thongTinBenhNhan,
    handleAddTab,
    setDSDichVu,
    DSDichVu,
    setThongTinBenhNhan,
    setIsPrint,
  } = useContext(PhanHeTiepNhanContext);
  const [benhNhan, setBenhNhan] = useState<benhNhan>(initialValuesTiepNhan);
  const {
    handleSubmit,
    setValues,
    setTouched,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
  } = useFormikContext<benhNhan>();
  const [isDatLichHen, setIsHanKham] = useState<boolean>(false);
  const [openTimKiemBNDialog, setOpenTimKiemBNDialog] = useState(false);
  const [openPhieuInTiepNhan, setOpenPhieuInTiepNhan] = useState(false);
  const [openHenKham, setOpenDSHenKham] = useState(false);

  const handleOpenTKBNDialog = () => {
    setOpenTimKiemBNDialog(true);
  };
  
  const handleCloseTKBNDialog = () => {
    setOpenTimKiemBNDialog(false);
  };

  const handleInputChangeSinhHieu = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      values: benhNhan,
      setFieldValue: FormikProps<benhNhan>["setFieldValue"]
    ) => {
      let { name, value, type } = e.target;
      let itemSinhHieu = {
        code: name,
        datatype: type,
        value: Number(value) > 0 && value,
        datetime: formatDateDTO(new Date().toString()),
      };
      setFieldValue(`obs.${name}`, itemSinhHieu);
    },
    []
  );

  const handleChecked = (
    (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: FormikProps<benhNhan>["setFieldValue"]) => {
      const { name, checked } = e.target;
      setFieldValue(`${name}`, checked);
    }
  );

  const handleChangeSelect = (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    switch (name) {
      case VARIABLE_STRING.PROVINCE:
        setBenhNhan({
          ...benhNhan,
          district: defaultOptionSelect,
          ward: defaultOptionSelect,
        });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.DISTRICT, null);
        setFieldValue(VARIABLE_STRING.WARD, null);
        setFieldValue(VARIABLE_STRING.NOI_SINH, selectedObject);
        break;

      case VARIABLE_STRING.DISTRICT:
        setBenhNhan({ ...benhNhan, ward: defaultOptionSelect });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.WARD, null);
        break;

      case VARIABLE_STRING.TEN_DICH_VU:
        setFieldValue(VARIABLE_STRING.PHONG_KHAM, null);
        setFieldValue(`${name}`, selectedObject);
        setCurrentTabChildren(KEY_TAB.TT_PHONG_KHAM)
        break;

      default:
        setBenhNhan({ ...benhNhan, [name]: selectedObject });
        setFieldValue(`${name}`, selectedObject);
        break;
    }
  };

  const handleClearValue = (
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setBenhNhan({ ...benhNhan, [name]: defaultOptionSelect });
    setFieldValue(`${name}`, defaultOptionSelect);
  };

  const getPatientInformation = useCallback(
    (setValues?: (values: any) => void, patient?: TimKiemBenhNhanModel) => {
      setValues?.({ ...patient, soVaoVien: null });
    },
    []
  );

  const handleClearForm = (
    setValues: (values: any) => void,
    setTouched: (touched: object) => void
  ) => {
    setValues(initialValuesTiepNhan);
    setTouched({});
  };

  const handlePrint = () => {
    if (values?.id && setIsPrint) {
      setIsPrint(true);
    } else {
      toast.warn("Chưa có thông tin bệnh nhân");
    }
  };

  const [activeTab, setActiveTab] = useState("")
  const formTiepNhanRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    formTiepNhanRef.current && formTiepNhanRef.current.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })  
  }, [activeTab])

  return (
    <div>
      <Form className="receive" onSubmit={handleSubmit} onKeyDown={removeEventEnter}>
      <div className="form-tiep-nhan" ref={formTiepNhanRef} >
        <Row className="mt-2 px-3">
          <TTHanhChinhV2
            values={values}
            setFieldValue={setFieldValue}
            handleInputChangeSinhHieu={(e) =>
              handleInputChangeSinhHieu(e, values, setFieldValue)
            }
            errors={errors}
            touched={touched}
            onAgeCalculate={handleAgeCalculate}
            handleChangeSelect={handleChangeSelect}
            handleClearValue={handleClearValue}
            handleOpenTKBNDialog={handleOpenTKBNDialog}
            isDatLichHen={isDatLichHen}
            DSDichVu={DSDichVu}
            handleChecked={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChecked(e, setFieldValue)
            }
          />
        </Row>

        <TTKhamBenhV2
          setActiveTab={setActiveTab}
          values={values}
          setFieldValue={setFieldValue}
          handleInputChangeSinhHieu={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChangeSinhHieu(e, values, setFieldValue)
          }
          handleChecked={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChecked(e, setFieldValue)
          }
          errors={errors}
          touched={touched}
          DSDichVu={DSDichVu}
          setValues={setValues}
          handleChangeSelect={handleChangeSelect}
          handleClearValue={handleClearValue}
          isDatLichHen={isDatLichHen}
          handleChangeHenKham={(value) => setIsHanKham(value)}
        />
      </div>

        <div className="spaces flex flex-center py-8">
          <Button className="btn-fill mr-5" type="submit">
            <IconButtonSave/>
            {thongTinBenhNhan?.id ? (
              <span>Cập nhật</span>
            ) : (
                <span>Lưu</span>
            )}
          </Button>
          <Button
            className="btn-outline mr-5"
            onClick={() => {
              handleClearForm(setValues, setTouched);
              setDSDichVu([]);
              setThongTinBenhNhan(initialValuesTiepNhan);
            }}
          >
            <i className="bi bi-file-earmark-plus"></i>
            <span>Nhập mới</span>
          </Button>
          <Button className="btn-outline mr-5 " onClick={handlePrint}>
            <i className="bi bi-printer"></i>
            <span>In Phiếu</span>
          </Button>
          <Button className="btn-outline mr-5 "><i className="bi bi-person-plus"></i><span>Tạo thẻ BN</span></Button>
          <Button
            className="btn-outline mr-5 "
            onClick={() => setOpenDSHenKham(true)}
          >
            <i className="bi bi-search"></i><span>DS hẹn khám</span>
          </Button>
          <Button
            className="btn-outline mr-5 "
            onClick={handleOpenTKBNDialog}
          >
            <i className="bi bi-search"></i><span>Tìm kiếm BN</span>
          </Button>
        </div>
        {openHenKham && (
          <DialogDanhSachHenKham show={openHenKham} onHide={setOpenDSHenKham} />
        )}
        {openTimKiemBNDialog && (
          <ModalTimKiemBenhNhan
            onSelectedPatient={(patient) => getPatientInformation(setValues, patient)}
            open={openTimKiemBNDialog}
            handleClose={handleCloseTKBNDialog}
          />
        )}
      </Form>
    </div>
  );
};
export default TiepNhan;
