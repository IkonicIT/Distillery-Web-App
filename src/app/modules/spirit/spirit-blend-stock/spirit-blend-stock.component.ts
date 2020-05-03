import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-spirit-blend-stock',
  templateUrl: './spirit-blend-stock.component.html',
  styleUrls: ['./spirit-blend-stock.component.css']
})
export class SpiritBlendStockComponent implements OnInit {

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
