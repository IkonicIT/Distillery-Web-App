import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processfee',
  templateUrl: './processfee.component.html',
  styleUrls: ['./processfee.component.css']
})
export class ProcessfeeComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/processfee'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}
