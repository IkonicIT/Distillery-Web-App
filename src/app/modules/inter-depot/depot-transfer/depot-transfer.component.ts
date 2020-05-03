import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-transfer',
  templateUrl: './depot-transfer.component.html',
  styleUrls: ['./depot-transfer.component.css']
})
export class DepotTransferComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/inter-depot') && this.permServ.getPermission('home/depot-home/depot-transfer'))) {
      this.router.navigateByUrl('home/inter-depot');
    }
  }

}
