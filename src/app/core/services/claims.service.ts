import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/claims-management-api/api/claims';

  getAll(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.apiUrl);
  }

  create(payload: Omit<Claim, 'id'>): Observable<Claim> {
    return this.http.post<Claim>(this.apiUrl, payload);
  }
}