import { PartialType } from "@nestjs/swagger";
import { CreateDocumentaryDto } from "./create-documentary.dto";

export class UpdateDocumentary extends PartialType(CreateDocumentaryDto) {}