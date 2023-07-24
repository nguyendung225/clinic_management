import { ChangeEvent, useEffect, useState } from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { checkLayout } from "../utils/constFunction";
import { iChildren } from "../models/inputModel";

const ListInput = ({ ...props }) => {
    let { xl, lg, md, sm, sx, widthLable, layout } = props;
    const [listInput, setListInput] = useState(props.itemData?.children);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let value = event.target.value;
        if (
            listInput[index]?.concept &&
            listInput[index].concept.value !== undefined
        ) {
            let tempValue: any = listInput[index].concept.value;
            listInput[index].concept.value = (value === null ? tempValue : value)
            setListInput(listInput);
            props?.onChange(event, props.index, listInput);
        }
    }

    return (
        <Col
            xl={xl ? xl : null}
            lg={lg ? lg : null}
            md={md ? md : null}
            sm={sm ? sm : null}
            sx={sx ? sx : null}
            className={`py-2 px-4 ${props?.className ? props?.className : ""}`}
        >
            <Row>
                <Form.Group className={`
                    ${checkLayout(layout) ? "d-flex align-items-center" : ""}
                `}>
                    <Col
                        xl={widthLable ? widthLable : null}
                        lg={widthLable ? widthLable : null}
                        md={widthLable ? widthLable : null}
                        sm={widthLable ? widthLable : null}
                        sx={widthLable ? widthLable : null}
                    >
                        <FormLabel className={`${checkLayout(layout) ? "mb-0" : ""}`}>
                            <span>{props?.itemData?.name} </span>
                            <span>({props?.itemData?.units}): </span>
                        </FormLabel>
                    </Col>
                    <Col className="d-flex align-items-center">
                        {listInput?.length > 0 && listInput?.map((item: iChildren, index: number) => {
                            return (
                                <>
                                    <Form.Control
                                        {...props}
                                        type={item?.dataType}
                                        className={`
                                            customs-input w-100 
                                            ${item?.dataType === "Number" ? "no-spinners" : ""}
                                        `}
                                        name={item?.name ?? ""}
                                        value={item?.value ?? ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, index)}
                                    />
                                    {
                                        (listInput?.length > (index + 1)) && <h4 className="m-0 px-1">/</h4>
                                    }

                                </>
                            )
                        })}
                    </Col>
                </Form.Group>
            </Row>
        </Col>
    )
};

export default ListInput;
