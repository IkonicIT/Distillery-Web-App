import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { AddVehicleService } from 'src/app/services/apiServices/add-vehicle-tracking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vehicle-tracking',
  templateUrl: './add-vehicle-tracking.component.html',
  styleUrls: ['./add-vehicle-tracking.component.css']
})
export class AddVehicleTrackingComponent implements OnInit {
  vehicleTrackForm: FormGroup;
  destinationList = [];
  constructor(private fb: FormBuilder, private vehicleServ: AddVehicleService,
              private toasterService: ToastrService) { }

  ngOnInit() {
    this.vehicleTrackForm = this.getvehicleTrackFormObj();
    this.getDestinationList();
  }

  getvehicleTrackFormObj(): FormGroup {
    return new FormGroup({
      tpVehicleNumber: new FormControl(''),
      vehicleNum: new FormControl(''),
      distilleryName: new FormControl(''),
      destination: new FormControl(''),
      cases: new FormControl(''),
      routeName: this.fb.array([ this.addRoute() ])
    });
}

addRoute(): any {
  return this.fb.group({
    route: ['']
  });
}
addNewRow(): void {
  const fa = this.vehicleTrackForm.get('routeName') as FormArray;
  fa.push(this.addRoute());
}
get routeName(): any {
  return this.vehicleTrackForm.get('routeName');
}
removeRow(index: number): void {
  const fa = this.vehicleTrackForm.get('routeName') as FormArray;
  fa.removeAt(index);
}
submitForm(): void {
  const requestPayLoad = this.vehicleTrackForm.value;
  requestPayLoad['routeName'] = requestPayLoad.routeName.map( m => m.route);
  this.vehicleServ.addVehicleTracking(requestPayLoad).subscribe(() => {
    this.toasterService.success('Tracking Details Added Successfully', 'Success');
    this.vehicleTrackForm.reset();
    this.vehicleTrackForm.updateValueAndValidity();
  },
  () => {

  });
}
getDestinationList(): void {
  this.vehicleServ.getDestinationList().subscribe(res => {
    if (res && res.responseData && res.responseData.length) {
      this.destinationList = res.responseData;
    }
  });
}
}
