import { MessageInterface } from "../models/notification.model";
// Mock Messages
export const messageMocks: MessageInterface[] = [
    {
        type: "message",
        payload: {
            
        id: "msg1",
        data: {
            text: "Hola, ¿cómo estás?",
            dateCreated: new Date("2025-01-22T10:30:00Z"),
            from: "Juan Pérez",
        },
        }
    },
   
];

// Mock Notifications
export const notificationMocks: MessageInterface[] = [
    {
        type: "notification",
        payload: {
            id: "notif1",
            data: {
                text: "Nuevo comentario en tu publicación.",
                dateCreated: new Date("2025-01-22T09:00:00Z"),
                amount: "$2345",
            },
        }
    },
    {
        type: "notification",
        payload: {
            id: "notif2",
            data: {
                text: "Nuevo comentario en tu publicación.",
                dateCreated: new Date("2025-01-24T09:00:00Z"),
                amount: "$32",
            },
        }
    },
];
