import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('AUTH_SERVICE') private authService: AuthService) {
    super();
  }

  validate(username: string, password: string) {
    console.log('Inside LocalStrategy Validate local.strategy.');

    const user = this.authService.validateUser(username, password);

    if (!user)
      throw new UnauthorizedException('User name or password is wrong!');

    return user;
  }
}
