import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewdetailsGetAPIService } from '../services/viewdetails-get-api.service';
import { ViewData } from './constants/data';
@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.scss'],
})
export class ViewStatusComponent {

viewData!: ViewData[];

  constructor(private dataService : ViewdetailsGetAPIService){}

  ngOnInit(){
    this.dataService.getViewData().subscribe(data=>{
      this.viewData = data;
    }) 
  }


}
