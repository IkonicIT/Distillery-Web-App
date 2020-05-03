import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-sample-form-saved', 
  template:`
  <p>Request Success</p>
  <button mat-dialog-close style="border-radius:1px;" >Ok</button>
  `,
  styleUrls: ['./lab-sample-form-saved.component.css']
})
export class LabSampleFormSavedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
