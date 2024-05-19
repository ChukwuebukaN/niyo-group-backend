import { Module } from "@nestjs/common";
import { GownsService } from "./gowns.service";
import { GownsController } from "./gowns.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gowns } from "./entities/gown.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Gowns])],
  controllers: [GownsController],
  providers: [GownsService],
})
export class GownsModule {}
