import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ChallanInformationComponent } from '../challan-information/challan-information.component';

@Component({
  selector: 'app-add-challan',
  templateUrl: './add-challan.component.html',
  styleUrls: ['./add-challan.component.css']
})
export class AddChallanComponent implements OnInit {

  constructor(private exportDialog:MatDialog) { }

  ngOnInit() {
  }
  export(){
    let config:MatDialogConfig={
      width:'500px'
    }
    this.exportDialog.open(ChallanInformationComponent, config);
  }

}
