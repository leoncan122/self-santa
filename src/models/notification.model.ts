export type MessagePayload = {
    id: string;
    data: {
        text: string;
        dateCreated: Date;
        from: string;
    }
}

export type NotificationPayload = {
    id: string;
    data: {
        text: string;
        dateCreated: Date;
        link: string;
    }
}