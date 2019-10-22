import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  page_info: any;
  isBank: boolean = false;
  baseUrl: string;
  bankDetails: object;
  aboutUsPdf:string = "doc/profile-book-version-02April.pdf";
  constructor(private __ms: MainService, private __router: Router, private __meta: Meta, private __title: Title, 
    __location: Location, @Inject(PLATFORM_ID) private platformId: Object) {
    this.baseUrl = this.__ms.baseUrl;
  }

  ngOnInit() {
    if (this.__router.url != '/bank-details') {
      this.getPageData('/aboutUs');
      this.isBank = false;
    } else {
      this.getPageData('/bank-details');
      this.getAllBankDetails();
      this.isBank = true;
    }
  }
  getPageData(pageUrl) {
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/pageDetails/?urlLink='+pageUrl).subscribe(res => {
      this.page_info = res.data;
      this.updateMetaTags(res.data);
    });
  }
  getAllBankDetails() {
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/allBankDetails').subscribe(res => {
      this.bankDetails = res.data;
    });
  }
  updateMetaTags(result) {
    
    // let originLoc = this.__location._platformLocation.location.origin;
    // let pathName = this.__location._platformLocation.location.pathname;
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
