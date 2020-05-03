import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indent-special',
  templateUrl: './indent-special.component.html',
  styleUrls: ['./indent-special.component.css']
})
export class IndentSpecialComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/beer') && this.permServ.getPermission('home/beer/beer-indent-special'))) {
      this.router.navigateByUrl('home/beer');
    }
  }

}
