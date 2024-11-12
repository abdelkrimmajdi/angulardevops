import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from 'src/model/universite.model'; // Le modèle Universite

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl = 'http://192.168.100.9:8082/tpFoyer17/api/univeristes';

  constructor(private http: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(
      `${this.apiUrl}/retrieveAllUniversities`
    );
  }
  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(
      `${this.apiUrl}/addUniversity`,
      universite
    );
  }
}
