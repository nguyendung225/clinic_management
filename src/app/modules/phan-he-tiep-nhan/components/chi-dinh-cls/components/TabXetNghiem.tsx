import React, { FC, useState } from "react";
import { Autocomplete } from "../../../../component/Autocomplete";
import { TableCustomV2 } from "../../../../component/table-custom-v2/TableCustomV2";
import { BangXetNghiemModel } from "../../../models/ChiDinhCLSModel";
import { Col, Form, Row, Table } from "react-bootstrap";
import { dataXetNghiem } from "../../../const/ChiDinhCLSConst";
import "../../../PhanHeTiepNhan.scss"

interface Group {
  name: string;
  children: BangXetNghiemModel[];
}

const TabXetNghiem: FC = () => {

  const groupedData = dataXetNghiem.map(group => ({
    name: group.name,
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

        <div className="customs-table mt-4">
          <Table className="table" bordered>
            <thead>
              <tr>
                <th></th>
                <th className="w-80px">Mã DV</th>
                <th>Tên dịch vụ</th>
                <th className="w-100px">Giá dịch vụ</th>
              </tr>
              <tr >
                <th></th>
                <th className="spaces p-4"><input className="form-control h-30px" /></th>
                <th className="spaces p-4"><input className="form-control h-30px" /></th>
                <th className="spaces p-4"><input className="form-control h-30px" /></th>
              </tr>
            </thead>
            <tbody className="tbody">
              {groupedData.map((group: Group) => (
                <React.Fragment key={group.name}>
                  <tr onClick={() => toggleGroup(group.name)}>
                    <td colSpan={4} className="group">
                      <div className="title">
                        {group.name}
                        <div className="spaces pr-10">
                          <span className={`arrow ${expandedGroups.includes(group.name) ? 'collapsed' : ''}`} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {expandedGroups.includes(group.name) && group.children.map((child: BangXetNghiemModel) => (
                    <tr key={child.maDV}>
                      <td className="spaces p-8">
                        <Form.Check className="customs-form-check__table" />
                      </td>
                      <td>{child.maDV}</td>
                      <td>{child.tenDV}</td>
                      <td>{child.giaDV}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
};

export default TabXetNghiem
