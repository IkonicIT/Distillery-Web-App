import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-stock',
  templateUrl: './beer-stock.component.html',
  styleUrls: ['./beer-stock.component.css']
})
export class BeerStockComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/distillery') && this.permServ.getPermission('home/distillery/beer-stock'))) {
      this.router.navigateByUrl('home/distillery');
    }
  }

}
