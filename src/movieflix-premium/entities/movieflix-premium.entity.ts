import { DrawingEntity } from 'src/drawing/entities/drawing.entity';
import { MovieEntity } from 'src/movie/entities/movie-entity';
import { SerieEntity } from 'src/serie/entities/serie.entity';

export class MoviePremiumEntity {
  id: string;
  premiumId: string;
  movie?: MovieEntity[];
  serie?: SerieEntity[];
  drawing?: DrawingEntity[];
}
