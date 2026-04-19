import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolsService {
  constructor(@InjectRepository(School) private schoolsRepository: Repository<School>) {}
  findAll() { return this.schoolsRepository.find(); }
  create(createDto: any) { return this.schoolsRepository.save(this.schoolsRepository.create(createDto)); }
  remove(id: string) { return this.schoolsRepository.delete(id); }
}
