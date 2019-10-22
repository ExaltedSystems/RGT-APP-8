import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-general-pages',
  templateUrl: './general-pages.component.html',
  styleUrls: ['./general-pages.component.css']
})
export class GeneralPagesComponent implements OnInit {
  page_info: any;
  popularVisa: object;
  parentPath : string = '';
  baseUrl: string;
  constructor(private __ms: MainService, private router: Router, private __meta: Meta, private __title: Title
    , private __device: DeviceDetectorService, 
    @Inject(PLATFORM_ID) private platformId: Object) {
    (isPlatformBrowser(this.platformId) ? this.parentPath = window.location.pathname : '');
    
    this.baseUrl = this.__ms.baseUrl;
    if (this.__device.isDesktop()) {
      // window.scrollTo(0, 400);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }
  ngOnInit() {
    // console.log("general pages called");
    this.getPageData();
    this.popularVisas();
  }
  getPageData() {
    let param = this.router.url;
    // param = param.substring(1);
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/pageDetails/?urlLink=' + param).subscribe(res => {
      this.page_info = res.data;
      this.updateMetaTags(res.data);
    });
  }
  popularVisas() {
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/popularVisaRecords/').subscribe(res => {
      this.popularVisa = res.data;
    });
  }
  updateMetaTags(result) {
    this.__title.setTitle(result.metaTitle);
    this.__meta.updateTag({ name: 'description', content: result.metaDescription });
    this.__meta.updateTag({ property: "og:title", content: result.metaTitle });
    this.__meta.updateTag({ property: "og:description", content: result.metaDescription });
    if(isPlatformBrowser(this.platformId)){
      this.__meta.updateTag({ property: "og:url", content: window.location.href });
    }
  }
}
