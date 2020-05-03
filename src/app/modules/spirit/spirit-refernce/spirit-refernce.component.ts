import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-spirit-refernce',
  templateUrl: './spirit-refernce.component.html',
  styleUrls: ['./spirit-refernce.component.css']
})
export class SpiritRefernceComponent implements OnInit {

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
