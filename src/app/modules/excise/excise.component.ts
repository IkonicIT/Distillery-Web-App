import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-excise',
  templateUrl: './excise.component.html',
  styleUrls: ['./excise.component.css']
})
export class ExciseComponent implements OnInit {
  hasExcisePerm = false;
  constructor(private router: Router, private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasExcisePerm = this.permServ.getPermission('home/excise') ? true : false;
  }
  navTohome() {
    this.router.navigate(['../features']);
  }
}
