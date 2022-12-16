import { MovieEntity } from 'src/movie/entities/movie-entity';
import { SerieEntity } from 'src/serie/entities/serie.entity';

export class MovieBasicEntity {
  id: string;
  userId: string;
  movie?: MovieEntity[];
  serie?: SerieEntity[];
}
