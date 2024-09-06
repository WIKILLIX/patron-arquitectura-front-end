export interface Smartphone {
    id?: number;
    name: string;
    price: string;
    description: string;
    brand: {
        id: number,
        name?: string
    }
    category: {
        id: number,
        name?: string
    }
}