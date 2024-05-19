import { Type } from "class-transformer";
import {
  IsDefined,
  IsInt,
  IsNumber,
  IsNumberString,
  Validate,
} from "class-validator";

export class GetGownDto {
  // @Type(() => Number)
  // @IsNumber()
  // @Type(() => Number)
  // @IsInt()
  @IsDefined()
  @Validate(IsNumberString())
  readonly id: number;
}
