import { FC, useEffect, useState } from "react";
import { DSChiDinh, DSDichVu } from "../../models/DanhSachChiDinhModels";
import { Collapse, Form } from "react-bootstrap";

interface Props {
  data: DSChiDinh[];
  multiSelect?: boolean;
  singleSelect?: boolean;
}

const BangDanhSachChiDinh: FC<Props> = (props) => {
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
      <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
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
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Mã dịch vụ
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-150px">
              Tên dịch vụ
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-100px">
              Số lượng
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-150px">
              Trạng thái
            </th>
            <th className="text-uppercase fs-7 fw-bold text-light cursor-pointer bg-pri text-center min-w-200px">
              Ghi chú
            </th>
          </tr>
        </thead>
        <tbody className="text-gray fw-bold bg-white border">
          {data?.map((pItem: DSChiDinh, pIndex: number) => {
            const pIsCollapsed =
              (pItem?.idNhom && collapse?.[pItem?.idNhom]) || false;
            return (
              <>
                <tr>
                  <td colSpan={(multiSelect || singleSelect) ? 6 : 5} className="py-3 ps-3">
                    <div
                      className="flex cursor-pointer"
                      onClick={() => {
                        pItem?.idNhom && toggleCollapse(pItem?.idNhom);
                      }}>
                      <div className="p-0 px-1 me-1 flex align-items-center">
                        {pIsCollapsed ? (
                          <i className="bi bi-chevron-down"></i>
                        ) : (
                          <i className="bi bi-chevron-right"></i>
                        )}
                      </div>
                      <p className="m-0">{pItem?.tenNhom}</p>
                    </div>
                  </td>
                </tr>
                {pItem?.dsDichVu?.map((item: DSDichVu, index: number) => {
                  const isCollapsed =
                    (pItem?.idNhom && collapse?.[pItem?.idNhom]) || false;
                  return (
                    <Collapse in={isCollapsed} unmountOnExit mountOnEnter>
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
                                  name={pItem?.idNhom}
                                />
                              </Form>
                            )}
                          </td>
                        )}
                        <td className={`py-3 text-center text-system ${!(multiSelect || singleSelect) ? `ps-3` : ``}`}>
                          {item.maDichVu}
                        </td>
                        <td className="py-3 text-start text-system">
                          {item.tenDichVu}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.soLuong}
                        </td>
                        <td className="py-3 text-center text-system">
                          {item.trangThai}
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

export { BangDanhSachChiDinh };
