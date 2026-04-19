import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Roles(Role.SUPER_ADMIN)
  @Get()
  findAll() { return this.schoolsService.findAll(); }

  @Roles(Role.SUPER_ADMIN)
  @Post()
  create(@Body() createDto: any) { return this.schoolsService.create(createDto); }

  @Roles(Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) { return this.schoolsService.remove(id); }
}
