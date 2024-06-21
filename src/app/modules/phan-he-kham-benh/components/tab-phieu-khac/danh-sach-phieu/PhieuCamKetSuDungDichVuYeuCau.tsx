import { useFormikContext } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import TextField from "../../../../component/TextField";
import LabelRequired from "../../../../component/LabelRequired";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

interface dichVu {
  tenDichVu?: string;
  tenVatTu?: string;
  tenThuoc?: string;
  donGia: number;
  soLuong: number;
  thanhTien: number;
}
const PhieuCamKetSuDungDichVuYeuCau = () => {
  let { values, setFieldValue } = useFormikContext<any>();

  const renderColumns = (name: string , code: string) => {
    const columns: Array<Column<dichVu>> = [
      {
        Header: (props) => (
          <TableCustomHeader tableProps={props} title={"STT"} className="text-center text-white w-30px " />
        ),
        id: "STT",
        Cell: ({ ...props }: any) => <TableCustomCell className="text-center" data={Number(props?.row?.index + 1)} />,
      },
      {
        Header: (props) => (
          <TableCustomHeader<dichVu>
            tableProps={props}
            title={name}
            className="text-center min-w-100px "
          />
        ),
        id: name,
        Cell: ({ ...props }) => (
          <TableCustomCell className="" data={props?.data[props?.row?.index][code as keyof dichVu]} />
        ),
      },
      {
        Header: (props) => (
          <TableCustomHeader<dichVu> tableProps={props} title={"Đơn giá"} className="text-center min-w-100px " />
        ),
        id: "Đơn giá",
        Cell: ({ ...props }) => (
          <TableCustomCell className=" text-end" data={props?.data[props?.row?.index]?.donGia} />
        ),
      },
      {
        Header: (props) => (
          <TableCustomHeader<dichVu>
            tableProps={props}
            title={"Số lượng"}
            className="text-center min-w-100px "
          />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => (
          <TableCustomCell className=" text-center" data={props?.data[props?.row?.index]?.soLuong} />
        ),
      },
      {
        Header: (props) => (
          <TableCustomHeader<dichVu>
            tableProps={props}
            title={"Thành tiền"}
            className="text-center min-w-100px "
          />
        ),
        id: "Thành tiền",
        Cell: ({ ...props }) => (
          <TableCustomCell className="" data={props?.data[props?.row?.index]?.thanhTien} />
        ),
      },
    ];
    return columns;
  };

  return (
    <>
      <div>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Người nhập"
              name="nguoiNhap"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày nhập"
              name="ngayNhap"
              type="date"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Người đại diện"
              name="nguoiDaiDien"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <div className="spaces d-flex w-100">
              <LabelRequired label="Mối quan hệ" className="min-w-125px " />
              <AutocompleteV2
                options={[]}
                value={values?.moiQuanHe}
                name="moiQuanHe"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2 mt-3">
          <Col xs={12} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Địa chỉ"
              name="diaChi"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-between align-items-end">
            <div className="fw-bold">Dịch vụ y tế theo yêu cầu</div>
            <Button className="btn-fill w-50px">+</Button>
          </div>
          <div className="px-2 mt-2">
            <TableCustom data={[{tenDichVu:"X-Quang",donGia:200000,soLuong:1,thanhTien:200000}]} columns={renderColumns("Tên dịch vụ","tenDichVu")} minHeight={250} />
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-between align-items-end">
            <div className="fw-bold">Vật tư, dụng cụ y tế theo yêu cầu</div>
            <Button className="btn-fill w-50px">+</Button>
          </div>
          <div className="px-2 mt-2">
            <TableCustom data={[{tenVatTu:"Máy X-Quang",donGia:200000,soLuong:1,thanhTien:200000}]} columns={renderColumns("Tên vật tư, Dụng cụ y tế","tenVatTu")} minHeight={250} />
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-between align-items-end">
            <div className="fw-bold">Thuốc y tế theo yêu cầu</div>
            <Button className="btn-fill w-50px">+</Button>
          </div>
          <div className="px-2 mt-2">
            <TableCustom data={[{tenThuoc:"Paracetamol",donGia:20000,soLuong:1,thanhTien:20000}]} columns={renderColumns("Tên thuốc","tenThuoc")} minHeight={250} />
          </div>
        </Row>
      </div>
    </>
  );
};

export default PhieuCamKetSuDungDichVuYeuCau;
