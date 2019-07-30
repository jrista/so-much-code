export interface Customer {
    id?: number;
    name: string;
    title: string;
    email: string;
    handles?: {
        twitter?: string;
        facebook?: string;
    }
    addressId?: number;
}