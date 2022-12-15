import { PartialType } from "@nestjs/swagger";
import { CreateMovieBasicDto } from "./create-moviebasic.dto";


export class UpdateMovieBasicDto extends PartialType(CreateMovieBasicDto) {}