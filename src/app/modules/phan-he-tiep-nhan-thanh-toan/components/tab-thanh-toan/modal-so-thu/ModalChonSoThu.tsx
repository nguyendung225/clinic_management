import { Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";

type Props = {
  show: {
    openChonSoThu: boolean;
    openDanhSachSoThu: boolean;
    openTaoMoiSoThu: boolean;
  };
  onHide: Dispatch<
    SetStateAction<{
      openChonSoThu: boolean;
      openDanhSachSoThu: boolean;
      openTaoMoiSoThu: boolean;
    }>
  >;
};

const ModalChonSoThu: FC<Props> = (props) => {
  const { show, onHide } = props;
  const handleChangeSelect = () => {};
  let validationSchema = Yup.object({});
  const handleFormSubmit = () => {};
  const options = [
    { code: 0, name: "Sổ 1" },
    { code: 1, name: "Sổ 2" },
    { code: 2, name: "Sổ 3" },
  ];
  return (
    <>
      <Modal
        centered
        show={show.openChonSoThu}
        onHide={() =>
          onHide({ openChonSoThu: false, openDanhSachSoThu: false, openTaoMoiSoThu: false })
        }
        size="lg"
        contentClassName="w-75 m-auto"
      >
        <Modal.Header closeButton className="py-5 bg-white">
          <Modal.Title>Chọn sổ thu tiền</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-8">
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
              <div>
                <div className=" w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ tạm ứng" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soTamUng"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
                <div className=" w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ hoàn ứng" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soHoanUng"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
                <div className="w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ thu tiền, hoàn tiền" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soThuTien"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
                <div className="w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ thu tiền (có VAT)" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soThuTien"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
                <div className="w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ thu tiền (nhà thuốc)" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soThuTien"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
                <div className=" w-100 mb-4 d-flex">
                  <LabelRequired label="Sổ miễn giảm" className="ps-2 min-w-150px" />
                  <AutocompleteV2
                    options={options}
                    name="soMienGiam"
                    onChange={(selectedOption) => handleChangeSelect()}
                    className="autocomplete-custom radius width-100 spaces "
                  />
                </div>
              </div>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button
            className="btn-fill"
            onClick={() =>
              onHide({ openChonSoThu: false, openDanhSachSoThu: false, openTaoMoiSoThu: true })
            }
          >
            <i className="fs-4 bi bi-plus"></i> Thêm mới
          </Button>
          <Button className="btn-fill" type="submit">
            <i className="fs-6 me-1 bi bi-floppy"></i> Lưu
          </Button>
          <Button
            className="btn-outline"
            onClick={() =>
              onHide({ openChonSoThu: false, openDanhSachSoThu: false, openTaoMoiSoThu: false })
            }
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { ModalChonSoThu };
