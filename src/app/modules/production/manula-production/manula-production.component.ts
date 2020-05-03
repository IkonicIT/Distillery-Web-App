import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ManualProductionCaseAssociationComponent } from '../manual-production-case-association/manual-production-case-association.component';
import { ManualProductionLineInformatonComponent } from '../manual-production-line-informaton/manual-production-line-informaton.component';
import { ManualProductionUploadSpoolComponent } from '../manual-production-upload-spool/manual-production-upload-spool.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manula-production',
  templateUrl: './manula-production.component.html',
  styleUrls: ['./manula-production.component.css']
})
export class ManulaProductionComponent implements OnInit {

  constructor(private caseAssociationDialog: MatDialog, private caseInfoDialog: MatDialog, private uploadSpoolDialog: MatDialog,
              private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/production') && this.permServ.getPermission('home/production/manual-production'))) {
      this.router.navigateByUrl('home/production');
    }
  }
  caseAssociation() {
    this.caseAssociationDialog.open(ManualProductionCaseAssociationComponent);
  }
  lineInfo() {
    const config: MatDialogConfig = {
    };
    this.caseInfoDialog.open(ManualProductionCaseAssociationComponent, config);
  }
  upload() {
    this.uploadSpoolDialog.open(ManualProductionUploadSpoolComponent);
  }
}
