import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UserType } from 'src/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', description: 'The user password' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'ACME Corp', description: 'Organization name', required: false })
  @IsOptional()
  @IsString()
  organization?: string;

  @ApiProperty({ example: '+1234567890', description: 'Phone number', required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ example: '1990-01-01', description: 'Date of birth', required: false })
  @IsOptional()
  @IsDateString()
  dob?: string; // Use `IsDateString` for proper date validation

  @ApiProperty({ enum: UserType, example: UserType.USER, description: 'User type' })
  @IsEnum(UserType)
  type: UserType;
}

export class LoginDto {
  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' , description: 'The user password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}