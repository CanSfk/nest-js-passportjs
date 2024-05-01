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
import { Request } from 'express';
import { LocalAuthGuard } from '../../utils/local.auth.guard';
import { AuthenticatedGuard } from '../../utils/authenticated.guard';

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

  @UseGuards(LocalAuthGuard)
  @Post('user/login')
  login(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('user/profile')
  profile(@Req() req: Request) {
    return {
      msg: 'You an authorized user',
      user: req.user,
    };
  }
}
