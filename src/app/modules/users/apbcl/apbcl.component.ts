import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apbcl',
  templateUrl: './apbcl.component.html',
  styleUrls: ['./apbcl.component.css']
})
export class ApbclComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/user') && this.permServ.getPermission('home/user/apbcl'))) {
      this.router.navigateByUrl('home/user');
    }
  }

}
