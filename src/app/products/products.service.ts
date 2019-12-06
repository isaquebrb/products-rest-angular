import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Products } from "./products";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  apiUrl = "http://localhost:3000/products/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getAll(): Observable<Products[]> {
    return this.http
      .get<Products[]>(this.apiUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getOne(id): Observable<Products> {
    return this.http
      .get<Products>(this.apiUrl + "/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete<Products>(this.apiUrl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  create(product): Observable<Products> {
    return this.http
      .post<Products>(this.apiUrl, JSON.stringify(product), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id, product): Observable<Products> {
    return this.http
      .put<Products>(
        this.apiUrl + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
}
