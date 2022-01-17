import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/data/interfaces/users-api.interface';
import { UsersApiService } from 'src/app/data/services/users-api.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    @Input() title: string = 'Coderhouse';

    constructor(private router: Router, public _usersApi: UsersApiService) {}

    ngOnInit(): void {}

    irCarrito(): void {
        this.router.navigateByUrl('cart');
    }

    public goToAdminMovies(): void {
        this.router.navigateByUrl('admin/movies');
    }

    public goToMyCarts(): void {
        this.router.navigateByUrl('my_carts');
    }

    public goToHome(): void {
        this.router.navigateByUrl('');
    }

    public goToAdminAllCarts(): void {
        this.router.navigateByUrl('admin/all_carts');
    }
}
