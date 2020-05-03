import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/services/apiServices/alerts.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
 
    
  hasAlertPerm = false;
  constructor(private _formBuilder: FormBuilder,private _alertsService: AlertsService,
              private permServ: NgxPermissionsService) { }

  columnDefs = [
    { headerName: 'S.NO', field: 'sno' },
    { headerName: 'Message', field: 'message' },
    { headerName: 'Received Date', field: 'receiveddate' },
    { headerName: 'Created By', field: 'created' },
    { headerName: 'Expiry Data', field: 'expiry' }
  
  ];

  rowData = [
    {
      "sno":"1",
      "message":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "receiveddate":"22-11-2020",
      "created":"jagadesh",
      "expiry":"11-12-2020"
    }

  ];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
    this.hasAlertPerm = this.permServ.getPermission('home/module/alerts') ? true : false;
    if (this.hasAlertPerm) {
      this.getAllAlerts();
    }
  }

  getAllAlerts(){
    // this.rowData = data['response Date List'];
  }
}