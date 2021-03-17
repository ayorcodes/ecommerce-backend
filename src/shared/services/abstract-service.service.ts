import { NotFoundException } from '@nestjs/common';
import { EntityTarget, getRepository, Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { AbstractPaginationDto } from '../dto/abstract-pagination.dto';
import { PaginateItems } from '../response.transformer';

export class AbstractService {
  repository: any;
  name: string;

  create(payload: any, ...args) {
    const entity = this.repository.create(payload);
    return this.repository.save(entity);
  }

  findAll(pagination: AbstractPaginationDto, ...args) {
    return PaginateItems(this.repository, pagination);
  }

  list(...args) {
    return this.repository.find({ select: ['id', 'name'] });
  }

  async findOne(id: string, ...args) {
    const response = await this.repository.findOne(id);

    if (!response) {
      throw new NotFoundException(`${this.name} Not Found`);
    }

    return response;
  }

  async update(id: string, payload: any, ...args) {
    await this.findOne(id);
    await this.repository.update(id, payload);
    return this.findOne(id);
  }

  async remove(id: string, ...args) {
    await this.findOne(id);
    await this.repository.delete(id);
    return null;
  }

  async resolveRelationships<T>(
    payload: any[],
    /* entity: EntityTarget<T> */ entity: any,
  ) {
    // let entity: T;
    // console.log({
    //   entity,
    // });
    const data = [];
    for (const id of payload) {
      const item = await getRepository(entity).findOne({ where: { id } });
      if (item) {
        data.push(item);
      }
    }
    // console.log(data);
    return data;
  }
}
