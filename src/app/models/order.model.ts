export enum OrderStatus {
    PENDING = 'pending',
    ONHOLD = 'on-hold',
    PARTIAL = 'partial-fill',
    FILLED = 'filled',
    PARTSHIP = 'partial-shipped',
    SHIPPED = 'shipped',
    CLOSED = 'closed'
}

export type ISODate = string;
export type Never = 'never';

export interface Order {
    id?: number;
    purchaseOrderNo: string;
    status: OrderStatus;
    dateCreated: ISODate;
    dateClosed: ISODate | Never;
    history?: OrderHistory[];
}

export interface OrderHistory {
    dateOfAction: ISODate;
    action: string;
    newStatus: OrderStatus;
}