import { Formik, useFormikContext } from "formik";
import moment from "moment";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { totalPrice } from "../../../utils/AppFunction";
import { convertNumberPrice } from "../../../utils/FormatUtils";
import { localStorageItem } from "../../../utils/LocalStorage";
import { PhanHeTiepNhanContext } from "../../PhanHeTiepNhan";
import { LIST_DOI_TUONG_TIEP_NHAN } from "../../constants/PhanHeTiepNhan";
import { CODE_LOAI_PHIEU } from "../../constants/TabThanhToanConstant";
import { ObjectSelectAutocomplete } from "../../models/PhanHeTiepNhanModel";
import { IPhieu, thanhToan } from "../../models/ThanhToanModel";
import { LIST_HINH_THUC, LOAI_PHIEU } from "../fakeData";
import { ThanhToanContext } from "./ContextThanhToan";
import ModalGoDuyetThanhToan from "./ModalGoDuyetThanhToan";
import ModalHuyPhieu from "./modal-huy-phieu/ModalHuyPhieu";
import ModalPhieuThu from "./modal-phieu-in/ModalPhieuThu";
import ModalPhieuThuTamUng from "./modal-phieu-in/ModalPhieuThuTamUng";

interface IProps {
  selectedRow: any;
  handleAddPhieu: (phieu: IPhieu) => void;
  hinhThuc?: string;
  isTaoHoaDonDienTu?: boolean;
  isTaoPhieu?: boolean;
  setIsTaoPhieu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhieuThanhToan = ({ selectedRow, handleAddPhieu, hinhThuc, isTaoHoaDonDienTu, isTaoPhieu, setIsTaoPhieu }: IProps) => {
  let {
    clearData,
    inforBenhNhan,
    dataBN,
    dataDvDaChon,
    setVoucherType,
    reRender,
  } = useContext(ThanhToanContext);

  const { handleSubmit, setValues, setFieldValue, values: valuesThanhToan, errors, touched } =
    useFormikContext<thanhToan>();
  const { isPay } = useContext(PhanHeTiepNhanContext);
  const dataUser = localStorageItem.get("access-token-decode-patient");

  const [tienDaNop, setTienDaNop] = useState<number>(valuesThanhToan.payMoney);
  const [tienTamUng, setTienTamUng] = useState<number>(valuesThanhToan.advanceMoney);
  
  
  const [phieuThu, setPhieuThu] = useState(false);
  const [phieuThuTamUng, setPhieuThuTamUng] = useState(false);
  const refForm = useRef<any>();
  const [isPhieuHoanUng, setIsPhieuHoanUng] = useState(false);
  const [soTien, setSoTien] = useState(true);
  const [openHuyPhieuDialog, setOpenHuyPhieuDialog] = useState(false);
  const [openDialogTaoHoaDonDienTu, setOpenDialogTaoHoaDonDienTu] = useState(false);
  const [openDialogGoDuyetThanhToan, setOpenDialogGoDuyetThanhToan] = useState(false);
  const [infoPhieu, setInfoPhieu] = useState<any>();
  const tongChiPhi = totalPrice(infoPhieu?.dsDichVu, "thanhTien");
  const benhNhanTra = totalPrice(infoPhieu?.dsDichVu, "bnTra");
  const BHYTTra = totalPrice(infoPhieu?.dsDichVu, "bhytTra");
  const tongMienGiam = totalPrice(infoPhieu?.dsDichVu, "mienGiam");
  const dichVuItems = infoPhieu?.dsDichVu?.flatMap((item: any) => item?.items)

  useEffect(() => {
    refForm.current.setFieldValue("loaiPhieu", LOAI_PHIEU[0]);
    refForm.current.setFieldValue("soPhieu", "00001/29");
    refForm.current.setFieldValue("nguoiThu", "Quản trị hệ thống");
    refForm.current.setFieldValue("ngayThu", moment().format("hh:mm DD/MM/YYYY"));
  }, [isTaoPhieu])
  
  useEffect(() => {
    // loại phiếu là thu tiền thì số tiền lần đầu là số tiền các dịch vụ khám bệnh thôi, không có dịch vụ cls, fix tạm số tiền benhNhanTra
    refForm.current.setFieldValue("soTien", soTien ? benhNhanTra : 0);
  }, [benhNhanTra, soTien])
  
  useEffect(() => {
    hinhThuc && refForm.current.setFieldValue("hinhThuc", hinhThuc);
    selectedRow?.length > 0 && setInfoPhieu(selectedRow[0]);
  }, [hinhThuc, selectedRow])

  const initialValues: IPhieu = {
    loaiPhieu: null,
    soTien: "",
    mienGiam: "",
    hinhThuc: null,
    noiDungThu: "",
    lyDoMienGiam: "",
    soPhieu: "",
    nguoiThu: "",
    ngayThu: ""
  }

  const validationSchema = Yup.object({
    loaiPhieu: Yup.object().nullable().required("Bắt buộc nhập"),
    soTien: Yup.number().required("Bắt buộc nhập"),
    hinhThuc: Yup.object().nullable().required("Bắt buộc nhập"),
  })

  const handleSelectChange = (selectOption: ObjectSelectAutocomplete, name: string, setFieldValue: (name: string, value: ObjectSelectAutocomplete) => void) => {
    setFieldValue(name, selectOption);
    name === "loaiPhieu" && setSoTien((selectOption?.code === CODE_LOAI_PHIEU.THU_TIEN.code) || (selectOption?.code === CODE_LOAI_PHIEU.THU_TIEN_0_DONG.code));
  }

  const handleOnClickTaoPhieu = () => {
    setIsTaoPhieu(true);
  }

  const handleSubmitForm = (values: IPhieu) => {
    const openPhieuIn = {
      [CODE_LOAI_PHIEU.THU_TIEN.code]: () => {
        setPhieuThu(true);
        setIsPhieuHoanUng(false);
      },
      [CODE_LOAI_PHIEU.TAM_UNG.code]: () => setPhieuThuTamUng(true),
      [CODE_LOAI_PHIEU.HOAN_UNG.code]: () => {
        setPhieuThu(true);
        setIsPhieuHoanUng(true);
      },
    }
    openPhieuIn[values?.loaiPhieu?.code as string]();
    handleAddPhieu(values);
  }

  const handleOnClickHuyPhieu = () => {
    setOpenHuyPhieuDialog(true);
  }

  const handleTaoHoaDonDienTu = () => {
    setOpenDialogTaoHoaDonDienTu(true);
  }

  const handleCloseTaoHoaDonDienTu = () => {
    setOpenDialogTaoHoaDonDienTu(false);
  }

  const handleGoDuyetThanhToan = () => {
    setOpenDialogGoDuyetThanhToan(true);
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmitForm(values)}
        innerRef={refForm}
      >
        {({ values, handleSubmit, setFieldValue, errors, touched, resetForm }) =>
          <Form id="form-thanh-toan">
            <div className="border flex-grow-1 p-1 mb-2 bg-cyan">
              <div className="d-flex">
                <div className="d-flex spaces h-22 mb-6 align-items-center width-23">
                  <LabelRequired label="Tổng chi phí" className="fw-400 min-w-90px" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(tongChiPhi || 0)}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-18">
                  <LabelRequired label="BHYT" className="fw-400 min-w-50px ps-1" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(BHYTTra || 0)}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-25">
                  <LabelRequired label="Miễn giảm dịch vụ" className="fw-400 spaces min-w-120 ps-1" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(tongMienGiam || 0)}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-22">
                  <LabelRequired label="Bệnh nhân" className="fw-400 spaces min-w-80 ps-1" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(benhNhanTra || 0)}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-11">
                  <LabelRequired label="Số tiền thực thu" className="fw-400 spaces min-w-110 ps-1" />
                </div>
              </div>

              <div className="d-flex">
                <div className="d-flex spaces h-22 mb-6 align-items-center width-23">
                  <LabelRequired label="Tạm ứng" className="fw-400 min-w-90px" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(tienTamUng || 0)}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-18">
                  <LabelRequired label="Đã thu" className="fw-400 min-w-50px ps-1" />
                  <div className="text-thanh-toan text-end">{convertNumberPrice(Number(tienDaNop))}</div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-25">
                  <LabelRequired label="Miễn giảm phiếu thu" className="fw-400 spaces min-w-130 ps-1" />
                  <div className="text-thanh-toan text-end">
                    {convertNumberPrice(Number(valuesThanhToan.tongTienDichVu - valuesThanhToan.payMoney))}
                  </div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-22">
                  <LabelRequired label={ `Còn ${((tienTamUng + tienDaNop) - benhNhanTra) > 0 ? "dư" : "nợ"}`}className="fw-400 spaces min-w-80 ps-1" />
                  <div className="text-thanh-toan text-end">
                    {convertNumberPrice(Math.abs((tienTamUng + tienDaNop) - benhNhanTra)) || 0}
                  </div>
                </div>

                <div className="d-flex spaces h-22 mb-6 align-items-center width-11">
                  <div className="text-thanh-toan text-center">
                    0
                  </div>
                </div>
              </div>

              <hr className="mt-0" />

              <div >
                <div className="d-flex align-items-center">
                  <div className="min-w-250px">
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Khoa phòng" className="fw-400 min-w-95px" />
                      <div className="text-thanh-toan">P216-N.C.X.K</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Ngày vào viện" className="fw-400 min-w-95px" />
                      <div className="text-thanh-toan">{moment().format("hh:mm DD/MM/YYYY")}</div>
                    </div>
                  </div>

                  <div className="spaces min-w-240">
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Đối tượng" className="fw-400 min-w-95px" />
                      <div className="text-thanh-toan">
                        {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === infoPhieu?.loaiDoiTuong)?.name}
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Ngày ra viện" className="min-w-95px fw-400" />
                      <div className="text-thanh-toan">
                        {moment().format("hh:mm DD/MM/YYYY")}
                      </div>
                    </div>
                  </div>

                  <div className="min-w-250px">
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Trạng thái" className="fw-400 spaces min-w-105" />
                      <div className="text-thanh-toan">
                        Đang khám bệnh
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <LabelRequired label="Số ngày điều trị" className="fw-400 spaces spaces min-w-105" />
                      <Col className="text-thanh-toan">15</Col>
                    </div>
                  </div>
                </div>

                {isTaoPhieu &&
                  <div>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center min-w-250px">
                        <div>
                          <LabelRequired label="Số phiếu" className="fw-400 min-w-95px" />
                        </div>
                        <div className="text-thanh-toan">
                          {values?.soPhieu}
                        </div>
                      </div>

                      <div className="d-flex align-items-center spaces min-w-240">
                        <LabelRequired label="Người thu" className="fw-400 min-w-95px" />
                        <div className="text-thanh-toan">
                          {values?.nguoiThu}
                        </div>
                      </div>

                      <div className="d-flex align-items-center min-w-250px">
                        <LabelRequired label="Ngày thu" className="fw-400 spaces min-w-105" />
                        <div className="text-thanh-toan">
                          {values?.ngayThu}
                        </div>
                      </div>

                      <div className="text-center w-100">
                        Số tiền thực thu
                      </div>
                    </div>

                    <div className="d-flex mb-1">
                      <div className="d-flex align-items-center min-w-250px">
                        <LabelRequired label="Loại phiếu" className="fw-400 min-w-95px" />
                        <AutocompleteV2
                          className="autocomplete-custom-tiep-nhan h-26 pe-3"
                          name="loaiPhieu"
                          value={values?.loaiPhieu}
                          options={LOAI_PHIEU}
                          onChange={(selectOption) => handleSelectChange(selectOption, "loaiPhieu", setFieldValue)}
                          errors={errors?.loaiPhieu}
                          touched={touched?.loaiPhieu}
                        />
                      </div>
                      <div className="d-flex align-items-center spaces min-w-240">
                        <LabelRequired label="Số tiền" className="fw-400 min-w-95px" />
                        <TextField
                          className="pe-3  no-spinners text-end"
                          name="soTien"
                          type="number"
                          value={(values?.loaiPhieu?.code === CODE_LOAI_PHIEU.TAM_UNG.code) ? values?.soTien : convertNumberPrice(values?.soTien)}
                          disabled={values?.loaiPhieu?.code !== CODE_LOAI_PHIEU.TAM_UNG.code}
                        />
                      </div>

                      <div className="d-flex align-items-center min-w-250px">
                        <LabelRequired label="Miễn giảm" className="fw-400 spaces min-w-105" />
                        <TextField
                          className=" pe-3"
                          name="mienGiam"
                          type="number"
                        />
                      </div>

                      <div className="text-thanh-toan text-center">0</div>
                    </div>

                    <div className="d-flex w-100">
                      <div className="d-flex align-items-center min-w-250px">
                        <LabelRequired label="Hình thức" className="fw-400 min-w-95px" />
                        <AutocompleteV2
                          className="autocomplete-custom-tiep-nhan h-26 pe-3"
                          options={LIST_HINH_THUC}
                          name="hinhThuc"
                          value={values?.hinhThuc}
                          onChange={(selectOption) => handleSelectChange(selectOption, "hinhThuc", setFieldValue)}
                          errors={errors?.hinhThuc}
                          touched={touched?.hinhThuc}
                        />
                      </div>


                      <div className="d-flex align-items-center spaces min-w-240">
                        <LabelRequired label="Nội dung thu" className="fw-400 min-w-95px" />
                        <TextField
                          className=" pe-3"
                          name="noiDungThu"
                        />
                      </div>

                      <div className="d-flex align-items-center w-100">
                        <LabelRequired label="Lý do miễn giảm" className="fw-400 spaces min-w-105" />
                        <TextField
                          className=" w-100"
                          name="lyDoMienGiam"
                        />
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
            <div className="d-flex justify-content-end pe-2">
              {isTaoPhieu
                ? <>
                  {isTaoHoaDonDienTu &&
                    <Button
                      className="btn-fill me-3"
                      onClick={handleTaoHoaDonDienTu}
                    >
                      Tạo hóa đơn điện tử
                    </Button>
                  }
                  <Button
                    className="btn-fill min-w-80px"
                    onClick={() => {resetForm(); setIsTaoPhieu(false)}}
                  >
                    Hủy
                  </Button>

                  <Button
                    className="btn-fill min-w-80px ms-3"
                    onClick={() => handleSubmit()}
                  >
                    Lưu phiếu
                  </Button>
                </>
                : <>
                  <Button
                    className="btn-fill me-3"
                    // onClick={handleOnClickHuyPhieu}
                  >
                    In phiếu
                  </Button>

                  <Button
                    className="btn-fill me-3"
                    onClick={handleOnClickHuyPhieu}
                  >
                    Hủy phiếu
                  </Button>

                  <Button
                    className="btn-fill me-3"
                    onClick={handleGoDuyetThanhToan}
                  >
                    Gỡ duyệt thanh toán
                  </Button>

                  <Button
                    className="btn-fill"
                    onClick={handleOnClickTaoPhieu}
                  >
                    Tạo phiếu
                  </Button>
                </>
              }
            </div>
          </Form>}
      </Formik>

      <ModalPhieuThu isPhieuHoanUng={isPhieuHoanUng} show={phieuThu} handleCloseDialog={() => setPhieuThu(false)} />

      <ModalPhieuThuTamUng show={phieuThuTamUng} handleCloseDialog={() => setPhieuThuTamUng(false)} />

      <ModalHuyPhieu show={openHuyPhieuDialog} handleCloseDialog={() => setOpenHuyPhieuDialog(false)} dichVuItems={dichVuItems}/>

      <ModalGoDuyetThanhToan show={openDialogGoDuyetThanhToan} handleCloseDialog={() => setOpenDialogGoDuyetThanhToan(false)} selectedRow={selectedRow} />

      <ConfirmDialog
        show={openDialogTaoHoaDonDienTu}
        title="Thông báo"
        message="Chưa cấu hình thông tin phát hành hóa đơn!"
        yes="Đồng ý"
        onYesClick={handleCloseTaoHoaDonDienTu}
        onCloseClick={handleCloseTaoHoaDonDienTu}
      />
    </div>
  );
};

export { PhieuThanhToan as PhieuThanhToanV2 };

