import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-depot-status',
  templateUrl: './depot-status.component.html',
  styleUrls: ['./depot-status.component.css']
})
export class DepotStatusComponent implements OnInit {

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
