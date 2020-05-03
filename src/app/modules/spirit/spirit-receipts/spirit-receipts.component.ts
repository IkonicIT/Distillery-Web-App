import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spirit-receipts',
  templateUrl: './spirit-receipts.component.html',
  styleUrls: ['./spirit-receipts.component.css']
})
export class SpiritReceiptsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/spirit') && this.permServ.getPermission('home/spirit/receipit'))) {
      this.router.navigateByUrl('home/spirit');
    }
  }

}
