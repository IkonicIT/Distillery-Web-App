import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penality-details',
  templateUrl: './penality-details.component.html',
  styleUrls: ['./penality-details.component.css']
})
export class PenalityDetailsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/penality-details'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}
