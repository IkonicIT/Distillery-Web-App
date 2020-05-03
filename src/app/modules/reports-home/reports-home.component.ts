import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {
  hasReportPerm = false;
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    this.hasReportPerm = this.permServ.getPermission('reports-home') ? true : false;
  }

}
