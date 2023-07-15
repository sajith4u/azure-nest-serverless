import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Song {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  imageUrl: string;

  @Column({ default: true })
  isActive: boolean;
}
