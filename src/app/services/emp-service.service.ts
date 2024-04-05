import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar,private router : Router) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  back_url = `http://localhost:8030`

  isLoading = new BehaviorSubject<boolean>(false)

  openLoader(){
    this.isLoading.next(true)
  }

  closeLoader(){
    this.isLoading.next(false);
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(`${this.back_url}/api/addEmployee`, data);
  }

  fetchEmployee(): Observable<any> {
    return this.http.get(`${this.back_url}/api/fetchData`)
  }

  updateEmployee(data: any): Observable<any> {
    return this.http.patch(`${this.back_url}/api/updateEmployee/${data._id}`, data)
  }

  deleteEmployee(data: any): Observable<any> {
    return this.http.delete(`${this.back_url}/api/deleteEmployee/${data._id}`)
  }

  login(data:any):Observable<any>{
    return this.http.post(`${this.back_url}/auth/login`,data);
  }

  openSuccessSnackbar(msg: string) {
    this.snackBar.open(msg, 'success', {
     
      duration: 1500,
      panelClass: ['success-snackbar']
    })
  }

  refreshToken(data:any):Observable<any>{
    return this.http.post(`${this.back_url}/auth/refreshToken`,data).pipe(
      tap(
        res=>{
          let response:any = res;
           localStorage.setItem('access_token',response.access_token);
          //  else if(response.statusCode === 403) response.status = 'fail';
        }
      )
    )
  }

  openErrorSnackbar(msg : string){
    this.snackBar.open(msg,'error',{
      horizontalPosition : this.horizontalPosition,
      verticalPosition : this.verticalPosition,
      duration : 1500,
      panelClass : ['error-snackbar']
    })
  }

  logOut(){
    alert('token expired')
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

interface responseObject{
  access_token  : string
}
