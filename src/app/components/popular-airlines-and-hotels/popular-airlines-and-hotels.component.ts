import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-airlines-and-hotels',
  templateUrl: './popular-airlines-and-hotels.component.html',
  styleUrls: ['./popular-airlines-and-hotels.component.css']
})
export class PopularAirlinesAndHotelsComponent implements OnInit {

	popular_airlines: any;
	popular_hotels  : any;
  constructor(private _ms: MainService,private router: Router) {
		this.router.routeReuseStrategy.shouldReuseRoute = function(){
    	return false;
		}
  }
  ngOnInit() {
  	this.papularAirlineHotels();
  }
  papularAirlineHotels(){
    // this.baseUrl = this.__ms.baseUrl;
    this._ms.getData(this._ms.backEndUrl+'Cms/popularAirlinesHotels/').subscribe(res => {
      this.popular_airlines = res.data['popularAirlines'];
      this.popular_hotels   = res.data['popularHotels'];
    });
  }

}
