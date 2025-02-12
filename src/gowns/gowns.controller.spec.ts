import { Test, TestingModule } from "@nestjs/testing";
import { GownsController } from "./gowns.controller";
import { GownsService } from "./gowns.service";

describe("GownsController", () => {
  let controller: GownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GownsController],
      providers: [GownsService],
    }).compile();

    controller = module.get<GownsController>(GownsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
