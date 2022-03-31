import Faker from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from '@banshop/api/user/infrastructure';

define(UserEntity, (faker: typeof Faker) => {
  const username = faker.name.firstName();
  const lastname = faker.name.lastName();
  const password = '111';
  const email = faker.internet.email(
    username.toLowerCase(),
    lastname.toLowerCase(),
    'mail.com'
  );

  const user = new UserEntity();

  user.username = username;
  user.email = email;
  user.password = password;

  return user;
});
