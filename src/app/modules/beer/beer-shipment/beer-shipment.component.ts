import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-shipment',
  templateUrl: './beer-shipment.component.html',
  styleUrls: ['./beer-shipment.component.css']
})
export class BeerShipmentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/beer') && this.permServ.getPermission('home/beer/beer-shipment'))) {
      this.router.navigateByUrl('home/beer');
    }
  }

}
