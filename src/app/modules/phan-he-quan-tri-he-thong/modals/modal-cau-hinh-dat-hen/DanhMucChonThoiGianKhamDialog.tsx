import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { DanhMucChonThoiGianKhamModel } from "../../models/ModelDatHen";
import { Form, Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { DEFAULT_PAGE_INDEX, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES } from "../../../utils/Constant";
import { AppContext } from "../../../appContext/AppContext";
import TextField from "../../../component/TextField";
import LabelRequired from "../../../component/LabelRequired";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: any[];
  setSelectedRow?: React.Dispatch<React.SetStateAction<any[]>>;
  dataChonThoiGianKham?: any;
  setDataChonThoiGianKham?: any;
}

const DanhMucChonThoiGianKhamDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataChonThoiGianKham,
    setDataChonThoiGianKham,
  } = props;
  let arrSort = dataChonThoiGianKham.sort();

  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const [dichVuData, setChonThoiGianKhamData] = useState({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES,
  });

  const getListBenhNhan = async () => {};

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({});
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);

  let validationSchema = Yup.object({
  });
  const handleFormSubmit = (values: DanhMucChonThoiGianKhamModel) => {
    if (dataChonThoiGianKham) {
      if (
        dataChonThoiGianKham?.find(
          (item: DanhMucChonThoiGianKhamModel) => item.stt === values?.stt
        )
      ) {
        setDataChonThoiGianKham(dataChonThoiGianKham);
        toast.warning("Dịch vụ đã được chọn!");
      } else {
        setDataChonThoiGianKham([...dataChonThoiGianKham, values]);
        handleClose(false);
      }
    }
  };

  const checkPage = () => {
    if (page !== DEFAULT_PAGE_INDEX) {
      setPage(DEFAULT_PAGE_INDEX);
    } else {
      getListBenhNhan();
    }
  };

  return (
    <Modal show={open} animation centered>
      <Formik<any>
        initialValues={{stt:(Number(arrSort[arrSort.length - 1].stt) + 1)}}
        validationSchema={validationSchema}
        validateOnChange={true}
        validate={(values) => {
          const errors: FormikErrors<any> = {};
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({ touched, errors, setFieldValue, values }) => (
          <Form>
            <div className="timKiemBenhNhan">
              <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                  Chọn thời gian khám
                </Modal.Title>
                <button
                  className="btn-close"
                  onClick={() => handleClose(false)}
                ></button>
              </Modal.Header>
              <Modal.Body className="py-16 px-24 spaces">
                <div>
                  <div className="spaces flex-2 mb-4">
                    <TextField
                      name="tu"
                      type="time "
                      label="Từ"
                      labelClassName="min-w-75px"
                      value={values.tu}
                    />
                  </div>
                  <div className="spaces flex-2 mb-4">
                    <TextField
                      name="den"
                      type="time "
                      label="Đến"
                      labelClassName="min-w-75px"
                      value={values.den}
                    />
                  </div>
                  <div className="spaces d-flex flex-2">
                    <LabelRequired label="STT" className="min-w-75px" />
                    <input
                      className="form-control customs-input  spaces w-100"
                      type="number"
                      value={Number(arrSort[arrSort.length - 1].stt) + 1}
                    ></input>
                    {/* <TextFieldV2
                      name="stt "
                      label="STT"
                      labelClassName="min-w-75px"
                      
                      value={() => {
                        let arrSort = dataChonThoiGianKham.sort();
                        return arrSort[arrSort.length - 1].stt + 1;
                      }}
                    /> */}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center py-1">
                <Button
                  className="btn-fill"
                  type="submit"
                  // onClick={() => handleFormSubmit(values)}
                >
                  <IconButtonSave/>
                  <span>Lưu</span>
                </Button>
                <Button
                  className="btn-outline"
                  onClick={() => handleClose(false)}
                >
                  Đóng
                </Button>
              </Modal.Footer>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default DanhMucChonThoiGianKhamDialog;
