import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TextField from "../../../component/TextField";
import { DEFAULT_PAGE_INDEX } from "../../../utils/Constant";
import LabelRequired from "../../../component/LabelRequired";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalLuuMauThuocMoi: FC<Props> = (props) => {
  let { open, handleClose } = props;
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
    tu: Yup.date().max(Yup.ref("den"), "Phải nhỏ hơn ngày đến ngày"),
    den: Yup.date().min(Yup.ref("tu"), "Phải nhỏ hơn ngày từ ngày"),
  });
  const handleFormSubmit = (values: any) => {};

  return (
    <Modal show={open} animation centered className="dialog-background">
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
                  Lưu mẫu thuốc mới
                </Modal.Title>
                <button
                  className="btn-close"
                  onClick={() => handleClose(false)}
                ></button>
              </Modal.Header>
              <Modal.Body className="py-16 px-24 spaces">
                <div>
                  <div className="spaces d-flex flex-2 mb-4">
                    <LabelRequired
                      className="ms-0 min-w-125px"
                      label="Nhóm đơn mẫu"
                    />
                    <AutocompleteV2
                      options={[]}
                      name="nhomDonMau"
                      isClearable={false}
                      className="autocomplete-custom radius spaces width-100 "
                    />
                  </div>
                  <div className="spaces flex-2 mb-4">
                    <TextField
                      name="tenMau "
                      label="Tên mẫu"
                      labelClassName="min-w-125px"
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
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalLuuMauThuocMoi;
