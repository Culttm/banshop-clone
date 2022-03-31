import { Controller, Get, Inject } from '@nestjs/common';
import {
  UseCaseProxy,
  UserUseCaseProxyModule,
} from '../proxy/user-use-case-proxy.module';
import { GetUsersUseCase } from '@banshop/api/user/application';
import { User } from '@banshop/api/user/domain';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserUseCaseProxyModule.GET_USERS_USE_CASE_PROXY)
    private readonly getUsersUseCaseProxy: UseCaseProxy<GetUsersUseCase>
  ) {}

  @Get()
  async getUsersAction(): Promise<User[]> {
    return this.getUsersUseCaseProxy.getInstance().invoke();
  }
}
