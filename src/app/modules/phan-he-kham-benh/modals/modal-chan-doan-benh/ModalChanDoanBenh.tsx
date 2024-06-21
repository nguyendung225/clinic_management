import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import { OptionBenhKemTheo } from "../../components/FakeData";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalChanDoanBenh: FC<Props> = (props) => {
  let { handleClose } = props;

  const [arrBenhPhu, setArrBenhPhu] = useState<
    { id: string; code: string; name: string }[]
  >([]);

  let validationSchema = Yup.object({});
  const handleFormSubmit = (values: any) => {
    console.log(values, "values cập nhật ngày trả kết quả");
  };

  const addBenhPhu = (e: any) => {
    let uniqueID = Date.now().toString();
    const arr = [...arrBenhPhu, { id: uniqueID, code: "", name: "" }];
    setArrBenhPhu(arr);
  };
  // console.log(document.getElementsByClassName("fade"));
  
  return (
    <Modal show={true} animation centered>
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
                <Modal.Title className="text-pri">Chẩn đoán bệnh</Modal.Title>
                <button
                  className="btn-close"
                  onClick={() => handleClose(false)}
                ></button>
              </Modal.Header>
              <Modal.Body className="py-16 px-24 spaces">
                <div>
                  <div className="d-flex mb-4px">
                    <LabelRequired label="Bệnh chính" className="min-w-75px" />
                    <AutocompleteV2
                      options={OptionBenhKemTheo}
                      name="benhChinh  autocomplete-custom radius spaces width-100 "
                      getOptionLabel={(option) =>
                        `${option.code} - ${option.name}`
                      }
                    />
                  </div>
                  <div className="d-flex mb-4px">
                    <div className="spaces d-flex width-85 me-2">
                      <LabelRequired label="Bệnh phụ" className="min-w-75px" />
                      <AutocompleteV2
                        options={OptionBenhKemTheo}
                        name="benhPhu"
                        className="autocomplete-custom radius spaces width-100 z-index-1060"
                        getOptionLabel={(option) =>
                          `${option.code} - ${option.name}`
                        }
                      />
                    </div>
                    <Button
                      className="btn-fill spaces width-15"
                      onClick={(e) => addBenhPhu(e)}
                    >
                      +
                    </Button>
                  </div>
                  {arrBenhPhu?.length !== 0 &&
                    arrBenhPhu?.map(
                      (
                        item: { id: string; code: string; name: string },
                        index
                      ) => {
                        return (
                          <div
                            key={index}
                            id={arrBenhPhu.length.toString()}
                            className="d-flex mb-4px"
                          >
                            <div className="spaces d-flex width-85 me-2">
                              <div className="min-w-75px"></div>
                              <AutocompleteV2
                                options={OptionBenhKemTheo}
                                value={item || { code: "", name: "" }}
                                name="benhPhu"
                                className="autocomplete-custom radius spaces width-100 "
                                getOptionLabel={(option) =>
                                  option.code
                                    ? `${option.code} - ${option.name}`
                                    : ""
                                }
                              />
                            </div>
                            <Button
                              id={arrBenhPhu.length.toString()}
                              className="btn-fill spaces width-15"
                              onClick={() => {
                                setArrBenhPhu(
                                  arrBenhPhu?.filter((i) => i.id !== item.id)
                                );
                              }}
                            >
                              -
                            </Button>
                          </div>
                        );
                      }
                    )}
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

export default ModalChanDoanBenh;
