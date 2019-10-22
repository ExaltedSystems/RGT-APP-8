import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MainService } from 'src/app/services/main.service.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  @Input()
  page_info: any = { name: '', description: '' };
  sideForm:boolean = false;
  baseUrl: string = '';
  constructor(private __ms: MainService, private __router: Router, private __meta: Meta, private __title: Title, 
    private __device: DeviceDetectorService, @Inject(PLATFORM_ID) private platformId: Object) {
    // // window.scroll(0, 300);
    this.baseUrl = this.__ms.baseUrl;
    if(this.__device.isMobile()){
      this.sideForm = true;
    }
  }

  ngOnInit() {
    this.getPageData();
  }
  getPageData() {
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/pageDetails/?urlLink=/flights').subscribe(res => {
      this.page_info = res.data;
      this.updateMetaTags(res.data);
    });
  }
  updateMetaTags(result) {
    this.__title.setTitle(result.metaTitle);
    this.__meta.updateTag({ name: 'description', content: result.metaDescription });
    this.__meta.updateTag({ property: "og:title", content: result.metaTitle });
    this.__meta.updateTag({ property: "og:description", content: result.metaDescription });
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      this.__meta.updateTag({ property: "og:url", content: window.location.href });
    }
  }

}
