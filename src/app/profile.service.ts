import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://localhost:44341/api/Information/Informations/cac16edf-0ce9-49a5-845f-42405fd8bae9';  // API'nizin URL'si

  constructor(private http: HttpClient) { }

  // API'den profile verisini almak için 'getProfile' metodunu ekliyoruz
  getProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // GET isteği yaparak veri alıyoruz
  }
}
