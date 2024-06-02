import { Module } from "@nestjs/common";
import { GownsService } from "./gowns.service";
import { GownsController } from "./gowns.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gowns } from "./entities/gown.entity";
import { User } from "src/user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Gowns, User])],
  controllers: [GownsController],
  providers: [GownsService],
})
export class GownsModule {}
