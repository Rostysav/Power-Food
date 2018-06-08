/**
 * Created by valdemar on 08.05.18.
 */
export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    dayPrice: number;
    imageUrl: string;
    daysNumber?: number;
}