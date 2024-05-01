import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService, User } from '../../services/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @Get('users')
  getAllUser(): User[] {
    return this.authService.getAllUser();
  }

  @Get('users/:username')
  getUserByName(@Param('username') username: string): User {
    return this.authService.getUserByName(username);
  }

  @UseGuards(AuthGuard('local'))
  @Post('user/login')
  login(@Req() req: Request) {
    return req.user;
  }
}
