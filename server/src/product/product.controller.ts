import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { GetAllProductsInput } from './dto/get-all/input';
import { ProductAdapter } from './adapters/product.adapter';
import { GetAllProductsOutput } from './dto/get-all/output';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';

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

  @Get('/:id')
  @ApiOkResponse({
    type: ProductDto,
    description: 'Get product by id',
  })
  async getProductById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductDto> {
    const product = await this.productService.getProductById(id);

    return ProductAdapter.toDto(product);
  }
}
