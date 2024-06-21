import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormikErrors, FormikTouched, useFormik } from 'formik';
import * as Yup from "yup";
import { IChucDanh, IChucVu, IGioiTinh, IKhoa, INhanVien, IPhong, ITrangThai, IUser, gender } from '../../models/ModelNhanVien';
import { ReactNode, useEffect, useState } from 'react';
import { createNhanVien, getDanhSachKhoa, getDanhSachLocation, getDanhSachPhong, getDanhSachRole, getSimpleCategory, updateNhanVien } from '../../services/TabNhanVienServices';
import { toast } from "react-toastify"
import { CODE_SUCCESS, ERROR_MESSAGE, POSITION_TYPE, STATUS_TYPE, TITLE_TYPE } from '../../../utils/Constant';
import { CREATE_NHAN_VIEN_SUCCESS, UPDATE_NHAN_VIEN_SUCCESS } from '../../constants/TabNhanVienConstant';
import AutocompleteField from '../../../component/AutocompleteField';

interface IProps {
    data?: INhanVien
    handleClose: () => void
    shouldUpdateTableData: () => void
}

const listGenders = [
    {
        value: gender.MALE,
        name: "Nam"
    },
    {
        value: gender.FEMALE,
        name: "Nữ"
    }
]

const initialValues: INhanVien = {
    totalWorkingYears: 0,
    person: {
        name: "",
        birthDay: "",
        gender: null
    },
    email: "",
    academicLevel: "",
    academicDegree: "",
    educationalQualification: "",
    certification: "",
    title: null,
    position: null,
    status: null,
    department: null,
    room: null,
    location: null,
    user: {
        userName: "",
        password: "",
        roles: [],
    }
}


function DanhMucNhanVienDialog({
    data,
    handleClose,
    shouldUpdateTableData
}: IProps) {
    
    const [danhSachPhong, setDanhSachPhong] = useState<IPhong[]>([]);


    const [hasUser, setHasUser] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    }
    
    const validationSchema = Yup.object().shape({
        person: Yup.object({
            name: Yup.string().trim()
                .required("Trường này là bắt buộc"),
            birthDay: Yup.date()
                .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "Yêu cầu trên 18 tuổi")
                .nullable(),
            gender: Yup.object().nullable(),
            phoneNumber: Yup.string().trim()
                .nullable(),
        }),
        totalWorkingYears: Yup.number().nullable()
            .min(0, "Không hợp lệ"),
        email: Yup.string().trim().nullable(),
        academicLevel: Yup.string().trim().nullable(),
        academicDegree: Yup.string().trim().nullable(),
        educationalQualification: Yup.string().trim().nullable(),
        certification: Yup.string().trim().nullable(),
        title: Yup.object().nullable().required("Trường này là bắt buộc"),
        position: Yup.object().nullable().required("Trường này là bắt buộc"),
        status: Yup.object().nullable().required("Trường này là bắt buộc"),
        department: Yup.object().nullable().required("Trường này là bắt buộc"),
        room: Yup.object().nullable().required("Trường này là bắt buộc"),
        location: Yup.object().nullable().required("Trường này là bắt buộc"),
        user: Yup.object({
            userName: Yup.string().trim().when("user", {
                is: () => hasUser && !!!data?.user,
                then: Yup.string().trim()
                    .required("Trường này là bắt buộc")
                    .min(6, "Độ dài tối thiểu là 6 ký tự")
                    .max(225, "Độ dài tốt đa là 225 ký tự"),
                otherwise: Yup.string().trim()
            }),
            password: Yup.string().trim().when("user", {
                is: () => hasUser && !!!data?.user,
                then: Yup.string().trim()
                    .required("Trường này là bắt buộc")
                    .min(8, "Độ dài tối thiểu là 8 ký tự"),
                otherwise: Yup.string().trim()
            }),
            roles: Yup.array().nullable().when("user", {
                is: () => hasUser && !!!data?.user,
                then: Yup.array().nullable().min(1, "Trường này là bắt buộc"),
                otherwise: Yup.array().nullable()
            })
        }).default({}),
    })

    const formik = useFormik({
        initialValues: data ? {
            ...data,
            person: {
                ...data.person,
                gender: listGenders.find(item => item.value === data.person.gender)
            },
            user: data.user ? {
                ...data.user,
                password: "",
            } : {
                userName: "",
                password: "",
                roles: [],
            }
        } : initialValues,
        validationSchema,
        onSubmit: (values) => {
            let submitValues: INhanVien = {
                ...values,
                person: {
                    ...values.person,
                    gender: values.person.gender ? (values.person.gender as {
                        value: gender,
                        name: string
                    })?.value : null
                },
                user: hasUser && !!!data?.user ? values.user : null
            }
            !values?.id
                ? handleCreateNhanVien(submitValues)
                : handleUpdateNhanVien(submitValues)
        }
    })
    
    const handleCreateNhanVien = async (data: INhanVien) => {
        try {
            const response = await createNhanVien(data);
            if (response?.data?.code === CODE_SUCCESS) {
                shouldUpdateTableData();
                handleClose();
                toast.success(CREATE_NHAN_VIEN_SUCCESS);
            } else {
                toast.error(ERROR_MESSAGE);
            }
        } catch (e) {
            toast.error(ERROR_MESSAGE);
        }
    }

    const handleUpdateNhanVien = async (data: INhanVien) => {
        try {
            const response = await updateNhanVien(data);
            if (response?.data?.code === CODE_SUCCESS) {
                shouldUpdateTableData();
                handleClose();
                toast.success(UPDATE_NHAN_VIEN_SUCCESS);
            } else {
                toast.error(ERROR_MESSAGE);
            }
        } catch (e) {
            toast.error(ERROR_MESSAGE);
        }
    }

    const handleGetDanhSachPhong = async (departmentId: string) => {
        try {
            const response = await getDanhSachPhong(departmentId);
            if (response?.data?.code === CODE_SUCCESS) {
                setDanhSachPhong(response.data.data.content);
            } else {
                toast.error(ERROR_MESSAGE);
            }
        } catch (e) {
            toast.error(ERROR_MESSAGE);
        }
    }

    const handleChangeAutocomplete = <TOption extends unknown>(field: string, selectedOption: TOption) => {
        formik.setFieldValue(field, selectedOption);
    };

    useEffect(() => {
        if (formik.values.department) {
            handleGetDanhSachPhong(formik.values.department?.id as string);
        } else {
            setDanhSachPhong([]);
        }
    }, [formik.values.department])

    return (
        <Container>
            <Modal
                centered
                show={true}
                onHide={handleClose}
                size='xl'
                className="dialog__container"
                scrollable
            >
                <Modal.Header closeButton className='py-5 header-modal'>
                    <Modal.Title>
                        <h2 className='text-white'>Thông tin nhân viên</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='dialog__content py-4'>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row className="mb-3">
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Họ tên</Form.Label>
                                    <Form.Control size='sm' type="text"
                                        name="person.name"
                                        value={formik.values.person?.name || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.person?.name && Boolean(formik.errors.person?.name)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.person?.name}</Form.Control.Feedback>

                                </Form.Group>
                            </Col>
                             <Col>
                                <Form.Group>
                                    <Form.Label>Ngày sinh</Form.Label>
                                    <Form.Control size='sm' type="date"
                                        name="person.birthDay"
                                        value={formik.values.person?.birthDay || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.person?.birthDay && Boolean(formik.errors.person?.birthDay)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.person?.birthDay}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Giới tính</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true} 
                                        name="person.gender"
                                        options={listGenders}
                                        value={formik.values.person?.gender}
                                        onChange={(value) => handleChangeAutocomplete<IGioiTinh>("person.gender",value)}
                                        errors={formik.errors.person?.gender}
                                        touched={formik.touched.person?.gender}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-6">
                            <Col >
                                <Form.Group>
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control size='sm' type="text"
                                        name="person.phoneNumber"
                                        value={formik.values.person?.phoneNumber || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.person?.phoneNumber && Boolean(formik.errors.person?.phoneNumber)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.person?.phoneNumber}</Form.Control.Feedback>
                                </Form.Group></Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size='sm' type="email"
                                        name="email"
                                        value={formik.values.email || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                       <Row className="mb-6">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Chức danh</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="title"
                                        options={[]}
                                        searchFunction={getSimpleCategory}
                                        searchObject={{type: TITLE_TYPE}}
                                        value={formik.values?.title?.name || null}
                                        onChange={(value) => handleChangeAutocomplete<IChucDanh>("title",value)}
                                        // errors={formik.errors.title}
                                        // touched={formik.touched.title}
                                    />
                                </Form.Group>
                            </Col>
                             <Col>
                                <Form.Group>
                                    <Form.Label>Chức vụ</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="position"
                                        options={[]}
                                        searchFunction={getSimpleCategory}
                                        searchObject={{ type: POSITION_TYPE }}
                                        value={formik.values.position?.name}
                                        onChange={(value) => handleChangeAutocomplete<IChucVu>("position", value)}
                                        errors={formik.errors.position}
                                        touched={formik.touched.position}
                                    />
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group>
                                    <Form.Label>Số năm công tác</Form.Label>
                                    <Form.Control size='sm' type="number"
                                        name="totalWorkingYears"
                                        value={formik.values.totalWorkingYears}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.totalWorkingYears && Boolean(formik.errors.totalWorkingYears)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.totalWorkingYears}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Trạng thái</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="status"
                                        options={[]}
                                        searchFunction={getSimpleCategory}
                                        searchObject={{ type: STATUS_TYPE }}
                                        value={formik.values.status?.name}
                                        onChange={(value) => handleChangeAutocomplete<ITrangThai>("status", value)}
                                        errors={formik.errors.status}
                                        touched={formik.touched.status}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col >
                                <Form.Group>
                                    <Form.Label>Học hàm</Form.Label>
                                    <Form.Control size='sm' type="text"
                                        name="academicLevel"
                                        value={formik.values.academicLevel || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.academicLevel && Boolean(formik.errors.academicLevel)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.academicLevel}</Form.Control.Feedback>
                                </Form.Group></Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Học vị</Form.Label>
                                    <Form.Control size='sm' type="text"
                                        name="academicDegree"
                                        value={formik.values.academicDegree || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.academicDegree && Boolean(formik.errors.academicDegree)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.academicDegree}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-6">
                            <Col >
                                <Form.Group>
                                    <Form.Label>Bằng cấp</Form.Label>
                                    <Form.Control size='sm' type="text"
                                        name="educationalQualification"
                                        value={formik.values.educationalQualification || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.educationalQualification && Boolean(formik.errors.educationalQualification)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.educationalQualification}</Form.Control.Feedback>
                                </Form.Group></Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Chứng chỉ</Form.Label>
                                    <Form.Control size='sm' type="email"
                                        name="certification"
                                        value={formik.values.certification || ""}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.certification && Boolean(formik.errors.certification)}
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.certification}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row> 
                        <Row className="mb-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Khoa</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="department"
                                        options={[]}
                                        searchFunction={getDanhSachKhoa}
                                        searchObject={{}}
                                        value={formik.values.department?.name}
                                        onChange={(value) => handleChangeAutocomplete<IKhoa>("department", value)}
                                        errors={formik.errors.department}
                                        touched={formik.touched.department}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Phòng</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="room"
                                        options={danhSachPhong}
                                        value={formik.values.room?.name}
                                        onChange={(value) => handleChangeAutocomplete<IPhong>("room", value)}
                                        errors={formik.errors.room}
                                        touched={formik.touched.room}
                                        dependencies={[formik.values.department]}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Cơ sở</Form.Label>
                                    <AutocompleteField
                                        closeMenuOnSelect={true}
                                        name="location"
                                        options={[]}
                                        searchFunction={getDanhSachLocation}
                                        searchObject={{}}
                                        value={formik.values.location?.name}
                                        onChange={(value) => handleChangeAutocomplete<IPhong>("location", value)}
                                        errors={formik.errors.location}
                                        touched={formik.touched.location}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={3} className='my-4 form-check-user__dmvn'>
                                <Form.Check 
                                    type="checkbox"
                                    id="checkbox"
                                    label={!data?.user ? "Tạo tài khoản" : "Sửa thông tin tài khoản"}
                                    checked={hasUser}
                                    onChange={(e) => setHasUser(e.target.checked)}
                                />
                            </Col>
                            {
                                hasUser && <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Tên tài khoản</Form.Label>
                                            <Form.Control size='sm' type="text"
                                                disabled={!!data?.user}
                                                name="user.userName"
                                                value={formik.values.user?.userName || ""}
                                                onChange={formik.handleChange}
                                                isInvalid={(formik.touched.user as FormikTouched<Partial<IUser>> | undefined)?.userName
                                                    && Boolean((formik.errors.user as FormikErrors<Partial<IUser>> | undefined)?.userName)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {(formik.errors.user as FormikErrors<Partial<IUser>> | undefined)?.userName as ReactNode}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='input__password'>
                                            <Form.Label>Mật khẩu</Form.Label>
                                            <Form.Control size='sm' type={showPassword ? "text" : "password"}
                                                disabled={!!data?.user}
                                                name="user.password"
                                                value={formik.values.user?.password || ""}
                                                onChange={formik.handleChange}
                                                isInvalid={(formik.touched.user as FormikTouched<Partial<IUser>> | undefined)?.password
                                                    && Boolean((formik.errors.user as FormikErrors<Partial<IUser>> | undefined)?.password)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {(formik.errors.user as FormikErrors<Partial<IUser>> | undefined)?.password as ReactNode}
                                            </Form.Control.Feedback>
                                            {
                                                <div onClick={handleChangeShowPassword}>
                                                    <i className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
                                                </div>
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} className='mt-3'>
                                        <Form.Group>
                                            <Form.Label>Role</Form.Label>
                                            <AutocompleteField
                                                closeMenuOnSelect={false}
                                                disabled={!!data?.user}
                                                name="user.roles"
                                                options={[]}
                                                searchFunction={getDanhSachRole}
                                                searchObject={{}}
                                                value={formik.values.user?.roles}
                                                onChange={(value) => handleChangeAutocomplete<any>("user.roles", value)}
                                                getOptionLabel={option => option.display}
                                                errors={(formik.errors.user as FormikErrors<Partial<IUser>> | undefined)?.roles}
                                                touched={(formik.touched.user as FormikTouched<Partial<IUser>> | undefined)?.roles}
                                                isMulti={true}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            }
                        </Row> 
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center py-2">
                    <Button className="btn-navy min-w-50px" type="submit">
                        Lưu
                    </Button>
                    <Button className="btn-navy-outlined" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default DanhMucNhanVienDialog;