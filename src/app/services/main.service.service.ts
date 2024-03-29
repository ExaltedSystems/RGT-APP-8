import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { DatePipe, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  public baseUrl = 'http://www.cheapfly.pk/';
  public tktBaseUrl = 'http://exaltedsys.com/';
  public __isAirToken = '';
  public __isAirType = 'O';
  backEndUrl: string = 'http://www.cheapfly.pk/rgtapp/index.php/services/';
  flightsUrl: string = this.tktBaseUrl+'Air-Service/AirAvailability/Flights';
  byTagUrl: string = this.tktBaseUrl+'Air-Service/AirAvailability/AirByTag';
  revalidateUrl: string = this.tktBaseUrl+'Air-Service/AirAvailability/AirRevalidate';
  itineraryUrl: string = this.tktBaseUrl+'Air-Service/AirAvailability/AirItinerary';
  ticketUrl: string = this.tktBaseUrl+'Air-Service/AirAvailability/AirTicket';
  FlightInfo:object;
  hotelSearchQuery: object;
  public emailPattern: string = "[A-Za-z0-9._+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  public phonePattern: string = "^[+]?[0-9 -]*$";
  public ipAddress: any;
  constructor(private __httpClient: HttpClient, private __http: Http, private __datePipe: DatePipe, private __router: Router, 
    @Inject(DOCUMENT) private doc: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    this.getIpAddress();
    // For Live Site to Set http / https
    // let loc = window.location;
    // let loc = this.__router['location']['_platformLocation']['location'];
    // console.log('Documents:', this.doc.location)
    let loc = this.doc.location;
    let base_url = loc.protocol+"//"+loc.hostname+"/";
    this.baseUrl = base_url;
    this.backEndUrl = this.baseUrl+"rgtapp/index.php/services/";
    // this.backEndUrl = "https://www.rehmantravel.com/rgtapp/index.php/services/";
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      this.__isAirToken = localStorage.getItem('__isAirToken');
    }
    
    this.tktBaseUrl = loc.protocol+'//exaltedsys.com/';
    this.flightsUrl = this.tktBaseUrl+'Air-Service/AirAvailability/Flights';
    this.byTagUrl = this.tktBaseUrl+'Air-Service/AirAvailability/AirByTag';
    this.revalidateUrl = this.tktBaseUrl+'Air-Service/AirAvailability/AirRevalidate';
    this.itineraryUrl = this.tktBaseUrl+'Air-Service/AirAvailability/AirItinerary';
    this.ticketUrl = this.tktBaseUrl+'Air-Service/AirAvailability/AirTicket';
  }


  /**
   * get all data
   * @param url type any
   * @return json
   */
  getData(url): Observable<response> {
    return this.__httpClient.get<response>(url);
  }
  /**
   *
   * @param url
   */
  getLIst(url): Observable<any> {
    return this.__httpClient.get<any>(url);
  }
  public getJSON(jsonFile): Observable<any> {
    return this.__httpClient.get(jsonFile);
  }
  getJsonData(url) {
    return this.__httpClient.get<any>(url)
  }

  getAirPorts() {
    return this.__http.get('../../assets/js/locations.json').pipe(map((res:any) => res.json()));
  }

  getBankDetails(){
    let banksUrl = this.backEndUrl + 'cms/allBankDetails';
    return this.getJsonData(banksUrl);
  }

  getBranchesDetails(){
    let branchesUrl = this.backEndUrl + 'cms/allBranchesLists';
    return this.getJsonData(branchesUrl);
  }
  /**
    * Get All Client All Informations
    * @param url type any
    * @return json
  */
  getClientInfo(url): Observable<ipInformation> {
    return this.__httpClient.get<ipInformation>(url);
  }
  getIpAddress(){
      this.__httpClient.get<{ip:string}>('https://jsonip.com').subscribe(data => {
          this.ipAddress = data.ip
      })
  }

  /**
   * post data to server api
   * @param url
   * @param obj
   */
  postData(url, obj): Observable<response> {
    return this.__httpClient.post<response>(url, obj);
  }

  sendPostData(url, obj){
    obj = JSON.stringify(obj)
    return this.__httpClient.request("POST",url,obj);
  }
  putData(url, obj) {
    return this.__httpClient.put(url, obj)
  }
  deleteData(url) {
    return this.__httpClient.delete(url);
  }
  setDateFormat(date, time?) {
    let formatedDate = date;
    if(!time){
      let newDate = new Date(date);
      let month = (newDate.getMonth() + 1 > 9 ? (newDate.getMonth() + 1) : "0" + (newDate.getMonth() + 1));
      let day = (newDate.getDate() > 9 ? newDate.getDate() : "0" + newDate.getDate());
      formatedDate = newDate.getFullYear() + '-' + month + '-' + day;
    }else{
      let timeOnly = date.split('T');
      formatedDate = timeOnly[1];
    }
    return formatedDate;
  }

  getVisaOptions(): Observable<response> {
    const href = this.backEndUrl + 'Cms/readJsonFile';
    return this.__httpClient.get<response>(href);
  }

  locationsJson() {
    return this.getJsonData('../../assets/js/locations.json');
  }
  __filterFlyFrom(sectors, val) {
    if (val.length > 3) {
      return sectors.filter(sector => sector.toLowerCase().indexOf(val.toLowerCase()) != -1)
    } else {
      return sectors.filter(sector => sector.substring(0, 3).toLowerCase().indexOf(val.toLowerCase()) != -1)
    }
  }
  filterFlyingTo(ev) {
    return this.getJsonData('../../assets/js/locations.json')
      .pipe(
        map(sectors => this.__filterFlyTo(sectors, ev.target.value)),
      )
  }
  __filterFlyTo(sectors, val) {
    if (val.length > 3) {
      return sectors.filter(sector => sector.toLowerCase().indexOf(val.toLowerCase()) != -1)
    } else {
      return sectors.filter(sector => sector.substring(0, 3).toLowerCase().indexOf(val.toLowerCase()) != -1)
    }
  }

  airByTagObj(tagID){
    return {
      "__isView": "W",
      "__isAction": "C",
      "__isVendorId": 1,
      "__isAgentId": 0,
      "__isParantId": 0,
      "__isUserId": 0,
      "__isTag": tagID
    }
  } //

  revalidateReq(byTagRes, adtQty, cnnQty, infQty, dptDate){
    const revalidateSectors = [];
    let tagSectors1 = byTagRes['AirItinerary']['OriginDestinationOptions']['OriginDestinationOption'];
    let tagSectors = byTagRes['AirItinerary']['OriginDestinationOptions']['OriginDestinationOption'];
    // console.log('RevalidateReq:', [byTagRes, tagSectors])
    console.log('nestedForeach:', tagSectors1);
    tagSectors.forEach(FlightSegments => {
      let flightSegment = FlightSegments.FlightSegment;
      flightSegment.forEach(element => {
      let eachSector = {
            "__isADate": this.setDateFormat(element.ArrivalDateTime),
            "__isATime": this.setDateFormat(element.ArrivalDateTime, 't'),
            "__isDDate": this.setDateFormat(element.DepartureDateTime),
            "__isDTime": this.setDateFormat(element.DepartureDateTime, 't'),
            "__isFlightNo": element.FlightNumber,
            "__isParty": (adtQty + cnnQty),
            "__isCabin": element.ResBookDesigCode,
            // "__isMarriage": element.MarriageGrp == 'I' ? 'X' : element.MarriageGrp,
            "__isMarriage": element.MarriageGrp == 'O' ? 'X' : 'O',
            "__isStatus": "NN",
            "__isEquipType": element.Equipment[0].AirEquipType,
            "__isOLocation": element.DepartureAirport.LocationCode,
            "__isDLocation": element.ArrivalAirport.LocationCode,
            "__isMkAirLine": element.MarketingAirline.Code,
            "__isOpAirLine": element.OperatingAirline.Code
          }
          revalidateSectors.push(eachSector);
      });
    });

    let revalidatePsgrs = [{
      "__isType": "ADT",
      "__isValue": adtQty
    }];

    if(cnnQty > 0){
      revalidatePsgrs.push({
        "__isType": "CNN",
        "__isValue": cnnQty
      });
    }

    if(infQty > 0){
      revalidatePsgrs.push({
        "__isType": "INF",
        "__isValue": infQty
      });
    }

    let revalidateObj = {
      "__isView": "W",
      "__isAction": "C",
      "__isVendorId": 1,
      "__isAgentId": 0,
      "__isParantId": 0,
      "__isUserId": 0,
      "__isAirType": this.__isAirType,
      "__isTravelDate": dptDate,
      "__isPassengers":revalidatePsgrs,
      "__isSectors": revalidateSectors
    }
    let revalidateMsg = '';
    return this.postData(this.revalidateUrl, revalidateObj)
    // revalidateMsg;
  } //

  revalidateObj(dptDate, revalidatePsgrs, revalidateSectors){
    return {
      "__isView": "W",
      "__isAction": "C",
      "__isVendorId": 1,
      "__isAgentId": 0,
      "__isParantId": 0,
      "__isUserId": 0,
      "__isAirType": this.__isAirType,
      "__isTravelDate": dptDate,
      "__isPassengers":revalidatePsgrs,
      "__isSectors": revalidateSectors
    }
  }//

  createPnr(flightInfos){
    let pnrUrl = this.tktBaseUrl+'Air-Service/AirAvailability/AirReservation';
    let AirType = (flightInfos.vCarrier == 'ER' ? 'S' : 'O');
    this.__isAirType = AirType;
    // this.createReservationJSON({'CreatePnr_0_Obj': flightInfos});
    // This is for iPhone Mobile Device as DatePipe is not working
    let __isTravelDate = flightInfos.__isTravelDate.slice(0, 10);
    let pnrObj = {
      __isView: "W",
      __isAction: "C",
      __isVendorId: 1,
      __isAgentId: 0,
      __isParantId: 0,
      __isUserId: 0,
      __isFlightType: flightInfos.__isFlightType,
      __isFr: flightInfos.__isEmail,
      __isTo: flightInfos.__isEmail,
      __isCc: flightInfos.__isEmail,
      __isAirType: AirType,
      // __isTravelDate: this.__datePipe.transform(flightInfos.__isTravelDate, "yyyy-MM-dd"),
      __isTravelDate: __isTravelDate,
      __isReceivedFrom: "CheapFly",
      __isPhoneNumber: flightInfos.__isPhone,
      __isPassengers:flightInfos.passengers,
      __isSectors: flightInfos.segmentArr,
      __isTravellers: flightInfos.travellers,
      __isAirToken: this.__isAirToken
    } //  end pnr obj
    // this.createReservationJSON({'CreatePnr_Obj': pnrObj});
    return this.postData(pnrUrl, pnrObj);
  } // end createpnr

  private __payload() {
    return {
      "__isView": "W",
      "__isAction": "C",
      "__isVendorId": 1,
      "__isAgentId": 0,
      "__isParantId": 0,
      "__isUserId": 0,
      "__isFlightType": "OneWay",
      "__isFr": "kabirsafi@exalted.pk",
      "__isTo": "",
      "__isCc": "kabirsafi@exalted.pk",
      "__isAirType": "S",
      "__isTravelDate": "2019-10-01",
      "__isReceivedFrom": "API",
      "__isPhoneNumber": "923018195697",
      "__isPassengers": [{
        "__isType": "ADT",
        "__isValue": 1
      }],
      "__isSectors": [{
        "__isFareTypeId": "11",
        "__isLfid": "6547",
        "__isPfid": "6147",
        "__isADate": "2019-10-01",
        "__isATime": "12:00:00",
        "__isDDate": "2019-10-01",
        "__isDTime": "10:00:00",
        "__isFlightNo": "501",
        "__isParty": "1",
        "__isCabin": "U ",
        "__isMarriage": "O",
        "__isStatus": "NN",
        "__isEquipType": "738A",
        "__isOLocation": "ISB",
        "__isDLocation": "KHI",
        "__isMkAirLine": "ER",
        "__isOpAirLine": "ER"

      }],
      "__isTravellers": [{
        "__isType": "ADT",
        "__isPrefix": "MR",
        "__isFirstName": "khan",
        "__isLastName": "nadeem",
        "__isDocType": "F",
        "__isDocNo": "NAQ1984",
        "__isCountry": "PK",
        "__isIssued": "PK",
        "__isGender": "M",
        "__isDOB": "1988-10-13",
        "__isExpiryDate": "2032-08-26"
      }],
      "__isAirToken": this.__isAirToken
    };
  }


  pnrCreated(pnr){
    let pnrSaveUrl = this.backEndUrl+'Ticket/pnrCreated';
    let _token = '';
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      _token = localStorage.getItem("paxToken");
    }
    let pnrSaveObj = {
      pnr: pnr,
      _token: _token
    }
    return this.postData(pnrSaveUrl, pnrSaveObj)
  } // end pnrcreated

  createReservationJSON(obj) {
    this.postData(this.backEndUrl + 'Ticket/createReservationJson', obj).subscribe(resp => {
    })
  }
}
export interface response {
  status: boolean,
  message: string,
  data: object
}

export interface list {
  data: string[]
}

export interface ipInformation {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
}