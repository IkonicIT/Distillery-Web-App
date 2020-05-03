import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-transfer-supplier',
  templateUrl: './depot-transfer-supplier.component.html',
  styleUrls: ['./depot-transfer-supplier.component.css']
})
export class DepotTransferSupplierComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/inter-depot') && this.permServ.getPermission('home/depot-home/depot-transfer-supplier'))) {
      this.router.navigateByUrl('home/inter-depot');
    }
  }

}
