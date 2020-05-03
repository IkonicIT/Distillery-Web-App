import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-exise-department',
  templateUrl: './exise-department.component.html',
  styleUrls: ['./exise-department.component.css']
})
export class ExiseDepartmentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/excise') && this.permServ.getPermission('home/excise-duty/department'))) {
      this.router.navigateByUrl('home/excise');
    }
  }
  navToExcise() {
    this.router.navigate(['../home/excise']);
  }
}
