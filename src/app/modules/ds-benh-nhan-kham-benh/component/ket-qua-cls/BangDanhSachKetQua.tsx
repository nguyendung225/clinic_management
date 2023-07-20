import { FC, useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap";
import { DSDV, DSKQ } from "../../models/DanhSachKetQuaModels";

interface Props {
  data: DSKQ[];
  multiSelect?: boolean;
  singleSelect?: boolean;
}

const BangDanhSachKetQua: FC<Props> = (props) => {
  let { data, multiSelect, singleSelect } = props;
  const [collapse, setCollapse] = useState<{ [key: string]: boolean }>({});

  const toggleCollapse = (id: string) => {
    setCollapse((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="table-responsive table-scroll-y">
      <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer overflow-x-hidden">
        <thead className="header-sticky">
          <tr className="text-muted fw-bolder fs-7 text-uppercase gs-0 border bg-pri">
            {(multiSelect || singleSelect) && (
              <th className="text-light cursor-pointer bg-pri spaces px-8">
                {multiSelect ? (
                  <Form>
                    <Form.Check
                      type="checkbox"
                      className="customs-form-check"
                    />
                  </Form>
                ) : (
                  <></>
                )}
              </th>
            )}
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-80px">
              Barcode
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Mã chỉ số
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-150px">
              Tên chỉ số
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-80px">
              Kết quả
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-200px">
              Trị số bình thường
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Đơn vị tính
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center">
              SL
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Trạng thái
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Mã máy XN
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-200px">
              Ghi chú
            </th>
          </tr>
        </thead>
        <tbody className="text-gray fw-bold bg-white border">
          {data?.map((pItem: DSKQ, pIndex: number) => {
            const IsCollapsed =
              (pItem?.idNhom && collapse?.[pItem?.idNhom]) || false;
            return (
              <>
                <tr>
                  <td
                    colSpan={multiSelect || singleSelect ? 11 : 10}
                    className="py-3 ps-3">
                    <div
                      className="flex cursor-pointer"
                      onClick={() => {
                        pItem?.idNhom && toggleCollapse(pItem?.idNhom);
                      }}>
                      <div className="p-0 px-1 me-1 flex align-items-center">
                        {IsCollapsed ? (
                          <i className="bi bi-chevron-down"></i>
                        ) : (
                          <i className="bi bi-chevron-right"></i>
                        )}
                      </div>
                      <p className="m-0">{pItem?.tenNhom}</p>
                    </div>
                  </td>
                </tr>
                {pItem?.dsDichVu?.map((item: DSDV, index: number) => {
                  return (
                    <Collapse in={IsCollapsed} unmountOnExit mountOnEnter>
                      <tr>
                        {(multiSelect || singleSelect) && (
                          <td className="py-3 ps-3">
                            {multiSelect && (
                              <Form>
                                <Form.Check
                                  type="checkbox"
                                  className="customs-form-check"
                                />
                              </Form>
                            )}
                            {singleSelect && (
                              <Form>
                                <Form.Check
                                  type="radio"
                                  className="customs-form-check_radio"
                                  name={`${pItem?.idNhom}-${pIndex}-${index}`}
                                />
                              </Form>
                            )}
                          </td>
                        )}
                        <td className={`py-3 text-center text-system ${!(multiSelect || singleSelect) && `ps-3`}`}>
                          {item.barcode}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.maChiSo}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.tenChiSo}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.ketQua}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.triSoBinhThuong}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.donViTinh}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.soLuong}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.trangThai}
                        </td>
                        <td className="py-3 text-center text-system">
                          <Form>
                            <Form.Select value={item?.maMayXN} size="sm">
                              <option value={"MAY1"}>Máy 1</option>
                              <option value={"MAY2"}>Máy 2</option>
                              <option value={"MAY3"}>Máy 3</option>
                            </Form.Select>
                          </Form>
                        </td>
                        <td className="py-3 text-start text-system pe-3">
                          {item.ghiChu}
                        </td>
                      </tr>
                    </Collapse>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { BangDanhSachKetQua };
