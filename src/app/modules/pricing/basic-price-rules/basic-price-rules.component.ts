import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-price-rules',
  templateUrl: './basic-price-rules.component.html',
  styleUrls: ['./basic-price-rules.component.css']
})
export class BasicPriceRulesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/basic-price-rules'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
