import config from './ormconfig';
import { join } from 'path';

export = {
    ...config,
    entities: [
        `${join(__dirname, '/', 'api')}**/*.entity.{ts,js}`,
        `${join(process.cwd(), 'libs', 'api')}/**/*.entity.{ts,js}`,
        `${join(process.cwd(), 'apps', 'api')}/**/*.entity{.ts,.js}`,
    ],
    migrations: [
        `${join(process.cwd())}/apps/api/migrations/**/*.ts`
    ],
    cli: {
        migrationsDir: `apps/api/migrations`,
    },
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false
};
