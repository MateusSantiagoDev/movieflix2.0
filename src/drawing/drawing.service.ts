import { Injectable } from "@nestjs/common";
import { DrawingRepository } from "./drawing.repository";

@Injectable()
export class DrawingService {
    constructor(private readonly repository: DrawingRepository) {}
}