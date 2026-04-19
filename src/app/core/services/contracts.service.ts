import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/claims-management-api/api/contracts';

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.apiUrl);
  }
}