import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './utils/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './utils/session.serializer';

@Module({
  imports: [PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    SessionSerializer,
    LocalStrategy,
  ],
})
export class AuthModule {}
