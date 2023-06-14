import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 30 })
  public title: string;

  @Column({ type: 'varchar', length: 20 })
  public author: string;

  @Column({ type: 'varchar', length: 500 })
  public description: string;

  @Column({ type: 'varchar', length: 4 })
  public year_published: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
