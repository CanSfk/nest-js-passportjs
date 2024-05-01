import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AuthService, User } from '../../services/auth/auth.service';

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
}
