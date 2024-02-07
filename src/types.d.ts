export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface CatalogItemMutation {
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface Cart {
  catalogItem: CatalogItem;
  amount: number;
}