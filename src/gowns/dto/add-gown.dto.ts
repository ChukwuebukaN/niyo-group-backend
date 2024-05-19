import { IsNotEmpty, IsOptional } from "class-validator";

export class AddGownDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;

  @IsOptional()
  gownType: string;
}
