import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44323/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
  }
}
