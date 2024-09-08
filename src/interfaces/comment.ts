export interface Comment {
    id?: number;
    comment: string;
    user:{
        id: number;
    },
    product:{
        id: number;
    }
}