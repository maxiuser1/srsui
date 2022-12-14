import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentoService {
  url = `${environment.api}`;
  constructor(private http: HttpClient) {}

  getDemo(): Observable<any> {
    return this.http.get(`${environment.api}demodoc`);
  }
}
