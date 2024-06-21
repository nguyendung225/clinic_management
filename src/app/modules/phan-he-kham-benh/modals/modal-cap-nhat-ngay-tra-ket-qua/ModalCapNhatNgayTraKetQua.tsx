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
import moment from "moment";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalCapNhatNgayTraKetQua: FC<Props> = (props) => {
  let {
    open,
    handleClose,
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
    ngayTraKQ: Yup.date().min(moment(),"Phải lớn hơn ngày hôm nay!")
  });
  const handleFormSubmit = (values: any) => {
    console.log(values,"values cập nhật ngày trả kết quả");
  };

  return (
    <Modal show={open} animation centered>
      <Formik<any>
        initialValues={{ ngayTraKQ: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ touched, errors, setFieldValue, values }) => (
          <Form>
            <div className="timKiemBenhNhan">
              <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                  Cập nhật ngày trả kết quả
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
                      name="ngayTraKQ"
                      type="datetime-local"
                      label="Ngày trả kết quả"
                      labelClassName="min-w-125px"
                      value={values?.ngayTraKQ}
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

export default ModalCapNhatNgayTraKetQua;
