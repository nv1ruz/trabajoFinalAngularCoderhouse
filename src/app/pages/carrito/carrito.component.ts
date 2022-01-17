import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
    constructor(public _carritoService: CarritoService) {}

    ngOnInit(): void {}
}
