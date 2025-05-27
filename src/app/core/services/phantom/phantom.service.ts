import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhantomService {

  private apiUrl = 'http://localhost:5002/api/phantom';

  constructor(private http: HttpClient) { }

  getMamografos() {
    return this.http.get<any[]>(`${this.apiUrl}/mamografos/list-mamografos`, { withCredentials: true });
  }

  createMamografo(mamografo: any) {
    return this.http.post(`${this.apiUrl}/mamografos/create-mamografo`, mamografo, { withCredentials: true });
  }

}
