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

    irHome(): void {
        this.router.navigateByUrl('');
    }

    irCarrito(): void {
        this.router.navigateByUrl('cart');
    }

    public goToAdmin(): void {
        this.router.navigateByUrl('admin');
    }
}
