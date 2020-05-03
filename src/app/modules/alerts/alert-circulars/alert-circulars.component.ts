import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-alert-circulars',
  templateUrl: './alert-circulars.component.html',
  styleUrls: ['./alert-circulars.component.css']
})
export class AlertCircularsComponent implements OnInit {
  isAddPerm = false;
  constructor(private permServ: NgxPermissionsService, private router: Router, private localServ: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/alerts') && this.permServ.getPermission('home/module/alerts/circulars'))) {
      this.router.navigateByUrl('home/module/alerts');
    } else {
      this.isAddPerm = this.localServ.checkAddPermission('home/module/alerts/circulars');
    }
  }

}
