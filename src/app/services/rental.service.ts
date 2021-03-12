import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDtoResponseModel } from '../models/rentalDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrlForGetAllDto = "https://localhost:44323/api/rentals/getallrentalsdetails"
  constructor(private httpClient:HttpClient) { }

  getAllRentalDetails():Observable<RentalDtoResponseModel>{
    return this.httpClient.get<RentalDtoResponseModel>(this.apiUrlForGetAllDto)
  }
}
