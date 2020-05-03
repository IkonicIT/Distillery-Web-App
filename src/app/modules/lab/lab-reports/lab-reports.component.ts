import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/lab') && this.permServ.getPermission('home/lab/reports'))) {
      this.router.navigateByUrl('home/lab');
    }
  }

}
