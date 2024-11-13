import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = 'http://192.168.0.9:8082/tpFoyer17/api/etudiants';

  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/retrieveAllEtudiants`);
  }

  addEtudiants(etudiants: Etudiant[]): Observable<Etudiant[]> {
    return this.http.post<Etudiant[]>(`${this.apiUrl}/addEtudiants`, etudiants);
  }

}
