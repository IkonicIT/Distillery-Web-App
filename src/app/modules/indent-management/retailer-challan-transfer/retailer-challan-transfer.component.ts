import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-challan-transfer',
  templateUrl: './retailer-challan-transfer.component.html',
  styleUrls: ['./retailer-challan-transfer.component.css']
})
export class RetailerChallanTransferComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!this.permissionServ.getPermission('home/module/indent')) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}
