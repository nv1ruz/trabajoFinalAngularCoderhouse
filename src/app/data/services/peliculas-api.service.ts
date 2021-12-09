import { Injectable } from '@angular/core';
import { IPelicula } from '../interfaces/peliculas.interface';

@Injectable({
	providedIn: 'root'
})
export class PeliculasApiService {
	private _listadoPeliculas: IPelicula[] = [
		{
			id: 1,
			portada: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
			titulo: 'Batman: The dark knight',
			anio: 2008,
			reputacion: 8,
			sinopsis: `Con la ayuda del teniente James Gordon y el Fiscal de Distrito Harvey Dent, Batman se propone destruir la delincuencia organizada para el bien de Ciudad Gótica. El trío demuestra ser eficaz, pero pronto se ve presa de una creciente mente criminal: conocido como el Guasón, quien empuja a Ciudad Gótica hacia la anarquía y fuerza al Caballero Oscuro a estar más cerca de cruzar la delgada línea entre héroe y vigilante.
			REFERENCIA`
		},
		{
			id: 2,
			portada: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
			titulo: 'Spider-Man',
			anio: 2002,
			reputacion: 7,
			sinopsis: `En un viaje escolar, Peter Parker, un estudiante de último año de secundaria, visita un laboratorio de genética de la Universidad de Columbia, donde es mordido por una súper araña diseñada genéticamente que escapó de la contención y aparentemente se enferma después de regresar a casa.`
		},
		{
			id: 3,
			portada: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
			titulo: 'The Shawshank Redemption',
			anio: 1994,
			reputacion: 9,
			sinopsis: `Basada en la novela corta de Stephen King, Rita Hayworth y la redención de Shawshank, el film abarca una mirada optimista de la vida, contando la historia de dos amigos, Robbins y Freeman, en una prisión. Se enfatiza en el no perder las esperanzas, incluso en la más inhóspitas situaciones.`
		},
		{
			id: 4,
			portada: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
			titulo: 'S7ven',
			anio: 1995,
			reputacion: 8.6,
			sinopsis: `Los detectives empiezan a investigar una serie de asesinatos relacionados con los siete pecados capitales. ... En cada escena del crimen, Somerset y Mills encuentran nuevas pistas que los conducen al siguiente asesinato, razón por la cual creen que están tras un asesino en serie.`
		},
	];


	constructor() { }


	public obtenerPeliculas(): IPelicula[]
	{
		return this._listadoPeliculas;
	}


	public obtenerPeliculaPorId(peliculaId: number): IPelicula | undefined
	{
		return this._listadoPeliculas.find(item => item.id == peliculaId);
	}
}
