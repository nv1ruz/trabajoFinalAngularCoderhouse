export interface IMovie {
  id: string;
  title: string;
  description: string;
  rating: number;
  image: string;
  year: number;
  created_at: string;
}

export interface IMovieDataCreate {
  title: string;
  description: string;
  rating: number;
  image: string;
  year: number;
}

export interface IMovieDataUpdate {
  id: string;
  title: string;
  description: string;
  rating: number;
  image: string;
  year: number;
}
