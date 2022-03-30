import { join } from 'path'
import * as path from "path";
import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'sqlite',
    database: path.resolve(`${process.cwd()}`, 'data', 'db.sqlite'),
    entities: [
        `${join(process.cwd(), 'dist', 'apps', 'api')}/**/*.entity{.ts,.js}`
    ],
    synchronize: false,
    migrationsRun: true,
    logging: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development' ? 'advanced-console' : 'file',


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    seeds: [
        `${join(process.cwd(), 'apps', 'api', 'src', 'seed', 'seeds')}/**/*{.ts,.js}`,
    ],
    factories: [
        `${join(process.cwd(), 'apps', 'api', 'src', 'seed', 'factories')}/**/*{.ts,.js}`,
    ],
};

export default config
