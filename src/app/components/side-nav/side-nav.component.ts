import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private router : Router){}

  current_url : any ;

  ngOnInit(){
    this.current_url = this.router.url;
  }

  onClick(data:String){
    this.current_url = data;
     this.router.navigate([data])
  }
}
