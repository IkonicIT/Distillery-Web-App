import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penality-report',
  templateUrl: './penality-report.component.html',
  styleUrls: ['./penality-report.component.css']
})
export class PenalityReportComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/penality-report'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}
