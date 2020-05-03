import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-alerts',
  templateUrl: './alert-alerts.component.html',
  styleUrls: ['./alert-alerts.component.css']
})
export class AlertAlertsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/alerts') && this.permServ.getPermission('home/module/alerts/alert'))) {
      this.router.navigateByUrl('home/module/alerts');
    }
  }

}
