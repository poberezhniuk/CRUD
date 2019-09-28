import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./UserData";

@Injectable({
  providedIn: "root"
})
export class DataService {
  apiurl = "api/users";
  httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "appliccation/json")
  };

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiurl)
      .pipe(catchError(this.handleError));
  }

  deleteUser(user: User | number): Observable<{}> {
    const id = typeof user === "number" ? user : user.id;

    return this.http
      .delete<User>(`${this.apiurl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<{}> {
    return this.http
      .put<User>(this.apiurl, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addUser(user: User): Observable<{}> {
    return this.http
      .post<User>(this.apiurl, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
