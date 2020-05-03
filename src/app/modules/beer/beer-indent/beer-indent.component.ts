import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-indent',
  templateUrl: './beer-indent.component.html',
  styleUrls: ['./beer-indent.component.css']
})
export class BeerIndentComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/beer') && this.permServ.getPermission('home/beer/beer-indent'))) {
      this.router.navigateByUrl('home/beer');
    }
  }

}
