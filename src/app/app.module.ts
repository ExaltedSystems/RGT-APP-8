import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatNativeDateModule, MatAutocompleteModule,
  MatSelectModule, MatSidenavModule, MatProgressBarModule, MatCheckboxModule,
   MatExpansionModule, MatStepperModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatTabsModule, MatIconModule, 
   MatTooltipModule,
   MatError} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CookieService } from 'ngx-cookie-service';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
// Components
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmazingVisaOfferComponent } from './components/amazing-visa-offer/amazing-visa-offer.component';
import { DealsComponent } from './components/deals/deals.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightsListingComponent } from './components/flights/flights-listing/flights-listing.component';
import { FlightsSearchComponent } from './components/flights/flights-search/flights-search.component';
import { FlightsBookingComponent } from './components/flights/flights-booking/flights-booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { TravelAgentsComponent } from './components/franchise/travel-agents/travel-agents.component';
import { GeneralPagesComponent } from './components/general-pages/general-pages.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelBookingComponent } from './components/hotels/hotel-booking/hotel-booking.component';
import { HotelDetailsComponent } from './components/hotels/hotel-details/hotel-details.component';
import { HotelInlineSearchFormComponent } from './components/hotels/hotel-inline-search-form/hotel-inline-search-form.component';
import { HotelSearchFormComponent } from './components/hotels/hotel-search-form/hotel-search-form.component';
import { HotelsListingComponent } from './components/hotels/hotels-listing/hotels-listing.component';
import { HotelSubscribeComponent } from './components/hotels/hotel-subscribe/hotel-subscribe.component';
import { HotelVoucherComponent } from './components/hotels/hotel-voucher/hotel-voucher.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentErrorComponent } from './components/payment-error/payment-error.component';
import { PnrViewComponent } from './components/pnr-view/pnr-view.component';
import { PopularAirlinesAndHotelsComponent } from './components/popular-airlines-and-hotels/popular-airlines-and-hotels.component';
import { RelatedLinksComponent } from './components/related-links/related-links.component';
import { RequestCallbackFormComponent } from './components/request-callback-form/request-callback-form.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TourCalculatorComponent } from './components/tour-calculator/tour-calculator.component';
import { ToursComponent } from './components/tours/tours.component';
import { UmrahComponent } from './components/umrah/umrah.component';
import { CalculateUmrahPackageComponent } from './components/umrah/calculate-umrah-package/calculate-umrah-package.component';
import { UmrahReadymadePackagesComponent } from './components/umrah/umrah-readymade-packages/umrah-readymade-packages.component';
import { VisaComponent } from './components/visa/visa.component';
import { VisaListsComponent } from './components/visa/visa-lists/visa-lists.component';
// Pipes
import { OrderByPipe } from 'src/app/pipes/order-by.pipe.pipe';
import { StarRatingFilterPipe } from 'src/app/pipes/star-rating-filter.pipe.pipe';
import { BreakfastTypeFilterPipe } from 'src/app/pipes/breakfast-type-filter.pipe.pipe';
import { PriceFilterPipe } from 'src/app/pipes/price-filter.pipe.pipe';
import { FacilityFilterPipe } from 'src/app/pipes/facility-filter.pipe.pipe';
import { IframePipe } from 'src/app/pipes/iframe.pipe.pipe';
import { VisaListingPipe } from 'src/app/pipes/visa-listing.pipe.pipe';
import { TranslatePipe } from 'src/app/pipes/translate.pipe.pipe';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe.pipe';
import { FilterAirlineNamePipe } from 'src/app/pipes/filter-airline-name.pipe.pipe';
import { ViewAirlineHotelDetialsComponent } from './components/view-airline-hotel-detials/view-airline-hotel-detials.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { FilterVisaByNamePipe } from './pipes/filter-visa-by-name.pipe.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe.pipe';
import { MainService } from './services/main.service.service';
import { AirPortsPipe } from './pipes/air-ports.pipe';
import { SecondsPipePipe } from './pipes/seconds-pipe.pipe.pipe';
import { HotelFiltersPipe } from './pipes/hotel-filters.pipe.pipe';
import { AirportPipe } from './pipes/airport.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    AboutUsComponent,
    ContactUsComponent,
    AmazingVisaOfferComponent,
    DealsComponent,
    FlightsComponent,
    FlightsListingComponent,
    FlightsSearchComponent,
    FlightsBookingComponent,
    FooterComponent,
    FranchiseComponent,
    TravelAgentsComponent,
    GeneralPagesComponent,
    HeaderComponent,
    HomeComponent,
    HotelsComponent,
    HotelBookingComponent,
    HotelDetailsComponent,
    HotelInlineSearchFormComponent,
    HotelSearchFormComponent,
    HotelsListingComponent,
    HotelSubscribeComponent,
    HotelVoucherComponent,
    JobsComponent,
    NavbarComponent,
    PaymentErrorComponent,
    PnrViewComponent,
    PopularAirlinesAndHotelsComponent,
    RelatedLinksComponent,
    RequestCallbackFormComponent,
    SubscribeComponent,
    ThankYouComponent,
    TourCalculatorComponent,
    ToursComponent,
    UmrahComponent,
    CalculateUmrahPackageComponent,
    UmrahReadymadePackagesComponent,
    VisaComponent,
    VisaListsComponent,
    ViewAirlineHotelDetialsComponent,
    // Pipes
    FilterVisaByNamePipe,
    OrderByPipe,
    BreakfastTypeFilterPipe,
    StarRatingFilterPipe,
    PriceFilterPipe,
    FacilityFilterPipe,
    IframePipe,
    VisaListingPipe,
    TranslatePipe,
    FilterAirlineNamePipe,
    SafeHtmlPipe,
    DateFormatPipe,
    AirPortsPipe,
    SecondsPipePipe,
    HotelFiltersPipe,
    AirportPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    // Material Modules
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    // Form Modules
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'top'}),
    NgxGalleryModule,
    // NgxMaskModule.forRoot(),
    // RangeSliderModule,
    FilterPipeModule,
    Ng5SliderModule,
    DeviceDetectorModule.forRoot(),
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgL2VGk4yfL2IzdFgGO0m2D36MA3NVwLw'
    })
  ],
  providers: [MainService, CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
