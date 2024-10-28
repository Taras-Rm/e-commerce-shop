import { Injectable } from '@nestjs/common';
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

  async getAll(query: GetAllProductsInput): Promise<ProductEntity[]> {
    return this.productRepository.find({
      where: { ...query },
      relations: { category: true },
    });
  }
}
