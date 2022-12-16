import { MovieBasicEntity } from 'src/movieflix-basic/entities/movieflix-basic.entity';
import { MoviePatternEntity } from 'src/movieflix-pattern/entities/movieflix-pattern.entity';
import { MoviePremiumEntity } from 'src/movieflix-premium/entities/movieflix-premium.entity';

export class MovieEntity {
  id: string;
  title: string;
  description: string;
  evaluation: number;
  image: string;
  moviebasic: MovieBasicEntity[];
  moviepattern: MoviePatternEntity[];
  moviepremium: MoviePremiumEntity[];
}
