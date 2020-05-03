import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LabBatchDeactivationStatusComponent } from '../lab-batch-deactivation-status/lab-batch-deactivation-status.component';

@Component({
  selector: 'app-lab-batch-deactivation',
  templateUrl: './lab-batch-deactivation.component.html',
  styleUrls: ['./lab-batch-deactivation.component.css']
})
export class LabBatchDeactivationComponent implements OnInit {

  constructor(private deactivationDialog:MatDialog) { }

  ngOnInit() {
  }
  deactivate(){
    this.deactivationDialog.open(LabBatchDeactivationStatusComponent);
  }

}
