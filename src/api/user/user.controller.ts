import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { UserService } from './user.service';
import { RegisterDto } from '../auth/dto/create.auth.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of users retrieved successfully',
    type: [RegisterDto] 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  listUser() {
    return this.userService.listUser();
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ 
    status: 201, 
    description: 'User created successfully',
    type: RegisterDto 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createRegisterDto: RegisterDto) {
    return this.userService.createUser(createRegisterDto);
  }
}