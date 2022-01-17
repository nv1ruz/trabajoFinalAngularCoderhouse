import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart, ICartDataCreate } from '../interfaces/carts-api.interface';

@Injectable({
    providedIn: 'root',
})
export class CarritoApiService {
    private base_url_api_iptteam: string = environment.base_url_api_peliculas;

    constructor(private http: HttpClient) {}

    public createCart(data: ICartDataCreate): Observable<any> {
        const url = `${this.base_url_api_iptteam}/carts`;

        return this.http.post<any>(url, data);
    }

    public getCartsByUserId(userId: string): Observable<ICart[]> {
        const url = `${this.base_url_api_iptteam}/carts?user=${userId}&&sortBy=createdAt&order=desc`;

        return this.http.get<ICart[]>(url);
    }

    public getAllCarts(): Observable<ICart[]> {
        const url = `${this.base_url_api_iptteam}/carts?sortBy=createdAt&order=desc`;

        return this.http.get<ICart[]>(url);
    }
}
