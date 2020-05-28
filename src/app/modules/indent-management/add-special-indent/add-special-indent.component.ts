import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { NgxSpinnerService } from "ngx-spinner";  


@Component({
  selector: 'app-add-special-indent',
  templateUrl: './add-special-indent.component.html',
  styleUrls: ['./add-special-indent.component.css']
})
export class AddSpecialIndentComponent implements OnInit {

  indentModel: any = {};
  index: number;
  ifsNo: any;
  depotNames :any [] = [];
  deposList:any;
  depotId: any;
  distilleryNames :any [] = [];
  distilleryList:any;
  distilleryId: any;
  constructor(private transport:MatDialog,private indentService: IndentService,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.getDepoNames();
    this.getDistilleryNames();
  }

  getDepoNames(){
  this.indentService.getDepoNames().subscribe(response => {
    this.deposList =response;
    this.deposList.forEach(depo => {
    this.depotNames.push(depo.depotName.toUpperCase());    
    });
    console.log('depotNames'+ this.depotNames);
  });
}

getDistilleryNames(){
  this.indentService.getDistilleryNames().subscribe(response => {
    this.distilleryList =response;
    this.distilleryList.forEach(dis => {
    this.distilleryNames.push(dis.name.toUpperCase());    
    });
    console.log('distilleryNames'+ this.distilleryNames);
  });
}
  saveSpecialIndent(){
    this.deposList.forEach(depo => {
      if(depo.depotName.toUpperCase() == this.indentModel.depotName){
        this.indentModel.depotId = depo.depotId;
      }      
    });
    this.indentModel.userId =  parseInt(localStorage.getItem('userId'));
    console.log('selected depotId is'+ this.indentModel.depotId);
    this.spinnerService.show();
    if (this.indentModel.productCode == undefined || this.indentModel.productCode =="") {
      this.index = -1;
       //window.scroll(0,0);
    } 
    const req = {
      requestData: {
        "userId": this.indentModel.userId,
        "distilleryId": 2,
        "depotId": this.indentModel.depotId,
        "productCode":this.indentModel.productCode,
        "brandName":this.indentModel.brandName,
        "size":this.indentModel.size,
        "qtyInCases":this.indentModel.qtyInCases,
        "ratePerCases":this.indentModel.ratePerCases,
        "totalAmount":this.indentModel.totalAmount
      }
      
    };

    this.indentService.saveSpecialIndent(req).subscribe(response => {
      this.ifsNo=response.responseData.indentNo;
      console.log('ifs number is'+ this.ifsNo);
      this.spinnerService.hide();  
       //this.spinner.hide();
      //this.router.navigate(['/company/view/' + response.companyid]);
      // this.router.navigate(['/company/list']);
    },
     error => {
      this.spinnerService.hide();
     });
  }
}
