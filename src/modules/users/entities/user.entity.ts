import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { School } from '../../schools/entities/school.entity';
import { Post } from '../../posts/entities/post.entity';
import { Role } from '../../auth/enums/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password?: string; // Can be optional if using google login, but for now we keep it

  @Column()
  full_name: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @ManyToOne(() => School, (school) => school.users, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'school_id' })
  school: School;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
