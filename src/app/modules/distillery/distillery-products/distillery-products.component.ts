import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distillery-products',
  templateUrl: './distillery-products.component.html',
  styleUrls: ['./distillery-products.component.css']
})
export class DistilleryProductsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/distillery/products') && this.permServ.getPermission('home/distillery/products'))) {
      this.router.navigateByUrl('home/distillery');
    }
  }

}
