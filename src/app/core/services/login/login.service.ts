import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/api/users/login';
  private isLoggedIn = false;
  private userName: string | null = null;
  private userProject: string | null = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', response.userName); 
          localStorage.setItem('userProject', response.userProject); 
          localStorage.setItem('userRol', response.userRol);
          localStorage.setItem('userIdent', response.userIdent);
          localStorage.setItem('userInstitucion', response.userInstitucion);
          localStorage.setItem('userEmail', response.userEmail);
          this.isLoggedIn = true;
          this.userName = response.userName;
          this.userProject = response.userProject;
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userProject');
    localStorage.removeItem('userRol');
    localStorage.removeItem('userIdent');
    localStorage.removeItem('userInstitucion');
    localStorage.removeItem('userEmail');
    this.isLoggedIn = false;
    this.userName = null;
    this.userProject = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token');
  }

  getUserName(): string | null {
    if (!this.userName) {
      this.userName = localStorage.getItem('userName');
    }
    return this.userName;
  }

  getUserInfo(): any {
    return {
      userName: this.getUserName(),
      userProject: this.getUserProject(),
      userRol: localStorage.getItem('userRol'),
      userIdent: localStorage.getItem('userIdent'),
      userInstitucion: localStorage.getItem('userInstitucion'),
      userEmail: localStorage.getItem('userEmail')
    };
  }

  getUserProject(): string | null {
    if (!this.userProject) {
      this.userProject = localStorage.getItem('userProject');
    }
    return this.userProject;
  }
  
}