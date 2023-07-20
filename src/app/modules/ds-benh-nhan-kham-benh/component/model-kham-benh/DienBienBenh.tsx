import { Col, Form, Row } from "react-bootstrap"
import { Autocomplete } from "../../../component/Autocomplete"

export const DienBienBenh = () => {

    const listBoPhanFirst = [
        { type: "1", text: 'TMH', name: 'tmh' },
        { type: "2", text: 'RHM', name: 'rhm' },
        { type: "3", text: 'Mắt', name: 'mat' },
        { type: "4", text: 'Nội tiết', name: 'noiTiet' },
        { type: "5", text: 'Tâm thần', name: 'tamThan' },
        { type: "6", text: 'Dinh dưỡng', name: 'dinhDuong' },
        { type: "7", text: 'Vận động', name: 'vanDong' },
        { type: "8", text: 'Sản phụ khoa', name: 'sanPhuKhoa' },
    ];

    const listBoPhanLast = [
        { type: "9", text: 'Chung', name: 'chung' },
        { type: "10", text: 'Tuần hoàn', name: 'tuanHoan' },
        { type: "11", text: 'Hô hấp', name: 'hoHap' },
        { type: "12", text: 'Tiêu hóa', name: 'tieuHoa' },
        { type: "13", text: 'Thận tiết niệu', name: 'thanTietNieu' },
        { type: "14", text: 'Thần kinh', name: 'thanKinh' },
        { type: "15", text: 'Cơ xương khớp', name: 'coXuongKhop' },
    ]

    return (
        <Form className="px-4 pb-4">
            <Row>
                <Col sm="6">
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Diễn biến bệnh & triệu chứng LS:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Chẩn đoán:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Khám toàn thân:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={4} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Tóm tắt kết quả CLS:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Xử trí:
                        </Form.Label>
                        <Col>
                            <Autocomplete options={[]} />
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Tiền sử của BN:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Tiền sử bệnh của gia đình:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Chẩn đoán ban đầu:
                        </Form.Label>
                        <Col>
                            <Form.Control className="customs-input" ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center spaces mt-15'>
                        <Form.Label className="py-2 mb-0">
                            Hướng điều trị:
                        </Form.Label>
                        <Col>
                            <Autocomplete options={[]} />
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Phương pháp điều trị:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className='align-items-center'>
                        <Form.Label className="py-2 mb-0">
                            Ghi chú:
                        </Form.Label>
                        <Col>
                            <Form.Control as='textarea' rows={2} ></Form.Control>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group as={Row} className='align-items-center'>
                <Form.Label
                    className="spaces pr-0"
                >
                    Khám bộ phận:
                </Form.Label>
                <div className="d-flex mb-3">
                    {listBoPhanFirst.map((item) => {
                        return (
                            <Form.Check
                                className="customs-width_radio px-9"
                                label={`${item.text}`}
                                name={`khamBoPhan`}
                                type='radio'

                            />
                        )
                    })}
                </div>
                <div className="d-flex mb-2">
                    {listBoPhanLast.map((item) => {
                        return (
                            <Form.Check
                                className="customs-width_radio px-9"
                                label={`${item.text}`}
                                name={`khamBoPhan`}
                                type='radio'

                            />
                        )
                    })}
                </div>
                <Col>
                    <Form.Control as='textarea' rows={2} ></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center'>
                <Form.Label
                    className="spaces pr-0"
                >
                    Bệnh chính:
                </Form.Label>
                <Col>
                    <Autocomplete options={[]} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center'>
                <Form.Label
                    className="spaces pr-0"
                >
                    Bệnh phụ:
                </Form.Label>
                <Col>
                    <Autocomplete options={[]} />
                </Col>
            </Form.Group>
        </Form>
    )
}

export default DienBienBenh