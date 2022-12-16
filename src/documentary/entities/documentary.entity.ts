import { MoviePremiumEntity } from "src/movieflix-premium/entities/movieflix-premium.entity";

export class DocumentaryEntity {
  id: string;
  title: string;
  description: string;
  evaluation: number;
  image: string;
  moviepremium: MoviePremiumEntity[];
}
