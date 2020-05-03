import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-local-supplier',
  templateUrl: './depot-local-supplier.component.html',
  styleUrls: ['./depot-local-supplier.component.css']
})
export class DepotLocalSupplierComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }
  ngOnInit() {
    if (!(this.permServ.getPermission('home/inter-depot') && this.permServ.getPermission('home/depot-home/depot-local-supplier'))) {
      this.router.navigateByUrl('home/inter-depot');
    }
  }

}
