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

  constructor(private transport:MatDialog,private indentService: IndentService,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }
 /*  adding(){
    this.transport.open(ShipmentTransportOfsComponent);
  } */

  saveSpecialIndent(){
    this.spinnerService.show();
    if (this.indentModel.productCode == undefined || this.indentModel.productCode =="") {
      this.index = -1;
       //window.scroll(0,0);
    } 
    const req = {
      requestData: {
        "userId": 2,
        "distilleryId": 2,
        "depotId": 2,
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
