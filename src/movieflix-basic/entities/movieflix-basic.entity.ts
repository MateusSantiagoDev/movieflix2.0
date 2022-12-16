import { MovieEntity } from 'src/movie/entities/movie-entity';
import { SerieEntity } from 'src/serie/entities/serie.entity';
import { UserEntity } from 'src/user/entities/user.entity';

export class MovieBasicEntity {
  id: string;
  userId?: UserEntity;
  movieId?: MovieEntity[];
  serieId?: SerieEntity[];
}
