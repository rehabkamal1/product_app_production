
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsReqService {
  private apiUrl = 'https://dummyjson.com/products'; 

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        'limit': '100',
        'sort': 'name',
        'order': 'asc',
      }
    });
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); 
  }
}
