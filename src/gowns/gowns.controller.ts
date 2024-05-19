import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { GownsService } from "./gowns.service";
import { AddGownDto } from "./dto/add-gown.dto";
import { UpdateGownDto } from "./dto/update-gown.dto";
import { GetGownDto } from "./dto/get-gown.dto";

@Controller("gowns/")
export class GownsController {
  constructor(private readonly gownsService: GownsService) {}
  /** This endpoint is used to delete a specific Gown */
  @Delete("delete-specific/:id")
  DeleteSpecificGown(@Param("id") id: number) {
    return this.gownsService.DeleteSpecificGown(id);
  }
  /** This endpoint is used to add a Gown */
  @Post("add")
  AddGown(@Body() addGownDto: AddGownDto) {
    return this.gownsService.AddGown(addGownDto);
  }

  /** This endpoint is used to get a specific Gown */
  @Get("/get-specific/:id")
  geGetSpecificGownt(@Param("id") id: number) {
    return this.gownsService.GetSpecificGown(id);
  }

  /** This endpoint is used to get all Gowns */
  @Get("get-all")
  GetAllGowns() {
    return this.gownsService.GetAllGowns();
  }

  /** This endpoint is used to edit a specific Gown */
  @Patch("edit-specific/:id")
  EditSpecificGown(
    @Param("id") id: number,
    @Body() updateGownDto: UpdateGownDto,
  ) {
    return this.gownsService.EditSpecificGown(id, updateGownDto);
  }
}
