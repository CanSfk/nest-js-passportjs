import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers.controller';
import { AuthController } from './auth/auth.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  controllers: [ControllersController, AuthController],
  providers: [AuthService]
})
export class AuthModule {}
