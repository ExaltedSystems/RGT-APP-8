import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-umrah',
  templateUrl: './umrah.component.html',
  styleUrls: ['./umrah.component.css']
})
export class UmrahComponent implements OnInit {
	page_info: any;
	baseUrl: string;
	lineBr: string = " || ";
	spaceBr: string = "Package Includes :";
	constructor(private _ms: MainService, private __router: Router, private __meta: Meta, private __title: Title) {
		// window.scroll(0, 300);
		this.baseUrl = this._ms.baseUrl;
		this.__router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		}
		if(window.matchMedia('(max-width: 768px)').matches) {
			this.lineBr = "<br>";
			this.spaceBr = "Package<br>Includes:";
		}
	}
	ngOnInit() {
		this.getPageData();
	}
	getPageData() {
		this._ms.getData(this._ms.backEndUrl + 'Cms/pageDetails/?urlLink=' + this.__router.url).subscribe(res => {
			this.page_info = res.data;
			this.updateMetaTags(res.data);
		});
	}
	updateMetaTags(result) {
		this.__title.setTitle(result.metaTitle);
		this.__meta.updateTag({ name: 'description', content: result.metaDescription }, 'name=description');
		this.__meta.updateTag({ property: "og:title", content: result.metaTitle });
		this.__meta.updateTag({ property: "og:description", content: result.metaDescription });
		this.__meta.updateTag({ property: "og:url", content: window.location.href });
	}

}
