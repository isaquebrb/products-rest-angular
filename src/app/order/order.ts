import { Item } from './item';

export class Order {
    id: string;
    moment: string;
    orderStatus: string;
    clientId: number;
    clientName: string;
    clientEmail: string;
    items: Item[];
}