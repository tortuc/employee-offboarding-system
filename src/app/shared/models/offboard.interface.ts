export interface IOffboard {
    email: string;
    phone: string;
    note: string;
    address: {
        receiver: string;
        streetLine1: string;
        city: string;
        postalCode: string;
        country: string;
    };
}