import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
@Component({
  selector: 'app-special-ifs-edit',
  templateUrl: './special-ifs-edit.component.html',
  styleUrls: ['./special-ifs-edit.component.css']
})
export class SpecialIfsEditComponent implements OnInit {
   ifsNo:any;
   productcode:any;
    model:any={};
    ifs:any={};
    specialindents: any;
  // responseData: any={};
  constructor(private spinner: NgxSpinnerService,private route:ActivatedRoute, private _indentService: IndentService,private router: Router, private toastr: ToastrService,private _location:Location
     ) {
       this. ifsNo = route.snapshot.params['ifsNo'];

      // this.indentNo = route.snapshot.params['id'];  
        console.log('indentno is'+ this.ifsNo);
       
     }

  ngOnInit() {
    
    this._indentService. fetchByIfs(this.ifsNo).subscribe(response => {
      this.model = response.responseData.iFSProducts[0];
      console.log('response is'+ this.model );
      this.getAllSpecialIFS();
   })
  }
  cancelDetails(){
    this._location.back();
  } 
  updateifs(){
    this._indentService.updateIfs(this.model).subscribe(data=>{
      this.toastr.success('successfully updated','');
this.model={
   ifsPid: '',
   ifsNum: null,
   //indentDate: '',
  brandName: '',
  size: '',
  qtyInCases: '',
  ratePerCase: '',
  totalAmount: '',
  productCode: '',
  status: 'SUBMITTED',
}

    },error => {
      console.log(error);
      this.toastr.error('unhandled error', '');
    });
  }
  getAllSpecialIFS(){
  
    //this.spinner.show();
    this._indentService.getALLIFS().subscribe(response => {
     // this.spinner.hide();
      console.log(response);
      this.specialindents = response.responseData;
      console.log('specialindents is'+ this.specialindents);
      console.log( 'indentss'+ response.responseData[0].status);
    },
    error => {
      //this.spinner.hide();
    });

  }
}
 
  
