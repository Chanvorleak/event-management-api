import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  SUPER_ADMIN="SUPER_ADMIN",
  ADMIN="ADMIN",
  ORGANIZER="ORGANIZER",
  USER="USER",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  organization?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true, type: 'date' })
  dob?: Date;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.USER, // Default user type
  })
  type: UserType;
}
