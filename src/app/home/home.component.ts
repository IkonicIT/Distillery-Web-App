import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  // logOut() {
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   this.toastr.success('successfully logout');
  //   this.router.navigate(['login']);
  // }

}
