import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  subscriberSuccessMsg: string;
  subscriberErrorMsg: string;
  isLoad: boolean = false;
  constructor(private __fb: FormBuilder, private __ms: MainService, private __router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.subscribeForm = this.__fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.__ms.emailPattern)]]
    });
  }

  subscribeNow(inputs) {
    if(this.subscribeForm.valid) {
      this.isLoad = true;
      Object.assign(inputs, {
        ipAddress: this.__ms.ipAddress,
        pageUrl: this.__router.url,
      });
      this.__ms.postData(this.__ms.backEndUrl + 'cms/addSubscriber', inputs).subscribe(result => {
        if(result.status){
          this.subscriberSuccessMsg = result.message;
        } else {
          this.subscriberErrorMsg = result.message;
          this.subscribeForm.controls['email'].setErrors({ 'incorrect': true });
        }
        this.resetSuccErrMsg(true);
        this.isLoad = false;
      });
    } else {
      let emailAdd = this.subscribeForm.controls['email'].value;
      let msg = "Email address not valid. . . . .";
      if(emailAdd == '') {
        msg = "Email address required. . . . .";
      }
      this.subscriberErrorMsg = msg;
      this.subscribeForm.controls['email'].setErrors({ 'incorrect': true });
      this.resetSuccErrMsg();
    }
  }
  resetSuccErrMsg(isSubscribe = false) {   
    if(isPlatformBrowser(this.platformId)){ 
      window.setTimeout(()=>{
        if(isSubscribe) {
          this.subscribeForm.get('email').setValue('');
          this.subscribeForm.controls['email'].markAsUntouched(); 
        }
        this.subscriberSuccessMsg = '';
        this.subscriberErrorMsg = '';
      }, 5000);
    }
  }

}
