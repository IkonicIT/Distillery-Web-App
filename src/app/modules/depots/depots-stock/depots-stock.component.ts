import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depots-stock',
  templateUrl: './depots-stock.component.html',
  styleUrls: ['./depots-stock.component.css']
})
export class DepotsStockComponent implements OnInit {

  constructor(private ngxPermServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.ngxPermServ.getPermission('home/depots') && this.ngxPermServ.getPermission('home/depots/depots-stock'))) {
      this.router.navigateByUrl('home/depots');
    }
  }

}
