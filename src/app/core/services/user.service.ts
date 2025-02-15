import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO - replace with environment variable
  private apiUrl = 'http://127.0.0.1:5000/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error;
        })
      );
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error(`Error fetching user with ID ${id}:`, error);
          throw error;
        })
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/add`, user, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error adding user:', error);
          throw error;
        })
      );
  }
  
  

}
