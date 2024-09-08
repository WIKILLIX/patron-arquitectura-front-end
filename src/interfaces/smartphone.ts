export interface Smartphone {
    id?: number;
    name: string;
    img: string;
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