import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-spirit-bottling',
  templateUrl: './spirit-bottling.component.html',
  styleUrls: ['./spirit-bottling.component.css']
})
export class SpiritBottlingComponent implements OnInit {

  constructor(private saveDialog:MatDialog) { }

  ngOnInit() {
  }
  save(){
    let config:MatDialogConfig={
      height:'150px',
      width:'300px'
    }
   
  }

}
