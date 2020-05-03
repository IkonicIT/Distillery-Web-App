import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpiritService } from 'src/app/services/apiServices/spirit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-spirit-request',
  templateUrl: './spirit-request.component.html',
  styleUrls: ['./spirit-request.component.css']
})
export class SpiritRequestComponent implements OnInit {
  @Output() readonly passEntry: EventEmitter<any> = new EventEmitter();
  spiritRequestForm: FormGroup;
  spiritList = [];
  supplierList = [];
  constructor(private saveDialog: MatDialog, private formBuilder: FormBuilder,
              private spiritServ: SpiritService, private dialogRef: MatDialogRef<SpiritRequestComponent>,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.createSpiritRequest();
    this.getSpiritTypes();
    this.getSuppliers();

  }
  getSpiritTypes(): void {
    this.spiritServ.getSpiritTypes().subscribe((res) => {
      if (res && res.responseData) {
        this.spiritList = res.responseData;
      }
    });

  }
  getSuppliers(): void {
    this.spiritServ.getSuppliers().subscribe((res) => {
      if (res && res.responseData) {
        this.supplierList = res.responseData;
      }
    });
  }
  save(): void {
    if (this.spiritRequestForm.valid) {
      const request = this.spiritRequestForm.value;
      request['supplierId'] = this.spiritRequestForm.value['supplierName'];
      request['supplierName'] = this.supplierList.find(res => res.supplierId === Number(request['supplierId'])).supplierName;
      this.spiritServ.saveSpiritForm({requestData: request}).subscribe(() => {
       this.passEntry.next(true);
       this.dialogRef.close();
       this.toaster.success('successfully added', '');
    },
    () => {
     this.toaster.error('Error', '');
    });
  } else {
    this.spiritRequestForm.markAllAsTouched();
  }

  }
  createSpiritRequest(): void {
    this.spiritRequestForm = this.formBuilder.group({
      type: ['', Validators.required],
      requestedDate: [''],
      refNum: ['', Validators.required],
      refDate: [''],
      allotedQuota: ['', Validators.required],
      requestedQty: ['', Validators.required],
      receivedQty: ['', Validators.required],
      supplierName: ['', Validators.required],
      supplierId: [''],
      subject: ['', Validators.required]
    });
  }

}
