import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

// ?? Belirli bir rotaya erişip erişelemeyeceğini belirler.
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    // ?? Kullanıcının kimlik doğrulaması yapılıp yapılmadığı kontrol edilir.
    return request.isAuthenticated();
  }
}
