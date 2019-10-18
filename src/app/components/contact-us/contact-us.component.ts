import { Component, OnInit } from '@angular/core';
import { isObject } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MainService } from 'src/app/services/main.service.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MatIcon } from '@angular/material';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  page_info: any;
  baseUrl: string;
  contactForm: FormGroup;
  deviceFullInfo = null;
  browser = null;
  operatingSys = null;
  disableSubmitBtn: boolean = false;
  isLoad: boolean = false;
  errors;

  constructor(private __ms: MainService, private __fb: FormBuilder, private __dd: DeviceDetectorService,
      private __router: Router, private __meta: Meta, private __title: Title) {
      this.deviceFullInfo = this.__dd.getDeviceInfo();
      this.browser = this.__dd.browser;
      this.operatingSys = this.__dd.os;
      // // window.scroll(0, 300);
      this.baseUrl = this.__ms.baseUrl;
  }

  ngOnInit() {
      this.getPageData();
      this.contactForm = this.__fb.group({
          name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
          email: ["", [Validators.required, Validators.email, Validators.pattern(this.__ms.emailPattern)]],
          phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern(this.__ms.phonePattern)]],
          emailMessage: ["", Validators.required],
      });
  }
  getPageData() {
      this.__ms.getData(this.__ms.backEndUrl + 'Cms/pageDetails/?urlLink=/contactUs').subscribe(res => {
          this.page_info = res.data;
          this.updateMetaTags(res.data);
      });
  }
  onSubmit(inputs) {
      this.isLoad = true;
      if (this.contactForm.valid) {
          this.disableSubmitBtn = true;
          Object.assign(inputs, {
              ipAddress: this.__ms.ipAddress,
              browser: this.browser,
              emailSubject: "Query from Contact-Us",
              operatingSys: this.operatingSys,
              deviceFullInfo: this.deviceFullInfo,
              pageUrl: this.__router.url,
              country: "PK",
              referrerUrl: this.__router.url,
              inquiryType: 9 // For Contact-Us and About-Us
          });
          this.__ms.postData(this.__ms.backEndUrl + 'cms/inquiryCallBack', inputs).subscribe(result => {
              console.log('post:', result);
              if (result.status) {
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
  updateMetaTags(result) {
      this.__title.setTitle(result.metaTitle);
      this.__meta.updateTag({ name: 'description', content: result.metaDescription });
      this.__meta.updateTag({ property: "og:title", content: result.metaTitle });
      this.__meta.updateTag({ property: "og:description", content: result.metaDescription });
      this.__meta.updateTag({ property: "og:url", content: window.location.href });
  }

}
