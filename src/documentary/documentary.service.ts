import { Injectable } from "@nestjs/common";
import { DocumentaryRepository } from "./documentary.repository";

@Injectable()
export class DocumentaryService {
    constructor(private readonly repository: DocumentaryRepository) {}
}