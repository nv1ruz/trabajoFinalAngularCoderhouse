import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/users-api.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private base_url_api_iptteam: string = environment.base_url_api_peliculas;

  constructor(private http: HttpClient) {}

  /*
	Nota: no he encontrado la forma de hacer en MockApi un endpoint que reciba 
	por un post el usuario y contraseña, y donde valide si el usuario existe
	me devuelva los datos del usuario sin la contraseña. 
  */
  public login(email: string, pass: string): Observable<IUser> {
    let userId: number = 0;

    if (email == 'braian.martz@gmail.com' && pass == 'coder') {
      // usuario con rol ADMIN
      userId = 1;
    } else if (email == 'usuario@gmail.com' && pass == 'coder') {
      // usuario con rol USER
      userId = 2;
    } else {
      userId = 0;
    }

    const url = `${this.base_url_api_iptteam}/users/${userId}`;

    return this.http.get<IUser>(url).pipe(
      tap((response) => {
        // simula un token que devuelve la petición
        localStorage.setItem('token', 'j2143239543u9heru9gfdnbjn');
      })
    );
  }
}
