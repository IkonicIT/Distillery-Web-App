import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { LabSampleFormSavedComponent } from '../lab-sample-form-saved/lab-sample-form-saved.component';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { LabService } from 'src/app/services/apiServices/lab.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lab-sample-form',
  templateUrl: './lab-sample-form.component.html',
  styleUrls: ['./lab-sample-form.component.css']
})
export class LabSampleFormComponent implements OnInit {
  @Output() readonly passEntry: EventEmitter<any> = new EventEmitter();
  labSampleForm: FormGroup;
  constructor(private saveDialog: MatDialog,
              private fb: FormBuilder, private labService: LabService,
              private toaster: ToastrService,
              private dialogRef: MatDialogRef<LabSampleFormComponent>) {
                this.labSampleForm = this.getAddLabSampleFormObje();
              }

  ngOnInit() {
  }
  save(): void {
    console.log(this.labSampleForm.value);
    const requestdata = {
      requestData: this.labSampleForm.value
    };
    const config: MatDialogConfig = {
      height: '150px',
      width: '300px'
    };
   //  this.saveDialog.open(LabSampleFormSavedComponent, config);
    this.labService.saveLabSample(requestdata).subscribe(() => {
      this.passEntry.next(true);
      this.dialogRef.close();
      this.toaster.success('successfully added', '');
   },
   () => {
    this.toaster.error('Error', '');
   });
  }

  getAddLabSampleFormObje(): FormGroup {
    return new FormGroup({
      sampleType: new FormControl(''),
      referenceNum: new FormControl(''),
      date: new FormControl(''),
      sentThrough: new FormControl(''),
      signatureFile: new FormControl(''),
      labInformation: this.fb.array([ this.addLabInfoRow() ])
    });
}
addLabInfoRow(): any {
  return this.fb.group({
    slNo: [''],
    description: [''],
    lotNo: [''],
    sampleQnty: [''],
    dataFile: ['']
  });
  // const fa = this.labSampleForm.get('labInformation') as FormArray;
  // fa.push(temp);
}
addNewRow(): void {
  const fa = this.labSampleForm.get('labInformation') as FormArray;
  fa.push(this.addLabInfoRow());
}

get labInformation(): any {
  return this.labSampleForm.get('labInformation');
}
removeRow(index: number): void {
  const fa = this.labSampleForm.get('labInformation') as FormArray;
  fa.removeAt(index);
}

}
