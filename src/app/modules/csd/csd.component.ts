import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CsdReportComponent } from './csd-report/csd-report.component';
import { CsdDetailsComponent } from './csd-details/csd-details.component';
import { CsdStatusComponent } from './csd-status/csd-status.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-csd',
  templateUrl: './csd.component.html',
  styleUrls: ['./csd.component.css']
})
export class CsdComponent implements OnInit {

  constructor(private dialog:MatDialog,private status:MatDialog) { }

  ngOnInit() {
  }
  sampleFormWindow(){
    let config:MatDialogConfig={
      height:'600px',
      width:'2000px'
    }
    this.dialog.open(CsdReportComponent,config);
  }

  csdFormWindow(){
    let config:MatDialogConfig={
      height:'180px',
      width:'800px'
    }
    this.dialog.open(CsdDetailsComponent,config);
  }

  statusFormWindow(){
    let config:MatDialogConfig={
      height:'400px',
      width:'1600px'
    }
    this.dialog.open(CsdStatusComponent,config);
  }

}
