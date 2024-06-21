import ActionTable from "../../../../component/action-table/ActionTable";
import TextValidator from "../../../../component/TextValidator";
import { COUNTING_UNIT, hangHoaVatTuData } from "../../../consts/QuanLyKhoConst";
import Autocomplete from "../../../../component/AutocompleteObject";
import { variantStandardStyle } from "../../../../component/StyleComponent";
// import TableCustom from "../../../../component/table-custom-v3/TableCustom";
import { getListProduct } from "../../../services/NhapKhoServices";
import { SEARCH_OBJECT_MAX_SIZE } from "../../../../utils/Constant";
import { IHangHoa, IPhieuNhapKho } from "../../../models/NhapKhoModels";
import { TYPE_PRODUCT } from "../../../consts/PhanHeKhoDuocConst";

type Props = {
    data: any[];
    commonSoLo?: string;
    nhapKhoValue: IPhieuNhapKho
    handleOpenConfirmDialog: (rowData: any) => void;
    handleRowsChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, name: string) => void
    handleRowsSelectChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, name: string) => void;
    handleSelectName: (event: React.ChangeEvent<HTMLInputElement>, index: number, name: string) => void;
    handleSelectAction: (data: any, method: string) => void;
    handleOpenQuyetDinhTTDialog: (index: number, rowData: IHangHoa) => void;
    listProduct: any[];
};

const TableHangHoa = (props: Props) => {
    const {
        data,
        handleRowsChange,
        handleRowsSelectChange,
        handleSelectName,
        handleSelectAction,
        nhapKhoValue,
        handleOpenQuyetDinhTTDialog,
        listProduct
    } = props;

    const DSColumnsTable = [
        {
            name: 'STT',
            field: '',
            headerStyle: {
                minWidth: "60px",
                textAlign: "center"
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (index + 1)
        },
        {
            name: 'Thao tác',
            field: '',
            headerStyle: {
                minWidth: "80px",
                textAlign: "center"
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                !(index === data?.length - 1)
                && <ActionTable
                    data={rowData}
                    handleSelectAction={handleSelectAction}
                    isDelete
                />
            )
        },
        {
            name: 'Tên hàng',
            field: '',
            headerStyle: {
                minWidth: "300px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <Autocomplete
                    isReadOnly={nhapKhoValue?.productTypeId ? false : true}
                    name="itemDetails"
                    dependencies={[nhapKhoValue?.productTypeId]}
                    menuPlacement={data?.length > 4 ? "top" : "bottom"}
                    options={listProduct}
                    value={rowData?.product ? rowData?.product : rowData?.itemDetails}
                    onChange={(value) => handleSelectName(value, index, "itemDetails")}
                    styles={variantStandardStyle}
                />
            )
        },
        {
            name: 'Số lô',
            field: '',
            headerStyle: {
                minWidth: "100px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <TextValidator
                    readOnly={rowData?.itemDetails ? false : true}
                    className="px-1 text-center no-spinners variant-standard"
                    name="consignment"
                    type="text"
                    value={rowData?.itemDetails ? rowData?.consignment : ""}
                    onChange={(e: any) => handleRowsChange(e, index, "consignment")}
                />
            )
        },
        {
            name: 'Số QĐTT',
            field: '',
            headerStyle: {
                minWidth: "120px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <TextValidator
                    className="px-1 text-center no-spinners variant-standard"
                    name="winningBidDecisionCode"
                    type="text"
                    value={rowData?.winningBidDecisionCode}
                    icon={rowData?.itemDetails ? "bi bi-plus-circle" : ""}
                    handleIcon={() => handleOpenQuyetDinhTTDialog(index, rowData)}
                    readOnly={true}
                />
            )
        },
        {
            name: 'Đơn vị',
            field: '',
            headerStyle: {
                minWidth: "100px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <TextValidator
                    className="px-1 text-center no-spinners variant-standard"
                    name="donVi"
                    type="text"
                    value={rowData?.product?.unit?.name ? rowData?.product?.unit?.name : rowData?.itemDetails?.unit?.name || ""}
                    readOnly={true}
                />
            )
        },

        ...(nhapKhoValue?.productTypeId?.code === TYPE_PRODUCT.MAU ?
            [{
                name: 'Số quản lý',
                field: '',
                headerStyle: {
                    minWidth: "100px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="soQuanLy"
                        type="text"
                        value={rowData?.soQuanLy}
                        onChange={(e: any) => handleRowsChange(e, index, "soQuanLy")}
                    />
                )
            },
            {
                name: 'Thể tích',
                field: '',
                headerStyle: {
                    minWidth: "100px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="volume"
                        type="text"
                        value={rowData?.volume}
                        onChange={(e: any) => handleRowsChange(e, index, "volume")}
                    />
                )
            },
            {
                name: 'Ngày lấy máu',
                field: '',
                headerStyle: {
                    minWidth: "100px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="bloodCollectionDate"
                        type="date"
                        value={rowData?.bloodCollectionDate}
                        onChange={(e: any) => handleRowsChange(e, index, "bloodCollectionDate")}
                    />
                )
            },
            {
                name: 'Ngày nhập',
                field: '',
                headerStyle: {
                    minWidth: "100px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="inputDate"
                        type="date"
                        value={rowData?.inputDate}
                        onChange={(e: any) => handleRowsChange(e, index, "inputDate")}
                    />
                )
            },] : []),

        ...((nhapKhoValue?.productTypeId?.code === TYPE_PRODUCT.VAT_TU
            || nhapKhoValue?.productTypeId?.code === TYPE_PRODUCT.THUOC) ? [
            {
                name: 'Barcode',
                field: '',
                headerStyle: {
                    minWidth: "150px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="barCode"
                        type="text"
                        value={rowData?.barCode}
                        onChange={(e: any) => handleRowsChange(e, index, "barCode")}
                    />
                )
            },
            {
                name: 'Năm SX',
                field: '',
                headerStyle: {
                    minWidth: "80px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center no-spinners variant-standard"
                        name="manufacturingYear"
                        type="number"
                        value={rowData?.manufacturingYear}
                        onChange={(e: any) => handleRowsChange(e, index, "manufacturingYear")}
                    />
                )
            },
            {
                name: 'Hãng SX',
                field: '',
                headerStyle: {
                    minWidth: "150px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        className="px-1 text-center no-spinners variant-standard"
                        name="manufacturing"
                        type="text"
                        value={rowData?.itemDetails?.attributeValues?.manufacturer?.valueObject?.[0]?.name || ""}
                        readOnly={true}
                    />
                )
            },
            {
                name: 'HSD',
                field: '',
                headerStyle: {
                    minWidth: "100px",
                    textAlign: "center"
                },
                render: (rowData: IHangHoa, index: number) => (
                    <TextValidator
                        readOnly={rowData?.itemDetails ? false : true}
                        className="px-1 text-center variant-standard"
                        name="expirationDate"
                        type="date"
                        value={rowData?.expirationDate}
                        onChange={(e: any) => handleRowsChange(e, index, "expirationDate")}
                    />
                )
            },
        ] : []),
        {
            name: 'SL nhập',
            field: '',
            headerStyle: {
                minWidth: "100px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <TextValidator
                    readOnly={rowData?.itemDetails ? false : true}
                    className="px-1 text-center no-spinners variant-standard"
                    name="totalQuantity"
                    type="number"
                    value={(rowData?.itemDetails as any)?.[0]?.totalQuantity ? (rowData?.itemDetails as any)?.[0]?.totalQuantity : rowData?.totalQuantity}
                    onChange={(e: any) => handleRowsChange(e, index, "totalQuantity")}
                />
            )
        },
        {
            name: 'Ghi chú',
            field: '',
            headerStyle: {
                minWidth: "200px",
                textAlign: "center"
            },
            render: (rowData: IHangHoa, index: number) => (
                <TextValidator
                    readOnly={rowData?.itemDetails ? false : true}
                    className="px-1 text-center variant-standard"
                    name="note"
                    type="text"
                    value={rowData?.note}
                    onChange={(e: any) => handleRowsChange(e, index, "note")}
                />
            )
        },
    ];

    return (
        <div>
            {/* <TableCustom
                data={data}
                columns={DSColumnsTable}
                height={300}
            /> */}
        </div>
    )
}



export default TableHangHoa