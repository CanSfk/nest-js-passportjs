import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth/auth.module';
import { Module } from './modules/auth/.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
