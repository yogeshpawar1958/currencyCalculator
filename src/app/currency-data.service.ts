import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(private http:HttpClient) { }

  getData(country:any){
   return this.http.get(`https://api.exchangerate.host/latest?base=${country}`)
  }
}
