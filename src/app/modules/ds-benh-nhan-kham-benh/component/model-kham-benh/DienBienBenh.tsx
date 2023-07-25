import { Form, Row } from "react-bootstrap"
import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";
import InputComponent from "../../../component/input-component";
import { KhamBenh } from "./ThongTinKhamBenh";
import HenKhamModal from "./dialogs/HenKhamModal";
import ChuyenVienModal from "./dialogs/ChuyenVienModal";
import NhapVienModal from "./dialogs/NhapVienModal";

export const DienBienBenh: FC<KhamBenh> = memo(({ thongTinKhamBenh, setThongTinKhamBenh }) => {
    
    const [xuTri, setXuTri] = useState<any>({});

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>, index: number, item: any) => {
        if (setThongTinKhamBenh) {
            setThongTinKhamBenh((prevData: any) => ({
                ...prevData,
                [item?.code]: {
                    ...prevData[item?.code],
                    value: event.target.value
                }
            }));
        }
        setXuTri({[event.target.value]: event.target.value})
    }, [setThongTinKhamBenh]);

    const handleCloseModal = ():void => {
        setXuTri({});
    }

    return (
        <>
        <Form className="p-4">
            <Row>
                <InputComponent
                    sm={6}
                    data={thongTinKhamBenh}
                    onChange={handleChange}
                />
            </Row>
        </Form>
        <HenKhamModal isOpenHenKhamModal={xuTri.henKham} handleCloseModal={handleCloseModal}/>
        <ChuyenVienModal isOpenChuyenVienModal={xuTri.chuyenVien} handleCloseModal={handleCloseModal}/>
        <NhapVienModal isOpenNhapVienModal={xuTri.nhapVien} handleCloseModal={handleCloseModal}/>
        </>
    );
});

export default DienBienBenh;