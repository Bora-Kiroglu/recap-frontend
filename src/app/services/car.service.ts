import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/carDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrlForGetAllDto = "https://localhost:44323/api/cars/getallcardetails"
  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<CarDtoResponseModel>{
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrlForGetAllDto)
  }
}
