import { IMovie } from './movies-api.interface';

export interface ICart {
    id: string;
    user: string;
    movies: IMovie[];
    createdAt: Date;
}

export interface ICartDataCreate {
    user: string;
    movies: IMovie[];
}
