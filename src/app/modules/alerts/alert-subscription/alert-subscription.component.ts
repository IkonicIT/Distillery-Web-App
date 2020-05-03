import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-subscription',
  templateUrl: './alert-subscription.component.html',
  styleUrls: ['./alert-subscription.component.css']
})
export class AlertSubscriptionComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/alerts') && this.permServ.getPermission('home/module/alerts/subscription'))) {
      this.router.navigateByUrl('home/module/alerts');
    }
  }

}
