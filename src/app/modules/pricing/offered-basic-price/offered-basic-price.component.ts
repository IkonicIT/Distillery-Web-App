import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offered-basic-price',
  templateUrl: './offered-basic-price.component.html',
  styleUrls: ['./offered-basic-price.component.css']
})
export class OfferedBasicPriceComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/offered-basic-price'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
