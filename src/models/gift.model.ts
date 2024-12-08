

export interface Gift {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    link: string;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
}

export const emptyGift: Gift = {
    id: '',
    name: '',
    description: '',
    image: '',
    price: 0,
    link: '',
    isAvailable: false,
    createdAt: '',
    updatedAt: '',
}