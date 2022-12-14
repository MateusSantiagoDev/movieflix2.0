import { Controller } from "@nestjs/common";
import { DrawingService } from "./drawing.service";

@Controller()
export class DrawingController {
    constructor(private readonly service: DrawingService) {}
}