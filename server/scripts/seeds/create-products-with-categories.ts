import { CategoryEntity } from 'src/category/entities/category.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { DataSource } from 'typeorm';

const categories: Partial<CategoryEntity>[] = [
  {
    name: 'Food',
    parentId: null,
    imageUrl: '',
  },
  {
    name: 'Beverages',
    parentId: null,
    imageUrl: '',
  },
  {
    name: 'Dairy',
    parentId: null,
    imageUrl: '',
  },
  {
    name: 'Grains',
    parentId: null,
    imageUrl: '',
  },
  {
    name: 'Snacks',
    parentId: null,
    imageUrl: '',
  },
];

const subCategories: Partial<CategoryEntity>[] = [
  {
    name: 'Honey & Sweeteners',
    parentId: null, // Food
    imageUrl: '',
  },
  {
    name: 'Milk Alternatives',
    parentId: null, // Food
    imageUrl: '',
  },
  {
    name: 'Bread & Bakery',
    parentId: null, // Food
    imageUrl: '',
  },
  {
    name: 'Eggs',
    parentId: null, // Dairy
    imageUrl: '',
  },
  {
    name: 'Oils & Vinegar',
    parentId: null, // Food
    imageUrl: '',
  },
  {
    name: 'Organic',
    parentId: null, // Food
    imageUrl: '',
  },
  {
    name: 'Rice & Grains',
    parentId: null, // Grains
    imageUrl: '',
  },
  {
    name: 'Tea',
    parentId: null, // Beverages
    imageUrl: '',
  },
  {
    name: 'Chocolate & Candy',
    parentId: null, // Snacks
    imageUrl: '',
  },
];

const products: Partial<ProductEntity>[] = [
  {
    name: 'Organic Honey',
    price: 15.99,
    shortDescription: 'Natural organic honey',
    description:
      'Pure, unprocessed honey harvested from organic farms. Ideal for sweetening drinks and desserts.',
    code: 'HNY001',
    pricePer: '500g',
    currency: 'hrn',
    imageUrl: '',
    categoryId: null, // Honey & Sweetener
  },
  {
    name: 'Almond Milk',
    price: 3.49,
    shortDescription: 'Non-dairy milk made from almonds',
    description:
      'Smooth and creamy almond milk, perfect for coffee, smoothies, and cereals. Vegan-friendly and lactose-free.',
    code: 'ALM002',
    pricePer: '1L',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Milk Alternatives
  },
  {
    name: 'Whole Wheat Bread',
    price: 2.99,
    shortDescription: 'Freshly baked whole wheat bread',
    description:
      'Healthy whole wheat bread baked daily. Great for sandwiches and toasts, providing a good source of fiber.',
    code: 'BREAD003',
    pricePer: '500g',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Bread & Bakery
  },
  {
    name: 'Greek Yogurt',
    price: 4.5,
    shortDescription: 'Rich and creamy Greek yogurt',
    description:
      'Thick, creamy Greek yogurt, packed with protein and probiotics. Perfect as a healthy snack or breakfast.',
    code: 'YOG004',
    pricePer: '400g',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Dairy
  },
  {
    name: 'Free-Range Eggs',
    price: 6.99,
    shortDescription: '12-pack of free-range eggs',
    description:
      'Large, fresh eggs from free-range chickens. Ideal for baking and cooking, rich in protein and nutrients.',
    code: 'EGG005',
    pricePer: '12 units',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Eggs
  },
  {
    name: 'Olive Oil',
    price: 8.99,
    shortDescription: 'Extra virgin olive oil',
    description:
      'High-quality extra virgin olive oil. Cold-pressed for a rich, smooth flavor, ideal for salads and cooking.',
    code: 'OLV006',
    pricePer: '500ml',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Oils & Vinegar
  },
  {
    name: 'Quinoa',
    price: 7.5,
    shortDescription: 'Organic quinoa grains',
    description:
      'Organic quinoa, a versatile and nutritious grain. Great as a base for salads, bowls, and healthy side dishes.',
    code: 'QUN007',
    pricePer: '1kg',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Rice & Grains
  },
  {
    name: 'Dark Chocolate',
    price: 5.0,
    shortDescription: '70% dark chocolate',
    description:
      'Rich, dark chocolate with 70% cocoa content. Perfect for a healthy treat or baking ingredient.',
    code: 'CHC008',
    pricePer: '100g',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Chocolate & Candy
  },
  {
    name: 'Green Tea',
    price: 4.25,
    shortDescription: 'Organic green tea leaves',
    description:
      'Loose leaf green tea, full of antioxidants and flavor. Ideal for a refreshing and healthy drink.',
    code: 'TEA009',
    pricePer: '200g',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Tea
  },
  {
    name: 'Brown Rice',
    price: 3.8,
    shortDescription: 'Whole grain brown rice',
    description:
      'Nutritious brown rice, a great source of fiber and minerals. Perfect for a variety of meals.',
    code: 'RICE010',
    pricePer: '1kg',
    currency: 'hrn',
    imageUrl: '',

    categoryId: null, // Rice & Grains
  },
];

export const createCategories = async (datasource: DataSource) => {
  try {
    console.debug('Creating categories...');

    const categoryRepository = datasource.getRepository(CategoryEntity);

    const createdCategories = await categoryRepository.save(categories);

    console.debug('Categories created!');

    console.debug('Creating subCtegories...');

    const createdSubCategories = await categoryRepository.save([
      { ...subCategories[0], parentId: createdCategories[0].id },
      { ...subCategories[1], parentId: createdCategories[0].id },
      { ...subCategories[2], parentId: createdCategories[0].id },
      { ...subCategories[3], parentId: createdCategories[2].id },
      { ...subCategories[4], parentId: createdCategories[0].id },
      { ...subCategories[5], parentId: createdCategories[0].id },
      { ...subCategories[6], parentId: createdCategories[3].id },
      { ...subCategories[7], parentId: createdCategories[1].id },
      { ...subCategories[8], parentId: createdCategories[4].id },
    ]);

    console.debug('SubCategories created!');

    const productRepository = datasource.getRepository(ProductEntity);

    console.debug('Creating products...');

    await productRepository.save([
      { ...products[0], categoryId: createdSubCategories[0].id },
      { ...products[1], categoryId: createdSubCategories[1].id },
      { ...products[2], categoryId: createdSubCategories[2].id },
      { ...products[3], categoryId: createdSubCategories[5].id },
      { ...products[4], categoryId: createdSubCategories[3].id },
      { ...products[5], categoryId: createdSubCategories[4].id },
      { ...products[6], categoryId: createdSubCategories[6].id },
      { ...products[7], categoryId: createdSubCategories[8].id },
      { ...products[8], categoryId: createdSubCategories[7].id },
      { ...products[9], categoryId: createdSubCategories[6].id },
    ]);

    console.debug('Products created!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
