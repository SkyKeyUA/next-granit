import { User } from '@users/model/user.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface ProductCreationAttrs {
  title: string;
  content: string;
  image: string;
  userId: number;
  subCatalogId: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({ type: DataType.STRING, allowNull: true })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @Column({ type: DataType.STRING, allowNull: false })
  subCatalogId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
