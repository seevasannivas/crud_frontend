import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  submitted: boolean = false;
  modalOpen: boolean = false;

  employee_details: Array<any> = [];


  constructor(private fb: FormBuilder, private empService: EmpServiceService, private router: Router) { }

  myForm: FormGroup = this.fb.group({
    _id: [''],
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    role: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile_no: ['', [Validators.required]]
  })


  ngOnInit() {
    this.fetchEmployee();

  }

  openEmployeeModal() {
    this.modalOpen = !this.modalOpen;
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid && (this.myForm.value._id == '' || this.myForm.value._id == null)) {
      console.log(this.myForm.value);
      const { _id, ...data} = this.myForm.value;
      console.log(data);
      this.empService.addEmployee(data).subscribe({
        next: (res) => {
          console.log(res);
          this.myForm.reset();
          this.submitted = false;
          this.fetchEmployee();
          this.empService.openSuccessSnackbar('Employee added successfully');
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else {
      if (this.myForm.valid) {
        this.empService.updateEmployee(this.myForm.value).subscribe({
          next: (res) => {
            console.log(res);
            this.empService.openSuccessSnackbar('Updated successfully');
            this.fetchEmployee();
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }
  }

  fetchEmployee() {
    this.empService.fetchEmployee().subscribe({
      next: (res) => {
        console.log(res);
        this.employee_details = res.data;
        console.log(this.employee_details)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  edit(data: any) {
    this.myForm.patchValue(data);
  }

  delete(data : any){
    this.empService.deleteEmployee(data).subscribe({
      next : (res)=>{
        console.log(res);
        this.fetchEmployee();
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }
}
