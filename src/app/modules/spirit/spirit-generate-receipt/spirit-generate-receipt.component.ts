import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpiritService } from 'src/app/services/apiServices/spirit.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-spirit-generate-receipt',
  templateUrl: './spirit-generate-receipt.component.html',
  styleUrls: ['./spirit-generate-receipt.component.css']
})
export class SpiritGenerateReceiptComponent implements OnInit {
  @Output() readonly passEntry: EventEmitter<any> = new EventEmitter();
  spiritGenarateReceiptForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private spiritServ: SpiritService,
              private toaster: ToastrService,
              private dialogRef: MatDialogRef<SpiritGenerateReceiptComponent>) { }

  ngOnInit() {
    this.createForm();
  }
  save(): void {
    if (this.spiritGenarateReceiptForm.valid) {
      const request = this.spiritGenarateReceiptForm.value;
      this.spiritServ.saveRecipt({requestData: request}).subscribe((res) => {
       this.passEntry.next(true);
       this.dialogRef.close();
       this.toaster.success(res.responseData, '');
    },
    () => {
     this.toaster.error('Error', '');
    });
  } else {
    this.spiritGenarateReceiptForm.markAllAsTouched();
  }
  }

  createForm(): void {
    this.spiritGenarateReceiptForm = this.formBuilder.group({
      supplierName: [''],
      cpeTpNo: ['', Validators.required],
      dtpNo: ['', Validators.required],
      receiptDate: ['', Validators.required],
      vehicleNum: ['', Validators.required],
      remainingQty: ['', Validators.required],
      wastage: ['', Validators.required],
      strength: ['', Validators.required],
      dip: ['', Validators.required],
      remarks: ['', Validators.required]
    });
  }
}
