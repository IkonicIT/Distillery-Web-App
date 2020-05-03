import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChallanInformationSavedComponent } from '../challan-information-saved/challan-information-saved.component';

@Component({
  selector: 'app-challan-information',
  templateUrl: './challan-information.component.html',
  styleUrls: ['./challan-information.component.css']
})
export class ChallanInformationComponent implements OnInit {

  constructor(private saveDialog:MatDialog) { }

  ngOnInit() {
  }
  save(){
      this.saveDialog.open(ChallanInformationSavedComponent);
  }

}
