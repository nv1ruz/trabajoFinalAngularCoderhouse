import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/data/interfaces/carts-api.interface';
import { CarritoApiService } from 'src/app/data/services/carrito-api.service';

@Component({
    selector: 'app-all-carts',
    templateUrl: './all-carts.component.html',
    styleUrls: ['./all-carts.component.css'],
})
export class AllCartsComponent implements OnInit {
    public carts: ICart[] = [];
    private suscripcionCarts: Subscription;
    constructor(private _carritoApi: CarritoApiService) {}

    ngOnInit(): void {
        this.loadAllCarts();
    }

    ngOnDestroy(): void {
        if (this.suscripcionCarts) this.suscripcionCarts.unsubscribe();
    }

    public loadAllCarts(): void {
        this.suscripcionCarts = this._carritoApi.getAllCarts().subscribe((resp) => {
            console.log(resp);
            this.carts = resp;
        });
    }
}
