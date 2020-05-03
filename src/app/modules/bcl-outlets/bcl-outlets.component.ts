import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-bcl-outlets',
  templateUrl: './bcl-outlets.component.html',
  styleUrls: ['./bcl-outlets.component.css']
})
export class BclOutletsComponent implements OnInit {
  hasBclOutperm = false;
  constructor(private ngxPerservice: NgxPermissionsService) { }

  ngOnInit() {
    this.hasBclOutperm = this.ngxPerservice.getPermission('home/bcl-outlets') ? true : false;
  }

}
