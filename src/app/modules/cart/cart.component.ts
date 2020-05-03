import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  hasCartPerm = false;
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    this.hasCartPerm = this.permServ.getPermission('home/cart') ? true : false;
  }

}
