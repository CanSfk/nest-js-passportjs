import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: 'Random_string_bir_ifade',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 6000,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
