import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { SwitchLanguageService } from './services/switch-language.service.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app8';
  constructor(private __lang: SwitchLanguageService, 
		@Inject(PLATFORM_ID) private platformId: Object){
    this.__lang.use('en').then(() => {
    });
  }
  ngOnInit(){
    
		if(isPlatformBrowser(this.platformId)){ 
      if(window.matchMedia('(max-width: 768px)').matches){
        // window.scroll(0, 0);
      } else {
        // window.scroll(0, 300);
      }
    }
  }
}
