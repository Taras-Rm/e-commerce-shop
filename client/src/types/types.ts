export type CartItem = {
  id: number;
  name: string;
  image?: string;
  count: number;
  price: number;
};

export type CategoryI = {
  id: number;
  name: string;
  count: number;
  imageUrl: string;
  parent?: CategoryI;
  parentId: number;
  subCategories: CategoryI[];
};

export type ProductI = {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  categoryId: number;
  code: string;
  image?: string;
  characteristics: CharacteristicI[];
};

export type CharacteristicI = {
  key: string;
  value: string;
};
