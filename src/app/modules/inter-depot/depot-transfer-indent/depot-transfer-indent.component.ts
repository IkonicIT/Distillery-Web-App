import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-depot-transfer-indent',
  templateUrl: './depot-transfer-indent.component.html',
  styleUrls: ['./depot-transfer-indent.component.css']
})
export class DepotTransferIndentComponent implements OnInit {

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
