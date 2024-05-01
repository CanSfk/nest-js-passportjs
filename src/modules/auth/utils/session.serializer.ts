import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '../services/auth/auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  // ?? Kullanıcı bilgilerini oturumu kaydetmek için uygun bir formata dönüştürür.
  serializeUser(user: any, done: (err: Error, user: User) => void) {
    console.log('Serialize User');

    done(null, user);
  }

  // ?? Daha önce serileştirilmiş kullanıcı bilgilerini eski haline döndüştürür.
  deserializeUser(payload: any, done: (err: Error, payload: any) => void) {
    console.log('Deserialize user');

    done(null, payload);
  }
}
