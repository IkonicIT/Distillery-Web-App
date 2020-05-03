import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LabSampleFormComponent } from '../lab-sample-form/lab-sample-form.component';
import { config } from 'rxjs';
import { LabSampleStatusWindowComponent } from '../lab-sample-status-window/lab-sample-status-window.component';
import { LabService } from 'src/app/services/apiServices/lab.service';
import { LabSample } from '../../models/interface.service';
import { FilterPipe } from 'src/app/services/apiServices/filter.pipe';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { PaginationService } from 'src/app/pagination.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';

@Component({
  selector: 'app-lab-samples',
  templateUrl: './lab-samples.component.html',
  styleUrls: ['./lab-samples.component.css']
})
export class LabSamplesComponent implements OnInit {
  labSampleList: LabSample [] = [];
  servLabSampleList: LabSample [] = [];
  searchParam = '';
  labSampleListForm: FormGroup;
  dataTable: LabSample [] = [];
  page: number;
  pager: any = {};
  recordsPerPage = 10;
  permissionList = [];
  isAddPermission = false;
  constructor(private dialog: MatDialog,
              private status: MatDialog,
              private labService: LabService,
              private paginationService: PaginationService,
              private permServ: NgxPermissionsService,
              private router: Router,
              private localStore: LocalStoreService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/lab') && this.permServ.getPermission('home/lab/samples'))) {
      this.router.navigateByUrl('home/lab');
    } else {
      this.permissionList = this.localStore.getUserPermissions();
      const tempPerm = this.permissionList.find(per => per.path === 'home/lab/samples');
      this.isAddPermission = tempPerm ? tempPerm.isAdd === 1 ? true : false : false;
      this.labSampleListForm = this.getLabSampleObj();
      this.getLabSampleList();
    }
  }
  sampleFormWindow(): void {
    const configForm: MatDialogConfig = {
      height: '500px',
      width: '2000px'
    };
    const modelRef = this.dialog.open(LabSampleFormComponent, configForm);
    modelRef.componentInstance.passEntry.subscribe(res => {
      if (res) {
        this.getLabSampleList();
      }
    });
  }
  indentFormEvent(): void {
    const configStatus: MatDialogConfig = {
      height: '300px',
      width: '1000px'
    };
    this.status.open(LabSampleStatusWindowComponent, configStatus);
  }

  getLabSampleList(): void {
    this.labService.getLabSampleList().subscribe((res) => {
      if (res && res.responseData && res.responseData.length) {
        this.servLabSampleList = res.responseData;
        this.labSampleList = this.servLabSampleList;
        this.setPage(1);
      }

    });
  }
  searchRecords(): void {
    if (this.searchParam) {
      const jsonKeys = ['referrenceNumber', 'exciseLab', 'net_ammount', 'date', 'sampleType'];
      const dateFormat = ['DD-MM-YYYY'];
      this.labSampleList = FilterPipe.prototype.transform(this.servLabSampleList, jsonKeys, this.searchParam, dateFormat );
      this.setPage(1);
    } else {
      this.labSampleList = this.servLabSampleList;
      this.setPage(1);
  }
}
selectStartDate(event): void {
  console.log(event.target.value);
}
getLabSampleObj(): FormGroup {
  return new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  });
}
validateDate(): void {
  console.log(this.labSampleListForm.value);
  const startDate = moment(this.labSampleListForm.get('startDate').value);
  const endDate = moment(this.labSampleListForm.get('endDate').value);
  if (!(this.labSampleListForm.get('startDate').value && this.labSampleListForm.get('endDate').value)) {
    this.labSampleList = this.servLabSampleList;
    return;
  }
  if (startDate > endDate) {
    this.labSampleListForm.get('endDate').reset();
  } else {
    this.labSampleList = this.servLabSampleList.filter(labSample => this.compareDates(labSample, startDate, endDate));
  }
}

 compareDates(labSample: LabSample, startDate: any, endDate: any): boolean {
  const listDate = moment(labSample.date).format('YYYY-MM-DD');
  if (moment(listDate).isBetween(this.labSampleListForm.get('startDate').value, this.labSampleListForm.get('endDate').value)) {
    return true;
   }
  return false;
 }
 setPage(page: number): void {
  this.page = page;
  this.pager = this.paginationService.getPager(
    this.labSampleList.length,
    this.page,
    this.recordsPerPage
  );
}
}
