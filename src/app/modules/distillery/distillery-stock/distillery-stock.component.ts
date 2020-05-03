import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distillery-stock',
  templateUrl: './distillery-stock.component.html',
  styleUrls: ['./distillery-stock.component.css']
})
export class DistilleryStockComponent implements OnInit {
  
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/distillery') && this.permServ.getPermission('home/distillery/stock'))) {
      this.router.navigateByUrl('home/distillery');
    }
  }

}
