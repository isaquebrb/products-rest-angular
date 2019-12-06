import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "./user";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiUrl: string = "http://localhost:3000/users/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getOne(id): Observable<User> {
    return this.http
      .get<User>(this.apiUrl + "/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete<User>(this.apiUrl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  create(product): Observable<User> {
    return this.http
      .post<User>(this.apiUrl, JSON.stringify(product), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id, product): Observable<User> {
    return this.http
      .put<User>(
        this.apiUrl + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
