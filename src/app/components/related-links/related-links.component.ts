import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-related-links',
  templateUrl: './related-links.component.html',
  styleUrls: ['./related-links.component.css']
})
export class RelatedLinksComponent implements OnInit {

  relatedLinks: object;
  isMobile: boolean = false;
  constructor(private __ms: MainService, private __router: Router, private __actRoute: ActivatedRoute, 
    @Inject(PLATFORM_ID) private platformId: Object) {
    if(isPlatformBrowser(this.platformId)){
      if(window.matchMedia('(max-width:768px').matches) {
        this.isMobile = true;
      }
    }
  }

  ngOnInit() {
    this.getRelatedLinks();
  }
  getRelatedLinks() {
    let url = this.__actRoute.snapshot.url[0].path;
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/relatedLinks/?url=' + url).subscribe(res => {
      if(res.status) {        
        this.relatedLinks = res.data;
      }
    });
  }

}
