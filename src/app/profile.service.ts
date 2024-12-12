import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://localhost:44341/api/Information/Informations/775e1683-65b2-4bc1-bb69-f8ada4709ad0';  // API'nizin URL'si

  constructor(private http: HttpClient) { }

  // API'den profile verisini almak için 'getProfile' metodunu ekliyoruz
  getProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // GET isteği yaparak veri alıyoruz
  }
}
