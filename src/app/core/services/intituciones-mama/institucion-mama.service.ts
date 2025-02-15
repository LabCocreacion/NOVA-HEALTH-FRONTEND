import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Instituto } from '../../models/instituto.model';

@Injectable({
  providedIn: 'root'
})
export class InstitucionMamaService {

  private apiUrl = 'http://localhost:5001/api/tamizacion-mama';

  constructor(private http: HttpClient) { }

  getInstituciones(): Observable<Instituto[]> {
    return this.http.get<Instituto[]>(`${this.apiUrl}/instituciones`, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error fetching institutos:', error);
          throw error;
        })
      );
  }

}