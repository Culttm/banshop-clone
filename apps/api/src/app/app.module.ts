import {Module} from '@nestjs/common';

import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import config from "./config/ormconfig";
import {UserControllerModule} from "@banshop/api/user/infrastructure";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            ...config,
            autoLoadEntities: true,
            extra: {
                ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : false,
            },
        }),
        UserControllerModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
