import { Form, Formik, FormikErrors } from "formik";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState
} from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TextField from "../../../component/TextField";
import {
  DEFAULT_PAGE_INDEX
} from "../../../utils/Constant";
import { DanhMucNgayNghiModel } from "../../models/ModelDatHen";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: any[];
  setSelectedRow?: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  dataNgayNghi?: any;
  setDataNgayNghi?: any;
}

const DanhMucNgayNghiDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataNgayNghi,
    setDataNgayNghi,
  } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);


  const getListBenhNhan = async () => {};

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({});
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);

  let validationSchema = Yup.object({
    tu: Yup.date().max(Yup.ref('den'),"Phải nhỏ hơn ngày đến ngày"),
    den: Yup.date().min(Yup.ref('tu'),"Phải nhỏ hơn ngày từ ngày")
  });
  const handleFormSubmit = (values: DanhMucNgayNghiModel) => {
    if (dataNgayNghi) {
      if (
        dataNgayNghi?.find(
          (item: DanhMucNgayNghiModel) =>
            item.tu === values?.tu && item.den === values?.den
        )
      ) {
        setDataNgayNghi(dataNgayNghi);
        toast.warning("Dịch vụ đã được chọn!");
      } else {
        setDataNgayNghi([...dataNgayNghi, values]);
        handleClose(false);
      }
    }
  };

  return (
    <Modal show={open} animation centered>
      <Formik<any>
        initialValues={{}}
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
                  Thêm ngày nghỉ
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
                      type="date "
                      label="Từ ngày"
                      labelClassName="min-w-75px"
                      placeholder="Ngày"
                      value={values.tu}
                    />
                  </div>
                  <div className="spaces flex-2 mb-4">
                    <TextField
                      name="den"
                      type="date "
                      label="Đến ngày"
                      labelClassName="min-w-75px"
                      placeholder="Ngày"
                      value={values.den}
                    />
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
            </Form>)}
      </Formik>
    </Modal>
  );
};

export default DanhMucNgayNghiDialog;
