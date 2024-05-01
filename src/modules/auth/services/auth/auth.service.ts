import { Injectable } from '@nestjs/common';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [
    {
      username: 'can-1',
      email: 'can1@gamil.com',
      password: '123',
    },
    {
      username: 'can-2',
      email: 'can2@gamil.com',
      password: '123',
    },
    {
      username: 'can-3',
      email: 'can3@gamil.com',
      password: '123',
    },
  ];

  getAllUser(): User[] {
    return this.users;
  }

  getUserByName(username: string): User {
    return this.users.find((user) => user.username === username);
  }

  validateUser(username: string, password: string) {
    console.log('Inside validate user auth.service');

    const user = this.getUserByName(username);

    if (user && user.password === password) return user;

    return null;
  }
}
