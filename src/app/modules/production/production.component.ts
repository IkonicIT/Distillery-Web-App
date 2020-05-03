import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  hasProdPerm = false;
  constructor(private permService: NgxPermissionsService) { }

  ngOnInit() {
    this.hasProdPerm = this.permService.getPermission('home/production') ? true : false;
  }

}
