import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-shipment',
  templateUrl: './import-shipment.component.html',
  styleUrls: ['./import-shipment.component.css']
})
export class ImportShipmentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/imports') && this.permServ.getPermission('home/import-shipment'))) {
      this.router.navigateByUrl('home/imports');
    }
  }

}
