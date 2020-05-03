import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-csd-details',
  templateUrl: './csd-details.component.html',
  styleUrls: ['./csd-details.component.css']
})
export class CsdDetailsComponent implements OnInit {

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
