import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentaldtos:RentalDto[] = []
  dataLoaded = false
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getAllRentalsDetails()
  }

  getAllRentalsDetails(){
    this.rentalService.getAllRentalDetails().subscribe(response=>{
      this.rentaldtos = response.data
      this.dataLoaded = true
    })
  }

}
