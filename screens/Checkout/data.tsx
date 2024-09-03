import { cart } from "../cart/data";

export type DataProp = {
  id?: number | string;
  store: string;
  waybillFee?: string;
  method: string;
  data: any[];
};

export const itemData: DataProp[] = [
  {
    id: 1,
    store: "Gourmet Stores",
    waybillFee: "4500",
    method: "Way-Billing",
    data: cart,
  },
  { id: 2, store: "Amoy Life", method: "Pick-Up", data: cart.slice(0, 1) },
];
