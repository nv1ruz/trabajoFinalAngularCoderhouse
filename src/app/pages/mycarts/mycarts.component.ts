import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/data/interfaces/carts-api.interface';
import { CarritoApiService } from 'src/app/data/services/carrito-api.service';
import { UsersApiService } from 'src/app/data/services/users-api.service';

@Component({
    selector: 'app-mycarts',
    templateUrl: './mycarts.component.html',
    styleUrls: ['./mycarts.component.css'],
})
export class MycartsComponent implements OnInit {
    public carts: ICart[] = [];
    private suscripcionCarts: Subscription;

    constructor(private _carritoApi: CarritoApiService, private _usersApi: UsersApiService) {}

    ngOnInit(): void {
        this.loadMyCarts();
    }

    ngOnDestroy(): void {
        if (this.suscripcionCarts) this.suscripcionCarts.unsubscribe();
    }

    public loadMyCarts(): void {
        const userId = this._usersApi.user.id;
        this.suscripcionCarts = this._carritoApi.getCartsByUserId(userId).subscribe((resp) => {
            console.log(resp);
            this.carts = resp;
        });
    }
}
