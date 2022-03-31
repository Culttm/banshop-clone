import { Module } from '@nestjs/common';
import { UserUseCaseProxyModule } from '../proxy/user-use-case-proxy.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserUseCaseProxyModule.register()],
  controllers: [UserController],
})
export class UserControllerModule {}
