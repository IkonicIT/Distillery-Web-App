import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LabSampleForwardComponent } from '../lab-sample-forward/lab-sample-forward.component';

@Component({
  selector: 'app-lab-sample-status-window',
  templateUrl: './lab-sample-status-window.component.html',
  styleUrls: ['./lab-sample-status-window.component.css']
})
export class LabSampleStatusWindowComponent implements OnInit {

  constructor(private forwardDialog: MatDialog) { }

  ngOnInit() {
  }
  forward(){
      this.forwardDialog.open(LabSampleForwardComponent);
  }

}
