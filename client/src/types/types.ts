export type CartItem = {
  id: number;
  name: string;
  imageUrl?: string;
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

  productsCount: number;
};

export type ProductI = {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  categoryId: number;
  code: string;
  imageUrl?: string;
  characteristics: ProductCharacteristicI[];
  currency: string;
  quantity: number;
  isNew: boolean;
};

export type ProductCharacteristicI = {
  id: number;
  key: string;
  value: string;
};

export type LinkI = {
  name: string;
  url: string;
};

export type ActiveLinkI = LinkI & {
  isActive: boolean;
};
