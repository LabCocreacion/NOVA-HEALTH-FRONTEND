import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Instituto } from '../../models/instituto.model';
import { Patient } from '../../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class TamizacionMamaService {

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

  addInstitucion(institucion: Instituto): Observable<Instituto> {
    return this.http.post<Instituto>(`${this.apiUrl}/addInstitucion`, institucion, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error adding instituto:', error);
          throw error;
        })
      );
  }

  getPatients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patients/list-patients`, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error fetching patients:', error);
          throw error;
        })
      );
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/patients/add-patient`, patient, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error adding patient:', error);
          throw error;
        })
      );
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patients/update-patient`, patient, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error updating patient:', error);
          throw error;
        })
      );
  }

  getPatientById(patientId: String): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patients/patient/${patientId}`, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error fetching patient:', error);
          throw error;
        })
      );
  }

  getFormsByPatientId(patientId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/forms/forms-patient/${patientId}`, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error fetching forms:', error);
          throw error;
        })
      );
  }

  addFormRadiologo(form: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forms/addFormRadiologo`, form, { withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error adding form:', error);
          throw error;
        })
      );
  }

}