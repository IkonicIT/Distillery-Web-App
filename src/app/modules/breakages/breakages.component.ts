import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-breakages',
  templateUrl: './breakages.component.html',
  styleUrls: ['./breakages.component.css']
})
export class BreakagesComponent implements OnInit {
  hasBreakagePerm = false;
  constructor(private router: Router, private PermServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasBreakagePerm = this.PermServ.getPermission('home/breakages') ? true : false;
  }
  navTohome() {
    this.router.navigate(['../features']);
  }
}
