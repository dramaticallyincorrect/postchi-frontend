export interface Account {
    id: string;
    email: string;
    type: AccountType;
}

enum AccountType {
    Individual,
    Organization
}