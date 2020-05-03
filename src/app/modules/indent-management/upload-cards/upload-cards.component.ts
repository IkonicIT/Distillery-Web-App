import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-cards',
  templateUrl: './upload-cards.component.html',
  styleUrls: ['./upload-cards.component.css']
})
export class UploadCardsComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/upload-cards'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}
