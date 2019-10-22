import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isObject } from 'util';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-request-callback-form',
  templateUrl: './request-callback-form.component.html',
  styleUrls: ['./request-callback-form.component.css']
})
export class RequestCallbackFormComponent implements OnInit {
  page_info: any;
  contactForm: FormGroup;
  deviceFullInfo = null;
  browser = null;
  operatingSys = null;
  isLoad: boolean = false;
  disableSubmitBtn: boolean = false;
  errors;
  adminDetails: object;
  whatsappNum: string;
  whatsappTxt: string;
  // 9 For Contact-Us and About-Us
  inquiryType: number = 9;
  isMobile: boolean = false;
  moduleUrl: string;
  sanitizedUrl: any;

  constructor(private __ms: MainService, private __fb: FormBuilder, private __dd: DeviceDetectorService,
    private __router: Router, private __actRoute: ActivatedRoute, private sanitizer: DomSanitizer, 
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.deviceFullInfo = this.__dd.getDeviceInfo();
    this.browser = this.__dd.browser;
    this.operatingSys = this.__dd.os;
    if(isPlatformBrowser(this.platformId)){
      this.moduleUrl = window.location.href.replace('//', '').split('/')[1];
      if (this.__actRoute.snapshot.queryParams['_flight_type']) {
        this.moduleUrl = 'flights';
      }
      if(window.matchMedia("(max-width: 768px)").matches) {
        this.isMobile = true;
      }
    }
    this.setInquiryType(this.moduleUrl);
  }

  ngOnInit() {
    this.contactForm = this.__fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ["", [Validators.required, Validators.email, Validators.pattern(this.__ms.emailPattern)]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern(this.__ms.phonePattern)]],
      emailMessage: ["", Validators.required],
    });
    this.__ms.getData(this.__ms.backEndUrl+"Cms/adminWhatsapp").subscribe(res => {
      if(res.status) {
        this.adminDetails = res.data;
        this.setInquiryType(this.moduleUrl);
        this.sanitizedUrl = this.sanitizeWhatsappUrl();
      }
    })
  }
  setInquiryType(urlName) {
    switch(urlName) {
      case 'flights': {
        this.inquiryType = 1;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+flights+page";
        break;
      }
      case 'hotels': {
        this.inquiryType = 2;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+hotels+page";
        break;
      }
      case 'visa': {
        this.inquiryType = 3;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['visaMobiles'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+visa-page";
        break;
      }
      case 'umrah-packages': {
        this.inquiryType = 4;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['umrhMobiles'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+umrah+packages+page";
        break;
      }
      case 'umrah': {
        this.inquiryType = 4;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['umrhMobiles'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+design+your+umrah+pacakge+page";
        break;
      }
      case 'hajj': {
        this.inquiryType = 5;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['hajjMobiles'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+hajj+page";
        break;
      }
      case 'jobs': {
        this.inquiryType = 6;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+jobs+page";
        break;
      }
      case 'world-tours': {
        this.inquiryType = 7;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['umrhMobiles'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+world+tours+page";
        break;
      }
      case 'pakistantours': {
        this.inquiryType = 7;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+pakistan+tours+page";
        break;
      }
      case 'deals': {
        this.inquiryType = 8;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+deals+page";
        break;
      }
      case 'contactUs': {
        this.inquiryType = 9;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+contact+us+page";
        break;
      }
      case 'aboutUs': {
        this.inquiryType = 9;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+about+us+page";
        break;
      }
      case 'bank-details': {
        this.inquiryType = 9;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+about+us+page";
        break;
      }
      case 'franchise-reg': {
        this.inquiryType = 10;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+franchise+registration+page";
        break;
      }
      default: {
        this.inquiryType = 9;
        this.whatsappNum = (this.adminDetails ? this.adminDetails['isb_mobile'] : '');
        this.whatsappTxt = "Query+from+rehman+travels+contact+us+page";
        break; 
      }
    }
  }
  onSubmit(inputs) {
    this.isLoad = true;
    if (this.contactForm.valid) {
      this.disableSubmitBtn = true;
      let emailSubject: string;
      let urlStr = this.__actRoute.snapshot.url;
      if (urlStr.length > 0) {
        emailSubject = urlStr[urlStr.length - 1].path
      }
      Object.assign(inputs, {
        ipAddress: this.__ms.ipAddress,
        browser: this.browser,
        emailSubject: "Query from " + emailSubject,
        operatingSys: this.operatingSys,
        deviceFullInfo: this.deviceFullInfo,
        pageUrl: this.__router.url,
        country: "PK",
        referrerUrl: document.referrer,
        inquiryType: this.inquiryType
      });
      this.__ms.postData(this.__ms.backEndUrl + 'cms/inquiryCallBack', inputs).subscribe(result => {
        if (result.status) {
          this.isLoad = false;
          this.disableSubmitBtn = false;
          this.__router.navigate(['/thank-you']);
        } else {
          this.disableSubmitBtn = false;
          if (isObject(result.data)) {
            for (let i in result.data) {
              this.contactForm.controls[i].setErrors({ 'incorrect': true });
              this.errors = result.data;
            }
            this.isLoad = false;
          }
        }
      });
    } else {
      this.disableSubmitBtn = false;
      this.isLoad = false;
    }
  }
  sanitizeWhatsappUrl(){
    let url = "whatsapp://send?phone="+this.whatsappNum+"&text="+this.whatsappTxt+"%0A%0A";
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
