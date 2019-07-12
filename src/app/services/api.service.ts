import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(params, baseUrl): Observable<any> {
    params = this.handlingParams(params);
    return this.http.get<any>(baseUrl, {params});
  }

  handlingParams(searchParams) {
    let params = new HttpParams();
    for (const key in searchParams ) {
      if (key) {
        params = params.append(`${key}`, searchParams[key]);
      }
    }
    return params;
  }
}
