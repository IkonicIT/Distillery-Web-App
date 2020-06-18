import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SpecialIfsDeletePidComponent } from '../special-ifs-delete-pid/special-ifs-delete-pid.component';
@Component({
  selector: 'app-special-ifs-view',
  templateUrl: './special-ifs-view.component.html',
  styleUrls: ['./special-ifs-view.component.css']
})
export class SpecialIfsViewComponent implements OnInit {
   ifsNo:any;
   pid:any;
   productcode:any;
    models:any={};
    specialindents: any;
  indents: any;
  createdate: string;
  // responseData: any={};
  constructor(private spinner: NgxSpinnerService,private route:ActivatedRoute, private _indentService: IndentService,private router: Router, private toastr: ToastrService,private _location:Location,public dialog: MatDialog
     ) {
       this. ifsNo = route.snapshot.params['ifsNo'];

      // this.indentNo = route.snapshot.params['id'];  
        console.log('indentno is'+ this. ifsNo);
       
     }

  ngOnInit() {
    
    this._indentService. fetchByIfs(this. ifsNo).subscribe(response => {
      this.models = response.responseData.iFSProducts;
      this.indents = response.responseData;
      console.log('response is'+ this.models );
      this.getAllSpecialIFS();
    
   })
  }
  cancelDetails(){
    this._location.back();

  } 
  openDialog() {
    const config: MatDialogConfig = {
      height: '120px',
      width: '400px'
    };
    this.dialog.open(SpecialIfsDeletePidComponent,config);
  }
  fetchIFS(){
    //this.createdate= this.datepipe.transform(this.createdate, 'yyyy-MM-dd hh:mm:ss');
    //this.spinner.show();
    this._indentService.fetchAllIFS().subscribe(response => {
     // this.spinner.hide();
      console.log(response);
      this.indents = response.responseData;
      console.log('date is' + this.createdate);
      console.log('indents are'+ this.indents);
      console.log(response.responseData[0].status);
    },
    error => {
      //this.spinner.hide();
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
 
  
