interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: true;
}

interface IPageable {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: false;
}

interface IData<T> {
  content: T[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: ISort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IResponse<T> {
  timestamp: string;
  code: number;
  message: string;
  data: IData<T>;
  total: number;
}
