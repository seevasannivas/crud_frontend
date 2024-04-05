import { Component } from '@angular/core';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(public empService : EmpServiceService){}

  ngOnInit(){}
}
