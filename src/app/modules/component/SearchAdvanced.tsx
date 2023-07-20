import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

type Props = {}

export const SearchAdvanced = (props: Props) => {
    return (
        <div>
            <Row>
                <Col sm="4">
                    <div>
                        <p className='w-100px m-0 pr-5'>
                            Từ ngày
                        </p>
                        <input
                            className="form-control customs-input"
                            name="ten"
                            type="date"
                        />
                    </div>
                </Col>
                <Col sm="5">
                    <div>
                        <p className='w-100px m-0 pr-5'>
                            Đến ngày
                        </p>
                        <input
                            className="form-control customs-input"
                            name="ten"
                            type="date"
                        />
                    </div>
                </Col>
                <Col sm="3">
                    <p></p>
                    <Button className='btn-navy mt-2 min-w-125px p-2'>Tìm kiếm</Button>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                    <div>
                        <p className='w-100px m-0 pr-5'>
                            Mã bệnh nhân
                        </p>
                        <input
                            className="form-control customs-input"
                            name="ten"
                            type="text"
                        />
                    </div>
                </Col>
                <Col sm="5">
                    <div>
                        <p className='w-100px m-0 pr-5'>
                            Trạng thái
                        </p>
                        <input
                            className="form-control customs-input"
                            name="ten"
                            type="select"
                        />
                    </div>
                </Col>
                <Col sm="3">
                    <p></p>
                    <Button className='btn-navy white mt-2 min-w-125px p-2 text-dark'>Xuất excel</Button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchAdvanced