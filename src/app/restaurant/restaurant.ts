export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  price: number;
  dayPrice: number;
  imageUrl: string;
  daysNumber?: number;
}
