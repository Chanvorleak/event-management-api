import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from '../auth/dto/create.auth.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  listUser(){
    return this.userService.listUser()
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() createRegisterDto: RegisterDto) {
    return this.userService.createUser(createRegisterDto);
  }
}
