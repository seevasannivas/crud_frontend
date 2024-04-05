import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb : FormBuilder,private emp: EmpServiceService,private router : Router){}

  myForm : FormGroup = this.fb.group({
    username : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })
  
  submitted : boolean = false;


  onSubmit(){
    this.submitted = true;
    if(this.myForm.valid){
      this.emp.openLoader();
      this.emp.login(this.myForm.value).subscribe({
        next : (res)=>{
          console.log(res.data);
          localStorage.setItem('access_token',res.data.token.access_token);
          localStorage.setItem('refresh_token',res.data.token.refresh_token);
          this.submitted = false;
          this.myForm.reset();
          this.router.navigate(['/home'])
          this.emp.closeLoader();
        },
        error : (err)=>{
          console.log(err);
        }
      })
    }

  }
}
