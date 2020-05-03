import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-depot-home',
  templateUrl: './depot-home.component.html',
  styleUrls: ['./depot-home.component.css']
})
export class DepotHomeComponent implements OnInit {
  hasDepotPer = false;
  constructor(private permService: NgxPermissionsService) { }

  ngOnInit() {
    this.hasDepotPer = this.permService.getPermission('home/inter-depot') ? true : false;
  }

}
