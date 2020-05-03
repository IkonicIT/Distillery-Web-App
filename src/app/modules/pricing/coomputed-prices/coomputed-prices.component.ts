import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coomputed-prices',
  templateUrl: './coomputed-prices.component.html',
  styleUrls: ['./coomputed-prices.component.css']
})
export class CoomputedPricesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/coomputed-prices'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
