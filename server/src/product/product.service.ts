import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { GetAllProductsInput } from './dto/get-all/input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getProductById(id: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { category: true, characteristics: true },
    });

    if (!product) {
      throw new BadRequestException('product not found');
    }

    return product;
  }

  async getAll(query: GetAllProductsInput): Promise<ProductEntity[]> {
    return this.productRepository.find({
      where: { ...query },
      relations: { category: true },
    });
  }
}
