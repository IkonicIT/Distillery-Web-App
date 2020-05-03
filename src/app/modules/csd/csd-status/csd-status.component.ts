import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';


@Component({
  selector: 'app-csd-status',
  templateUrl: './csd-status.component.html',
  styleUrls: ['./csd-status.component.css']
})
export class CsdStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  save(){
    let config:MatDialogConfig={
      height:'150px',
      width:'300px'
    }
   
  }

}

