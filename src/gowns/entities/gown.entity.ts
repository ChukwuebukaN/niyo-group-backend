import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "gowns" })
export class Gowns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  gownType: string;
}
