import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll() {
    return this.postsRepository.find({ relations: ['author'] });
  }

  create(createDto: any, userId: string) {
    const post = this.postsRepository.create({
      ...createDto,
      author: { id: userId },
    });
    return this.postsRepository.save(post);
  }

  remove(id: string) {
    return this.postsRepository.delete(id);
  }
}
