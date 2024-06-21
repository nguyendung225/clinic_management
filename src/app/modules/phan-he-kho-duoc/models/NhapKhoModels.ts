export interface IObjectSearchProduct {
  pageIndex: number;
  pageSize: number;
  productType?: string;
}

export interface IObjectSearchPhieuNhapKho {
  pageIndex: number;
  pageSize: number;
  keyword: string;
}

export interface IPhieuNhapKho {
  id?: string;
  warehouseReceiptId: { id?: string, name?: string } | null;
  warehouseReceipt?: { id?: string, name?: string };
  supplier?: { id?: string, name?: string };
  productType?: { id?: string, name?: string };
  code: string;
  inputDate: string;
  status: { id?: number } | null;
  productTypeId: { id?: string, code?: string, name?: string } | null;
  supplierId: { id?: string, taxCode?: string, name?: string } | null;
  consignment: string;
  contractName: string;
  contractNumber: string;
  sender: string;
  receiver: string;
  attribute?: {
    consignment: string;
    contractName: string;
    contractNumber: string;
  },
  items: IHangHoa[]
}

export interface IPhieuNhapKhoPayload {
  id?: string;
  warehouseReceiptId?: string;
  code: string;
  inputDate: string;
  status?: number;
  productTypeId?: string;
  supplierId?: string;
  sender: string;
  receiver: string;
  // ma so thue
  attribute: {
    consignment: string;
    contractName: string;
    contractNumber: string;
  },
  items: IHangHoa[]
}

export interface IHangHoa {
  productId?: string;
  barCode?: string;
  consignment?: string;
  note: string;
  manufacturingYear: number;
  manufacturing: string;
  expirationDate: string;
  attribute: {
    bloodCollectionDate: string;
    volume: number;
  }
  itemDetails?: {
    name: string;
    unit: { name?: string; };
    totalQuantity?: number;
    attributeValues: {
      manufacturer: {
        valueObject: { name?: string; }[]
      }
    }
  }
  totalQuantity: number;
  winningBidDecisionCode: string;
  soQuanLy: number;
  volume: number;
  bloodCollectionDate: string;
  inputDate: string;
  product?: {
    unit?: { name?: string; };
  } | null;
}