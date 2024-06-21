import React, { FC, useState } from "react";
import { Autocomplete } from "../../../../component/Autocomplete";
import { BangXetNghiemModel } from "../../../../phan-he-tiep-nhan-thanh-toan/models/ChiDinhCLSModel";
import { Col, Form, Row, Table } from "react-bootstrap";
import { dataXetNghiem } from "../../../../phan-he-tiep-nhan-thanh-toan/constants/ChiDinhCLSConst";
import "../../../PhanHeTiepNhan.scss"
// import TableCollapseCustom from "../../../../component/table-collapse-custom-v3/TableCollapseCustom";

interface Group {
  name: string;
  children: BangXetNghiemModel[];
}

const TabXetNghiem: FC = () => {

  const groupedData = dataXetNghiem.map(group => ({
    name: group.title,
    children: group.children,
  }));

  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const toggleGroup = (groupName: string) => {
    if (expandedGroups.includes(groupName)) {
      setExpandedGroups(expandedGroups.filter(group => group !== groupName));
    } else {
      setExpandedGroups([...expandedGroups, groupName]);
    }
  };

  return (
    <div className="pt-4">
      <div>
        <Row className="mx-0">
          <Col sm={6} className="z-index-2">
            <label className="spaces pb-4">Loại xét nghiệm</label>
            <Autocomplete
              options={[]}
              placeholder="Chon loại xét nghiệm"
            />
          </Col>
          <Col sm={6} className="z-index-2">
            <label className="spaces pb-4">Mã Xét nghiệm</label>
            <Autocomplete
              options={[]}
              placeholder="Chon loại xét nghiệm"
            />
          </Col>
        </Row>

        {/* <TableCollapseCustom
          data={dataXetNghiem}
          setData={() => {}}
          selectData={() => {}}
          nameParent="name"
          nameChildren="children"
          columnNameList={[
            {
              name: 'Tên dịch vụ',
              field: 'tenDV',
              headerCellProps: {
                minWidth: 100,
              }
            },
            {
              name: 'Mã dịch vụ',
              field: 'maDV',
              headerCellProps: {
                minWidth: 100,
              }
            },
            {
              name: 'Giá dịch vụ',
              field: 'giaDV',
              headerCellProps: {
                minWidth: 100,
              }
            },
          ]}
        /> */}
      </div>
    </div>
  )
};

export default TabXetNghiem
