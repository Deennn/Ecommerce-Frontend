import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetResponse } from '../common/models/GetResponse';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService  implements GetResponse{
  private baseUrl = 'http://localhost:8005/api/products';

  constructor(private httpClient: HttpClient) {}
  _embedded!: { products: Product[]; };

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
}


