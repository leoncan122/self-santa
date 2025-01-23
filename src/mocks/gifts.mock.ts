import { Gift } from "../models/gift.model";

export const mockGifts: Gift[] = [
    {
        id: '1',
        name: 'Bicycle',
        description: 'A mountain bike',
        image: 'https://example.com/images/bicycle.jpg',
        price: 299.99,
        link: 'https://example.com/bicycle',
        isAvailable: true,
        createdAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z'
    },
    {
        id: '2',
        name: 'Book',
        description: 'A mystery novel',
        image: 'https://example.com/images/book.jpg',
        price: 19.99,
        link: 'https://example.com/book',
        isAvailable: true,
        createdAt: '2023-01-02T00:00:00Z',
        updatedAt: '2023-01-02T00:00:00Z'
    },
    {
        id: '3',
        name: 'Watch',
        description: 'A wristwatch',
        image: 'https://example.com/images/watch.jpg',
        price: 99.99,
        link: 'https://example.com/watch',
        isAvailable: false,
        createdAt: '2023-01-03T00:00:00Z',
        updatedAt: '2023-01-03T00:00:00Z'
    },
    {
        id: '4',
        name: 'Headphones',
        description: 'Noise-cancelling headphones',
        image: 'https://example.com/images/headphones.jpg',
        price: 199.99,
        link: 'https://example.com/headphones',
        isAvailable: true,
        createdAt: '2023-01-04T00:00:00Z',
        updatedAt: '2023-01-04T00:00:00Z'
    },
    {
        id: '3',
        name: 'Watch',
        description: 'A wristwatch',
        image: 'https://example.com/images/watch.jpg',
        price: 99.99,
        link: 'https://example.com/watch',
        isAvailable: false,
        createdAt: '2023-01-03T00:00:00Z',
        updatedAt: '2023-01-03T00:00:00Z'
    },
    {
        id: '4',
        name: 'Headphones',
        description: 'Noise-cancelling headphones',
        image: 'https://example.com/images/headphones.jpg',
        price: 199.99,
        link: 'https://example.com/headphones',
        isAvailable: true,
        createdAt: '2023-01-04T00:00:00Z',
        updatedAt: '2023-01-04T00:00:00Z'
    }
];
