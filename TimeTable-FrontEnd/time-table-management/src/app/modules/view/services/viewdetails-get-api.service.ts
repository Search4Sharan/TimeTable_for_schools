import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewdetailsGetAPIService {
public apiUrl = 'http://localhost:4000/getAPI'

  constructor(private http : HttpClient) { }

  getViewData() : Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
