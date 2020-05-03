import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grn-processingfee',
  templateUrl: './grn-processingfee.component.html',
  styleUrls: ['./grn-processingfee.component.css']
})
export class GrnProcessingfeeComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/grn-processingfee'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}
