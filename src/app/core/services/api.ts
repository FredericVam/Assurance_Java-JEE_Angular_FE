import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:8080/claims-management-api/api';

  getHello() {
    return this.http.get(`${this.baseUrl}/hello`, {
      responseType: 'text'
    });
  }
}