import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-batch-deactivation-status',
  template:`
  <p>Batch Deactivation Successful</p>
  <button mat-dialog-close >Ok</button>
  `,
  styleUrls: []
})
export class LabBatchDeactivationStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
