export interface Subscription {
    start: string;
    end: string;
    seats: number;
    status: SubscriptionStatus;
    cancellationUrl: string | null;
}

export enum SubscriptionStatus {
    Active = 'active',
    Canceled = 'canceled',
}