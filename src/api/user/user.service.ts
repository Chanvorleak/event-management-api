import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserType } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../auth/dto/create.auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(registerDto: RegisterDto): Promise<User> {
    const { name, email, password, type, organization, phoneNumber, dob } =
      registerDto;

    if (type === UserType.SUPER_ADMIN)
      throw new ForbiddenException('Not allow to create supper admin');
    if (type === UserType.ORGANIZER) {
      if (!organization) {
        throw new ForbiddenException('Organization is require');
      }
      if (!phoneNumber) {
        throw new ForbiddenException('Phone Number is require');
      }
      if (!dob) {
        throw new ForbiddenException('Date of Birth is require');
      }
    }
    // Check if email already exists
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('Email is already in use.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      type,
      organization,
      phoneNumber,
      dob,
    });

    return this.userRepository.save(newUser);
  }

  async listUser(){
    const users = await this.userRepository.find()

    return {
      records: users || [],
      message:"success"
    }
  }
}
