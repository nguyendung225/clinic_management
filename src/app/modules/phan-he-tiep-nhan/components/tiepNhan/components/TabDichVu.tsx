import { FC, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import LabelRequired from "../../../../component/LabelRequired";
import { generateRandomId } from "../../../../utils/FormatUtils";
import { ObjectSelectAutocomplete, bangKhamBenh, benhNhan } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import AutocompleteObject from "../../../../component/AutocompleteObject";
import { getDSPhongKham, getDanhSachYeuCauKham } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { FormikErrors, FormikTouched } from "formik";
import { SEARCH_OBJECT_MAX_SIZE, TRANG_THAI, VARIABLE_STRING } from "../../../../utils/Constant";
import DanhSachKhambenhTable from "../../../../phan-he-tiep-nhan-thanh-toan/modal-danh-sach-hen-kham/DanhSachKhambenhTable";

export type TabDichVu = {
    values: benhNhan;
    handleChangeSelect: (selectedObject: ObjectSelectAutocomplete, name: string, setFieldValue: (field: string, value: any) => void) => void;
    errors?: FormikErrors<benhNhan>;
    touched?: FormikTouched<benhNhan>;
    handleAddDSDichVu?: (dichVu: any) => void;
    handleDeleteDichVu?: (data: string) => void;
    setFieldValue: (field: string, value: any) => void;
    DSDichVu?: bangKhamBenh[];
}

const TabDichVu: FC<TabDichVu> = (props) => {
    let {
        values,
        handleChangeSelect,
        errors,
        touched,
        handleDeleteDichVu,
        handleAddDSDichVu,
        setFieldValue,
        DSDichVu,
    } = props;

    const [isDichVuDaChon, setIsDichVuDaChon] = useState<boolean>(false);

    useEffect(() => {
        if (values?.tenDichVu && values?.phongKham) {
            let checkDichVu = DSDichVu?.some(dichVu => dichVu.roomId === values?.phongKham?.id)

            if (checkDichVu) {
                setIsDichVuDaChon(false)
            } else {
                setIsDichVuDaChon(true)
            }
            return;
        }
        setIsDichVuDaChon(false)
    }, [values?.tenDichVu, values?.phongKham])

    const handleAddNewDichVu = () => {
        const order = {
            conceptId: values?.tenDichVu?.id,
            orderId: generateRandomId(),
            conceptName: values?.tenDichVu?.name,
            conceptCode: values?.tenDichVu?.code,
            departmentId: values?.phongKham?.departmentId,
            departmentcode: values?.phongKham?.code,
            departmentName: values?.phongKham?.departmentName,
            roomName: values?.phongKham?.name,
            roomId: values?.phongKham?.id,
            price: values?.tenDichVu?.price,
            totalPrice: values?.tenDichVu?.price,
            promotionPrice: 0,
            promotionPercent: 0,
            quantity: 1,
            insurancePrice: values?.tenDichVu?.insurancePrice,
            statusId: TRANG_THAI.CHUA_THANH_TOAN,
        };
        handleAddDSDichVu && handleAddDSDichVu(order);
    };

    return (
        <div className="h-100">
            <Row className="spaces pt-4 z-index-2">
                <Col xs={4} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Tên dịch vụ"
                            isRequired
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.tenDichVu || null}
                            name="tenDichVu"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "tenDichVu", setFieldValue);
                            }}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                            touched={touched?.tenDichVu}
                            errors={errors?.tenDichVu}
                            searchFunction={getDanhSachYeuCauKham}
                            searchObject={{}}
                            urlData={"data.data"}
                        />
                    </div>
                </Col>
                <Col xs={7} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Phòng khám"
                            isRequired
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.phongKham || ""}
                            name="phongKham"
                            onChange={(selectedOption) => handleChangeSelect(selectedOption, "phongKham", setFieldValue)}
                            searchFunction={values.tenDichVu?.id ? getDSPhongKham : undefined}
                            searchObject={{ ...SEARCH_OBJECT_MAX_SIZE }}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                            touched={touched?.phongKham}
                            errors={errors?.phongKham}
                        />
                    </div>
                </Col>
                <Col xs={1} className="spaces d-flex flex-top pt-24">
                    <Button
                        className="spaces btn-navy addService"
                        onClick={handleAddNewDichVu}
                        disabled={!isDichVuDaChon}
                    > + </Button>
                </Col>
            </Row>
            <div className="tableKhamBenh" >
                <DanhSachKhambenhTable
                    data={DSDichVu}
                    handleDelete={handleDeleteDichVu}
                />
            </div>
        </div>
    );
}

export default TabDichVu;
