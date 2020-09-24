import { Inject, Injectable } from '@nestjs/common';
import { ProductArgs } from './dto/product.args';
import { Product } from '../models/product.model';
import { ProductInput } from './dto/product.input';
import { ProductEntity } from '../models/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {
  }

  async create(data: ProductInput): Promise<ProductEntity> {
    return {} as any;
  }

  async findOneById(id: number): Promise<ProductEntity> {
    return {} as any;
  }

  async findAll(recipesArgs: ProductArgs): Promise<ProductEntity[]> {
    return this.productRepository.find();
    // [] as Product[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
