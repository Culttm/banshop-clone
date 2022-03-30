import config from './ormconfig';
import { join } from 'path';

const migrations = [`${join(__dirname, '../../../../../')}apps/api/migrations/**/*{.ts,.js}`];

export = {
    ...config,
    entities: [
        `${join(__dirname, '/', 'api')}**/*.entity.{ts,js}`,
        `${join(process.cwd(), 'libs', 'api')}/**/*.entity.{ts,js}`,
        `${join(process.cwd(), 'apps', 'api')}/**/*.entity{.ts,.js}`,
    ],
    migrations,
    cli: {
        migrationsDir: `apps/api/migrations`,
    },
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false
};
