import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { GetAllProductsInput } from './dto/get-all/input';
import { ProductAdapter } from './adapters/product.adapter';
import { GetAllProductsOutput } from './dto/get-all/output';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  @ApiOkResponse({
    type: GetAllProductsOutput,
    description: 'Get all products',
  })
  async getAllProducts(
    @Query() query: GetAllProductsInput,
  ): Promise<GetAllProductsOutput> {
    const products = await this.productService.getAll(query);

    return { data: products.map((category) => ProductAdapter.toDto(category)) };
  }
}
