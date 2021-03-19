import {ID} from '@datorama/akita';

export interface Movie {
  id: ID,
  name: string,
  releaseDate?: Date
}
