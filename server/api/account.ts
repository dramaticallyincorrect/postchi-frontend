export interface Account {
    id: string;
    email: string;
    type: AccountType;
}

export enum AccountType {
    Individual = 'Individual',
    Organisation = 'Organisation'
}