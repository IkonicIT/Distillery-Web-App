import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ifs',
  templateUrl: './ifs.component.html',
  styleUrls: ['./ifs.component.css']
})
export class IfsComponent implements OnInit {

  indentModel: any = {};
  index: number;
  ifsNo: any;
  depotNames :any [] = [];
  deposList:any;
  depotId: any;
  distilleryNames :any [] = [];
  distilleryList:any;
  distilleryId: any;
  constructor(private transport:MatDialog,private indentService: IndentService,private spinnerService: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getDepoNames();
    this.getDistilleryNames();
    this.IfsOnLoad();
  }
  back()
  {
    this.transport.closeAll();
  }
  
IfsOnLoad(){
  this.indentModel={
    iFSProducts:[
      {
        userId:'' ,
        distilleryId: 2,
        depotId: '',
        productCode:'',
        brandName:'',
        size:'',
        qtyInCases:'',
        ratePerCases:'',
        totalAmount:''
      }
    ]
  }
}addProduct(index: number) {
  this.indentModel.iFSProducts.splice(index + 1, 0, {
   
        depotId: '',
        productCode:'',
        brandName:'',
        size:'',
        qtyInCases:'',
        ratePerCases:'',
        totalAmount:''
  });
}
deleteProduct(index: number) {
  this.indentModel.iFSProducts.splice(index, 1);
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

getDistilleryNames() {
  this.indentService.getDistilleryNames().subscribe(response => {
    this.distilleryList =response;
    this.distilleryList.forEach(dis => {
    this.distilleryNames.push(dis.name.toUpperCase());    
    });
    console.log('distilleryNames'+ this.distilleryNames);
  });
  }


  saveIfs(){
    this.deposList.forEach(depo => {
      if(depo.depotName.toUpperCase() == this.indentModel.depotName){
        this.indentModel.depotId = depo.depotId;
      }      
    });
    this.indentModel.userId =  parseInt(localStorage.getItem('userId'));
    console.log('selected depotId is'+ this.indentModel.depotId);
   // this.spinnerService.show();
    // if (this.indentModel.productCode == undefined || this.indentModel.productCode =="") {
    //   this.index = -1;
    //    //window.scroll(0,0);
    // }
    
   this.indentService.SaveIfs(this.indentModel).subscribe(data=>{
   this.toastr.success('successfully added', '');
   this.indentModel={
    iFSProducts:[
      {
        userId:'' ,
        distilleryId: 2,
        depotId: '',
        productCode:'',
        brandName:'',
        size:'',
        qtyInCases:'',
        ratePerCases:'',
        totalAmount:''
      }
    ]
  } 
    },
    error => {
      console.log(error);
      this.toastr.error('unhandled error', '');
    });
    }

    // this.indentService.saveSpecialIndent(this.indentModel).subscribe(response => {
    //   this.ifsNo=response.responseData.indentNo;
    //   console.log('ifs number is'+ this.ifsNo);
    //   this.spinnerService.hide();  
    //    //this.spinner.hide();
    //   //this.router.navigate(['/company/view/' + response.companyid]);
    //   // this.router.navigate(['/company/list']);
    // }),
    //  error => {
    //   this.spinnerService.hide();
    //  }
  }
    
