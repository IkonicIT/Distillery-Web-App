import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofs',
  templateUrl: './ofs.component.html',
  styleUrls: ['./ofs.component.css']
})
export class OfsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/distillery') && this.permServ.getPermission('home/distillery/ofs'))) {
      this.router.navigateByUrl('home/distillery');
    }
  }

}
