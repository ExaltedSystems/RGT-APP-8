import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/services/main.service.service';
import { SwitchLanguageService } from 'src/app/services/switch-language.service.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslatePipe } from 'src/app/pipes/translate.pipe.pipe';
// declare var jQuery;
import * as jQuery from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [TranslatePipe]
})
export class NavbarComponent implements OnInit {
  @Input() reloadNav: boolean;
  @Output() updateReload = new EventEmitter(); 
  nav: any;
  language: string;

  
  constructor(private __ms: MainService, private __lang: SwitchLanguageService, private __cookie: CookieService) {
  }

  ngOnChanges() {
    if(this.reloadNav) {
      // console.log('Testing reload navbar')
      this.ngOnInit(true);
    }
  }
  ngOnInit(test = false) {
    if(test){
      this.updateReload.emit(null);
    }
    this.getNavBar();
    let cookieExists = this.__cookie.check('selectedLang');
    if (cookieExists == true) {
      let searchCookie = this.__cookie.get('selectedLang');
      let currentSearch = JSON.parse(searchCookie);
      this.language = currentSearch;
      jQuery('#language').val(currentSearch);
      this.__lang.use(currentSearch);
    }
  }
  getNavBar() {
    this.__ms.getData(this.__ms.backEndUrl + 'Cms/navbarTopmenuLinks').subscribe(res => {
      this.nav = res.data;
    });
  }
  switchLanguage(lang: string) {
    jQuery('#language').val(lang);
    this.language = lang;
    this.ngOnInit()
  }
  stopRedirecting(evt, key) {
    // evt.preventDefault();
    // jQuery(".nav-item").each(function(i) {
    //   if(i != key) {
    //     jQuery('#navItem_'+i).removeClass('show');
    //     jQuery('#dropdownMegaMenu_'+i).removeClass('show');
    //   }
    // });
    // jQuery("#navItem_"+key).toggleClass('show');
    // jQuery("#dropdownMegaMenu_"+key).toggleClass('show');
  }
}
