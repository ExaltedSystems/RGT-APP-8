import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';

@Component({
  selector: 'app-amazing-visa-offer',
  templateUrl: './amazing-visa-offer.component.html',
  styleUrls: ['./amazing-visa-offer.component.css']
})
export class AmazingVisaOfferComponent implements OnInit {
  @Input() masterArray :any;
  allVisas: any;
  baseUrl: string;
  constructor(private __ms: MainService) {
    this.baseUrl = this.__ms.baseUrl;
  }

  ngOnInit() {
    this.getAllVisaRecords();
  }
  getAllVisaRecords() {
    this.__ms.getData(this.__ms.backEndUrl + 'Visa/amazingVisaOffers').subscribe(res => {
      if (res.status) {
        this.allVisas = res.data;
      }
    });
  }

}
