import { Form, Row } from "react-bootstrap"
import React, { ChangeEvent, FC, memo, useCallback } from "react";
import InputComponent from "../../../component/input-component";
import { KhamBenh } from "./ThongTinKhamBenh";

export const DienBienBenh: FC<KhamBenh> = memo(({ thongTinKhamBenh, setThongTinKhamBenh }) => {
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>, index: number, item: any) => {
        if (setThongTinKhamBenh) {
            setThongTinKhamBenh((prevData: any) => ({
                ...prevData,
                [item?.name]: {
                    ...prevData[item?.name],
                    value: event.target.value
                }
            }));
        }
    }, [setThongTinKhamBenh]);

    return (
        <Form className="p-4">
            <Row>
                <InputComponent
                    sm={6}
                    data={thongTinKhamBenh}
                    onChange={handleChange}
                />
            </Row>
        </Form>
    );
});

export default DienBienBenh;