import { datasurce } from 'src/database/datasource';
import { createCategories } from './create-products-with-categories';

const runner = async () => {
  try {
    console.debug('Seed runner starting...');

    await datasurce.initialize();

    await createCategories(datasurce);

    await datasurce.destroy();

    console.debug('Added seed data!');
  } catch (error) {
    console.error(error);
  }
};

runner();
