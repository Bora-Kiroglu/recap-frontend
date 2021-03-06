import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cardtos:CarDto[] = []
  dataLoaded = false
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getAllCarDetails()
  }

  getAllCarDetails(){
    this.carService.getAllCarDetails().subscribe(response=>{
      this.cardtos = response.data
      this.dataLoaded = true
    })
  }

}
