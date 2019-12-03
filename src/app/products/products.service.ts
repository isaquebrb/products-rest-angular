import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  
  constructor(private http: HttpClient) { }
  
  private  handleError<T> (operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getAll(): Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl)
      .pipe(
        tap(products => console.log('read products')),
        catchError(this.handleError('getProducts', []))
      );
  }
}

