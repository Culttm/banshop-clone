import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '@banshop/api/user/infrastructure';

export class CreateUsersSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(UserEntity)().createMany(100);
  }
}
