import { MoviePatternEntity } from 'src/movieflix-pattern/entities/movieflix-pattern.entity';
import { MoviePremiumEntity } from 'src/movieflix-premium/entities/movieflix-premium.entity';

export class DrawingEntity {
  id: string;
  title: string;
  description: string;
  evaluation: number;
  image: string;
  moviepattern: MoviePatternEntity[];
  moviepremium: MoviePremiumEntity[];
}
