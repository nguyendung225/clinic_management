import React, { FC } from "react";
import { Autocomplete } from "../../../../component/Autocomplete";
import { Col, Row } from "react-bootstrap";
import TableCollapseCustom from "../../../../component/table-collapse-custom/TableCollapseCustom";
import { getDSNhomDichVu } from "../../../service/ChiDinhDVService";
import { iDSTabDichVu, iGroupDichVu } from "../../../models/ChiDinhDVModel";
interface XetNghiem {
  item: iDSTabDichVu;
  selectData: (data: any) => void;
  handleChangeSelect: (data: iGroupDichVu, item: iDSTabDichVu) => void;
}

const TabXetNghiem: FC<XetNghiem> = ({ ...props }) => {
  const columns = [
    {
      name: 'Tên dịch vụ',
      field: 'conceptAnswerName',
      sorting: true,
      headerCellProps: {
        minWidth: 200,
      }
    },
    {
      name: 'Mã dịch vụ',
      field: 'serviceCode',
      sorting: true,
      headerCellProps: {
        minWidth: 80,
      }
    },
    {
      name: 'Giá dịch vụ',
      field: 'servicePrice',
      sorting: false,
      headerCellProps: {
        minWidth: 100,
      }
    },
  ]

  const handleSearchObject = (data: any) => {

  }

  return (
    <div className="pt-4">
      <div>
        <Row className="mx-0">
          <Col sm={12} className="z-index-2">
            <label className="spaces pb-4">Dịch vụ</label>
            <Autocomplete
              options={[]}
              placeholder="Tìm nhóm dịch vụ"
              onChange={(option) => props?.handleChangeSelect(option, props?.item)}
              searchFunction={getDSNhomDichVu}
              searchObject={{ parentCode: props?.item?.parentCode }}
              urlData="data.data"
              displayLable="name"
              showCode={true}
            />
          </Col>
        </Row>

        <div className="mt-4">
          <TableCollapseCustom
            data={props?.item?.data}
            setSearchObject={handleSearchObject}
            setData={props?.item?.setData}
            selectData={props?.selectData}
            nameChildren="services"
            height={400}
            columnNameList={columns}
          />
        </div>
      </div>
    </div>
  )
};

export default TabXetNghiem
