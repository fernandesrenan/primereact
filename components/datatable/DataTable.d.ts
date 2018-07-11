import React = require("react");

interface DataTableProps {
    id?: string;
    value?: Array<any>;
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    tableStyle?: object;
    tableClassName?: string;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    paginatorLeft?: any;
    paginatorRight?: any;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    first?: number;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: Array<any>;
    sortMode?: string;
    emptyMessage?: string;
    selectionMode?: string;
    selection?: any;
    onSelectionChange?(e: {originalEvent: Event, data: any}): void;
    compareSelectionBy?: string;
    dataKey?: string;
    metaKeySelection?: boolean;
    headerColumnGroup?: JSX.Element;
    footerColumnGroup?: JSX.Element;
    frozenHeaderColumnGroup?: JSX.Element;
    frozenFooterColumnGroup?: JSX.Element;
    rowExpansionTemplate?(data: any): JSX.Element | undefined;
    expandedRows?: Array<any>;
    onRowToggle?(data: Array<any>): void;
    responsive?: boolean;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    filters?: object;
    globalFilter?: any;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollDelay?: number;
    frozenWidth?: string;
    unfrozenWidth?: string;
    frozenValue?: Array<any>;
    csvSeparator?: string;
    exportFilename?: string;
    contextMenu?: any;
    rowGroupMode?: string;
    autoLayout?:boolean;
    rowClassName?(rowData: any): object;
    rowGroupHeaderTemplate?(data: any, index: number): JSX.Element | undefined;
    rowGroupFooterTemplate?(data: any, index: number): JSX.Element | undefined;
    loading?:boolean;
    loadingIcon?:string;
    onColumnResizeEnd?(e: {element: HTMLElement, delta: number}): void;
    onSort?(e: {sortField: string, sortOrder: number, multiSortMeta: any}): void;
    onPage?(e: {first: number, rows: number}): void;
    onFilter?(filters: Array<any>): void;
    onVirtualScroll?(e: {first: number, rows: number}): void;
    onRowClick?(e: Event): void;
    onRowDoubleClick?(e: Event): void;
    onRowSelect?(e: {originalEvent: Event, data: any, type: string}): void;
    onRowUnselect?(e: {originalEvent: Event, data: any, type: string}): void;
    onRowExpand?(e: {originalEvent: Event, data: any}): void;
    onRowCollapse?(e: {originalEvent: Event, data: any}): void;
    onContextMenuSelect?(e: {originalEvent: Event, data: any}): void;
    onColReorder?(e: {dragIndex: number, dropIndex: number, columns: any}): void;
    onRowReorder?(e: {originalEvent: Event, value: any, dragIndex: number, dropIndex: number}): void;
}

export class DataTable extends React.Component<DataTableProps,any> {}