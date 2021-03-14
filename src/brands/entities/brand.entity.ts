import { Entity } from "typeorm";
import { BasicEntity } from "../../shared/entities/basic-entity";


@Entity('brands')
export class Brand extends BasicEntity{}
