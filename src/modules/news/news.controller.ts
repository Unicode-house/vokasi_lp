import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Roles(Role.USER, Role.ADMIN, Role.SUPER_ADMIN)
  @Get()
  findAll() { return this.newsService.findAll(); }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Post()
  create(@Body() createDto: any) { return this.newsService.create(createDto); }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) { return this.newsService.remove(id); }
}
