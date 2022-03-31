import { DynamicModule, Module } from '@nestjs/common';
import { GetUsersUseCase } from '@banshop/api/user/application';

import { UserRepositoryModule } from '../repository/user-repository.module';
import { UserRepositoryImpl } from '../repository/user.repository';

export class UseCaseProxy<T> {
  constructor(private readonly useCase: T) {}
  getInstance(): T {
    return this.useCase;
  }
}

@Module({
  imports: [UserRepositoryModule],
})
export class UserUseCaseProxyModule {
  static GET_USERS_USE_CASE_PROXY = 'GET_USERS_USE_CASE_PROXY';

  static register(): DynamicModule {
    return {
      module: UserUseCaseProxyModule,
      providers: [
        {
          inject: [UserRepositoryImpl],
          provide: UserUseCaseProxyModule.GET_USERS_USE_CASE_PROXY,
          useFactory: (repo: UserRepositoryImpl) =>
            new UseCaseProxy(new GetUsersUseCase(repo)),
        },
      ],
      exports: [UserUseCaseProxyModule.GET_USERS_USE_CASE_PROXY],
    };
  }
}
