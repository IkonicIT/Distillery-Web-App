import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  hasBeerPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasBeerPerm = this.permServ.getPermission('home/beer') ? true : false;
  }

}
