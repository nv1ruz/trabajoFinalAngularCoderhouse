import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/users-api.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersApiService {
    private base_url_api_iptteam: string = environment.base_url_api_peliculas;
    private _user?: IUser;

    constructor(private http: HttpClient, private router: Router) {}

    get user(): IUser {
        return this._user;
    }

    /*
	Nota: no he encontrado la forma de hacer en MockApi un endpoint que reciba 
	por un post el usuario y contraseña, y donde valide si el usuario existe
	me devuelva los datos del usuario sin la contraseña. 
  */
    public login(email: string, pass: string): Observable<boolean> {
        const url = `${this.base_url_api_iptteam}/users`;

        return this.http.get<IUser[]>(url).pipe(
            map((response) => {
                const usuario = response.find((item) => item.email == email);
                if (!usuario || usuario.password !== pass) {
                    return false;
                }

                this._user = usuario;
                localStorage.setItem('USER_EMAIL', usuario.email);
                localStorage.setItem('USER_PASS', usuario.password);
                localStorage.setItem('ACCESS_TOKEN', 'j2143239543u9heru9gfdnbjn');
                return true;
            }),
            catchError((error) => of(false))
        );
    }

    /*
 	Nota: La validación de que ya exista un usuario con el email ingresado 
	se realizará en otro práctico... 
  */
    public register(email: string, pass: string): Observable<IUser> {
        const url = `${this.base_url_api_iptteam}/users`;
        const body = {
            email,
            first_name: email.substring(0, email.indexOf('@', 1)),
            last_name: '',
            password: pass,
            role: 'USER',
        };

        return this.http.post<IUser>(url, body).pipe(
            tap((response) => {
                this._user = response;
                localStorage.setItem('USER_EMAIL', response.email);
                localStorage.setItem('USER_PASS', response.password);
                localStorage.setItem('ACCESS_TOKEN', 'j2143239543u9heru9gfdnbjn');
            })
        );
    }

    public logout(): void {
        localStorage.removeItem('ACCESS_TOKEN');
        this.router.navigateByUrl('ingresar');
    }
}
