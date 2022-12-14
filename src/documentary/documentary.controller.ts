import { Controller } from "@nestjs/common";
import { DocumentaryService } from "./documentary.service";

@Controller()
export class DocumentaryController {
    constructor(private readonly servive: DocumentaryService) {}
}