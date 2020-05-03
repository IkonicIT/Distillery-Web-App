import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SpiritRequestComponent } from '../spirit-request/spirit-request.component';
import { SpiritIndentFormComponent } from '../spirit-indent-form/spirit-indent-form.component';
import { SpiritRefernceComponent } from '../spirit-refernce/spirit-refernce.component';
import { SpiritUnloadComponent } from '../spirit-unload/spirit-unload.component';
import { SpiritGenerateReceiptComponent } from '../spirit-generate-receipt/spirit-generate-receipt.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/common/local-store.service';
import { SpiritService } from 'src/app/services/apiServices/spirit.service';
import { Spirit } from '../../models/interface.service';
import { PaginationService } from 'src/app/pagination.service';
import { FilterPipe } from 'src/app/services/apiServices/filter.pipe';

@Component({
  selector: 'app-spirit-procurement',
  templateUrl: '../spirit-procurement/spirit-procurement.component.html',
  styleUrls: ['./spirit-procurement.component.css']
})
export class SpiritProcurementComponent implements OnInit {
  isAddPerm = false;
  servSpiritList: Spirit[] = [];
  spiritList: Spirit [] = [];
  page: number;
  pager: any = {};
  recordsPerPage = 5;
  searchParam = '';
  constructor(private dialog: MatDialog, private status: MatDialog,
              private permServ: NgxPermissionsService, private router: Router, private localServ: LocalStoreService,
              private spiritServ: SpiritService,
              private paginationService: PaginationService) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/spirit') && this.permServ.getPermission('home/spirit/procurement'))) {
      this.router.navigateByUrl('home/spirit');
    } else {
      this.getSpiritList();
      this.isAddPerm = this.localServ.checkAddPermission('home/spirit/procurement');
    }
  }
  sampleFormWindow() {
    const config: MatDialogConfig = {
      height: '500px',
      width: '2000px'
    };
    const modelRef = this.dialog.open(SpiritRequestComponent, config);
    modelRef.componentInstance.passEntry.subscribe(res => {
      if (res) {
        this.getSpiritList();
      }
    });
  }

  getSpiritList(): void {
    this.spiritServ.getSpiritList().subscribe((res) => {
      this.servSpiritList = res.responseData;
      this.spiritList = this.servSpiritList;
      this.setPage(1);
    },
    () => {
      this.servSpiritList = [];
    });
  }

  indentFormWindow(input: any): void {
    const config: MatDialogConfig = {
      height: '250px',
      width: '800px',
      data: input
    };
    this.dialog.open(SpiritIndentFormComponent, config);
  }

  refFormWindow() {
    const config: MatDialogConfig = {
      height: '400px',
      width: '800px'
    };
    this.dialog.open(SpiritRefernceComponent, config);
  }

  genFormWindow() {
    const config: MatDialogConfig = {
      height: '500px',
      width: '1000px'
    };
    this.dialog.open(SpiritGenerateReceiptComponent, config);
  }

  upFormWindow() {
    const config: MatDialogConfig = {
      height: '300px',
      width: '1000px'
    };
    this.dialog.open(SpiritUnloadComponent, config);
  }
  setPage(page: number): void {
    this.page = page;
    this.pager = this.paginationService.getPager(
      this.spiritList.length,
      this.page,
      this.recordsPerPage
    );
  }
  searchRecords(): void {
    if (this.searchParam) {
      const jsonKeys = ['refNum', 'subject', 'refDate', 'approvedDate', 'type'];
      const dateFormat = ['YYYY-MM-DD'];
      this.spiritList = FilterPipe.prototype.transform(this.servSpiritList, jsonKeys, this.searchParam, dateFormat );
      this.setPage(1);
    } else {
      this.spiritList = this.servSpiritList;
      this.setPage(1);
  }
}
changeRecPerPage(event: any): void {
  this.recordsPerPage = Number(event);
  this.setPage(1);
}
  }

