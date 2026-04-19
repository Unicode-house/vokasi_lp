import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Roles(Role.USER, Role.ADMIN, Role.SUPER_ADMIN)
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Post()
  create(@Body() createDto: any, @Request() req) {
    return this.postsService.create(createDto, req.user.id);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
