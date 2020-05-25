import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddSpecialIndentComponent } from '../add-special-indent/add-special-indent.component';
import { IndentService } from '../../../services/apiServices/indent.service';


@Component({
  selector: 'app-special-indent',
  templateUrl: './special-indent.component.html',
  styleUrls: ['./special-indent.component.css']
})
export class SpecialIndentComponent implements OnInit {
  specialindents: any;
  count:number=0;
  constructor(private permissionServ: NgxPermissionsService, private router: Router,private addspecialindent:MatDialog,private indentService: IndentService) { 
    
  }

  ngOnInit() {
    this.getAllSpecialIFS();
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/special-indent'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

  addSpecialIndent(){
    this.addspecialindent.open(AddSpecialIndentComponent);
  }

  getAllSpecialIFS(){
  
    //this.spinner.show();
    this.indentService.getALLIFS().subscribe(response => {
     // this.spinner.hide();
      console.log(response);
      this.specialindents = response.responseData;
      console.log('specialindents is'+ this.specialindents);
      console.log(response.responseData[0].status);
    },
    error => {
      //this.spinner.hide();
    });

  }

  refresh() {
    //this.companies=[];
   // this.getAllCompniesList();
  }

  

}
