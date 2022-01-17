import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersApiService } from '../data/services/users-api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _usersApi: UsersApiService, private router: Router) {}

    /*
		De esta forma hago una "simulación de una validación de token"
		pero con el email y contraseña almacenado en el localstorage (que no se debe hacer, 
		solo que no encontré la forma de hacer que MockApi genere un token)
	*/
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        const email = localStorage.getItem('USER_EMAIL');
        const pass = localStorage.getItem('USER_PASS');

        return this._usersApi.login(email, pass).pipe(
            tap((esValido) => {
                if (!esValido) {
                    localStorage.clear();
                    this.router.navigateByUrl('/ingresar');
                }
            })
        );
    }
}
