import {useState} from "react"
import {Col, Collapse, Row, Table} from "react-bootstrap"
import "./CollapseCustomChildren.scss"
import {IDichVuItem} from "../../../../models/ModelDichVuGia"
import CustomIconButton from "../../../../../component/custom-icon-button/CustomIconButton"

type Props = {
  item: any
  index: number
  handleIconDelete: (data: IDichVuItem) => void
  handleIconUpdate: (data: IDichVuItem) => void
  data: any[]
}
const CollapseCustomChildren = (props: Props) => {
  const {index, item, handleIconDelete, handleIconUpdate, data} = props
  const [open, setOpen] = useState<Number[]>([])

  const handleClickCollapse = (index: number) => {
    if (open.includes(index)) {
      const newOpen = open.filter((num) => num !== index)
      setOpen(newOpen)
    } else {
      const newOpen = [...open]

      newOpen.push(index)
      setOpen(newOpen)
    }
  }

  return (
    <div>
      <div
        onClick={() => handleClickCollapse(index)}
        className="collapse-custom-children d-flex align-items-center position-relative"
      >
        <h6 className="mb-0 ms-6">{item?.name}</h6>
        <span className="collapse-icon-children">
          {open.includes(index) ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </span>
      </div>

      <Collapse in={open.includes(index)}>
        <Row className="p-0">
          <Col className="collapse-body-children">
            <Table className="table-collapse-children" id="example-collapse-text">
              <tbody className="table-collapse-body-children">
                {data.length > 0 ? (
                  data?.map((item, index) => {
                    return (
                      <tr key={index} className="table-collapse-list-children">
                        <td className="table-collapse-item-children">
                          <Row>
                            <Col className="d-flex justify-content-center">
                              <CustomIconButton
                                variant="edit"
                                onClick={() => handleIconUpdate(item)}
                              >
                                <i className="bi bi-pencil-square text-navy"></i>
                              </CustomIconButton>

                              <CustomIconButton
                                variant="delete"
                                onClick={() => handleIconDelete(item)}
                              >
                                <i className="bi bi-trash3-fill text-danger"></i>
                              </CustomIconButton>
                            </Col>
                          </Row>
                        </td>
                        <td className="table-collapse-item-children">{item?.conceptAnswerName}</td>
                        <td className="table-collapse-item-children">{item?.serviceCode}</td>
                        <td className="table-collapse-item-children">{item?.servicePrice}</td>
                        <td className="table-collapse-item-children">{item?.insurancePrice}</td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td>
                      <h5>Không có bản ghi nào</h5>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Collapse>
    </div>
  )
}

export default CollapseCustomChildren
