import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Gowns } from "./gowns/entities/gown.entity";
import { GownsModule } from "./gowns/gowns.module";

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
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    GownsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
