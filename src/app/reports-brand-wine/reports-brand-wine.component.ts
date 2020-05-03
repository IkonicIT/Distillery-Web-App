import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-brand-wine',
  templateUrl: './reports-brand-wine.component.html',
  styleUrls: ['./reports-brand-wine.component.css']
})
export class ReportsBrandWineComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('reports-home') && this.permServ.getPermission('home/reports-brand-wine'))) {
      this.router.navigateByUrl('reports-home');
    }
  }

}
