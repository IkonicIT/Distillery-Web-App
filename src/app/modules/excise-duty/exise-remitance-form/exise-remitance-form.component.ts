import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';
import {ExciseDutiesService} from 'src/app/services/apiServices/exciseduties.service'

@Component({
  selector: 'app-exise-remitance-form',
  templateUrl: './exise-remitance-form.component.html',
  styleUrls: ['./exise-remitance-form.component.css']
})
export class ExiseRemitanceFormComponent implements OnInit {
  transactionNumber: string = '';
  depositAmount: string = '';
  bankNumber: string = '';
  challan: string = 'CSD';
  transactionDate: string = '';
  description: string = '';
  saveSuccess:boolean=  false;
  noInputs:boolean=  false;
  postData = [];
  constructor(private _exciseDutiesService:ExciseDutiesService) { }

  ngOnInit() {
  }
  save(){
    this.noInputs=false;
    console.log(this.transactionNumber)
    console.log(this.depositAmount)
    console.log(this.bankNumber)
    console.log(this.challan)
    console.log(this.transactionDate)
    console.log(this.description)
    if(this.transactionNumber == '' || this.depositAmount == '' || this.bankNumber == '' || this.challan == '' || this.transactionDate == '' || this.description == ''){
this.noInputs=true;
    }
    else{
      console.log('else')
      var date = this.transactionDate;
var datearray = date.split("-");

var newdate = datearray[2] + '/' + datearray[1] + '/' + datearray[0];
    const req = {
      "challanNo":this.transactionNumber,
      "challanType":this.challan,
      "description":this.description,
      "transactionType":"",
      "depositedAmount":this.depositAmount,
      "openinigBalance":"",
      "credit":"",
      "debit":"",
      "challanDate":newdate
      }
      this._exciseDutiesService.saveExciseData(req).subscribe(data=>{
  console.log(`stock data `,data);
  this.postData = data;
  this.saveSuccess=true;
      }) 
  }
}
  selectDropdown(event){
   this.challan = event.target.value
   console.log(event.target.value)
   console.log(this.challan)
  }
 
}
