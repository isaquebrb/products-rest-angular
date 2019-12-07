import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = "http://localhost:3000/orders/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.apiUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
