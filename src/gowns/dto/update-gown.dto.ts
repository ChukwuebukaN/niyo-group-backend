import { PartialType } from "@nestjs/mapped-types";
import { AddGownDto } from "./add-gown.dto";

export class UpdateGownDto extends PartialType(AddGownDto) {}
