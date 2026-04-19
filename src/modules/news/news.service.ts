import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  findAll() { return this.newsRepository.find(); }
  create(createDto: any) { return this.newsRepository.save(this.newsRepository.create(createDto)); }
  remove(id: string) { return this.newsRepository.delete(id); }
}
