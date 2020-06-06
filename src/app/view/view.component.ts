import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   indentNo:any;
   productcode:any;
    model:any={};
    specialindents: any;
  // responseData: any={};
  constructor(private spinner: NgxSpinnerService,private route:ActivatedRoute, private _indentService: IndentService,private router: Router, private toastr: ToastrService,private _location:Location
     ) {
       this.indentNo = route.snapshot.params['indentId'];

      // this.indentNo = route.snapshot.params['id'];  
        console.log('indentNo is'+ this.indentNo);
       
     }

  ngOnInit() {
    
    this._indentService.getifsdetails(this.indentNo).subscribe(response => {
      this.model = response.responseData;
      console.log('response is'+ this.model );
      this.getAllSpecialIFS();
   })
  }
  cancelDetails(){
    this._location.back();
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
 
  
