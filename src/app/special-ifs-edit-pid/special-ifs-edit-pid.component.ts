import { Component, OnInit } from '@angular/core';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from "ngx-spinner";
@Component({
  selector: 'app-special-ifs-edit-pid',
  templateUrl: './special-ifs-edit-pid.component.html',
  styleUrls: ['./special-ifs-edit-pid.component.css']
})
export class SpecialIfsEditPidComponent implements OnInit {
  pid:any;
  model:any={};

  constructor(private route:ActivatedRoute, private _indentService: IndentService,private router: Router,private _location:Location, private toastr: ToastrService,private spinner: NgxSpinnerService) 
  {
    this.pid = route.snapshot.params['ifsPid'];

    // this.indentNo = route.snapshot.params['id'];  
      console.log('indentno is'+ this.pid);
   }

  ngOnInit() {
    this._indentService.fetchByPid(this.pid).subscribe(response=>{
      this.model = response.responseData;
        console.log("ifspid are" + this.model);
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

}
