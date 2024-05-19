import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddGownDto } from "./dto/add-gown.dto";
import { UpdateGownDto } from "./dto/update-gown.dto";
import { Gowns } from "./entities/gown.entity";

@Injectable()
export class GownsService {
  constructor(
    @InjectRepository(Gowns)
    private readonly gownsRepository: Repository<Gowns>,
  ) {}

  /** This endpoint is used to add a Gown */
  async AddGown(addGown: AddGownDto) {
    const gowns = this.gownsRepository.create(addGown);
    return await this.gownsRepository.save(gowns);
  }

  /** This endpoint is used to get a specific Gown */
  async GetSpecificGown(id) {
    return this.gownsRepository.findOne({ where: { id: id } });
  }

  /** This endpoint is used to get all Gowns */
  async GetAllGowns() {
    return this.gownsRepository.find();
  }

  /** This endpoint is used to edit a specific Gown */
  async EditSpecificGown(id: number, updateGownDto: UpdateGownDto) {
    /** Check if the Gown exists */
    const specificGown = await this.gownsRepository.findOne({
      where: { id: id },
    });

    Object.assign(specificGown, updateGownDto);

    return await this.gownsRepository.save(specificGown);
  }

  /** This endpoint is used to delete a specific Gown */
  async DeleteSpecificGown(id: number) {
    /** Check if the Gown exists */
    const specificGown = await this.gownsRepository.findOne({
      where: { id: id },
    });

    return await this.gownsRepository.remove(specificGown);
  }
}
