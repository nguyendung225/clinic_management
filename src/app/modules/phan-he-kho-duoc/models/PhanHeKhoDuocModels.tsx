export interface iTabSoDo {
    eventKey: string;
    code?: string;
    title: string;
    component: (data: any) => JSX.Element;
}

export interface ISearchCategories {
    pageIndex: number;
    pageSize: number;
    keyword?: string;
    type?: string;
    code?: string;
    name?: string;
    parentId?: string;
}