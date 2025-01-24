export interface MessagePayloadInterface  {
    id: string;
    data: {
        text: string;
        dateCreated: Date;
        from: string;
    }
}

export interface NotificationPayloadInterface {
    id: string;
    data: {
        text: string;
        amount: string;
        dateCreated: Date;
        from?: string;
    }
}

export interface MessageInterface  {
    type: string
    payload:  NotificationPayloadInterface | MessagePayloadInterface
}
