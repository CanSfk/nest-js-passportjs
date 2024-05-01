import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// ?? Uygulamadaki rotaları yetkisiz girişi engellem kiçin kullanılıyor.
// ?? Kimlik doğrulama işlemi başlatır.
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    console.log('localAuthGurad is running');

    // ?? Kimlik doğrulama işlemi gerçekleşiyor. Dönüş tipi bir bool değeri olarak alınıyor.
    const result = (await super.canActivate(context)) as boolean;

    // ?? Http istek nesnesinden gerekli kimlik doğrulama için kullanılacak verilere erişim sağlanıyor.
    const request = context.switchToHttp().getRequest();

    // ?? Kullanıcının oturum açması sağlanıyor.
    await super.logIn(request);

    return result;
  }
}
