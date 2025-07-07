import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GownsModule } from "./gowns/gowns.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        type: "mysql",
        host: ConfigService.get("HOST"),
        port: ConfigService.get("PORT"),
        username: ConfigService.get("DATABASE_USERNAME"),
        password: ConfigService.get("DATABASE_PASSWORD"),
        database: ConfigService.get("DATABASE_NAME"),
        entities: [join(process.cwd(), "dist/**/*.entity.js")],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    GownsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
