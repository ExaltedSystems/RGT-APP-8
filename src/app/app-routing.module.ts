import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { VisaListsComponent } from './components/visa/visa-lists/visa-lists.component';
import { VisaComponent } from './components/visa/visa.component';
import { UmrahComponent } from './components/umrah/umrah.component';
import { CalculateUmrahPackageComponent } from './components/umrah/calculate-umrah-package/calculate-umrah-package.component';
import { DealsComponent } from './components/deals/deals.component';
import { ToursComponent } from './components/tours/tours.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FlightsListingComponent } from './components/flights/flights-listing/flights-listing.component';
import { FlightsBookingComponent } from './components/flights/flights-booking/flights-booking.component';
import { PnrViewComponent } from './components/pnr-view/pnr-view.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PaymentErrorComponent } from './components/payment-error/payment-error.component';
import { HotelsListingComponent } from './components/hotels/hotels-listing/hotels-listing.component';
import { HotelDetailsComponent } from './components/hotels/hotel-details/hotel-details.component';
import { HotelBookingComponent } from './components/hotels/hotel-booking/hotel-booking.component';
import { HotelVoucherComponent } from './components/hotels/hotel-voucher/hotel-voucher.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { TourCalculatorComponent } from './components/tour-calculator/tour-calculator.component';
import { GeneralPagesComponent } from './components/general-pages/general-pages.component';
import { ViewAirlineHotelDetialsComponent } from './components/view-airline-hotel-detials/view-airline-hotel-detials.component';

export const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'flights', component: FlightsComponent },
	{ path: 'flights-listing', component: FlightsListingComponent },
	{ path: 'flight-booking', component: FlightsBookingComponent },
	{ path: 'pnrView', component: PnrViewComponent },
	{ path: 'flight-deals/:deal', component: DealsComponent },
	{ path: 'airlines/:airline', component: ViewAirlineHotelDetialsComponent },
	{ path: 'hotels', component: HotelsComponent },
	{ path: 'hotels-listing', component: HotelsListingComponent },
	{ path: 'hotel-details', component: HotelDetailsComponent },
	{ path: 'hotels/:hotel', component: ViewAirlineHotelDetialsComponent },
	{ path: 'hotel-booking', component: HotelBookingComponent },
	{ path: 'hotel-voucher', component: HotelVoucherComponent },
	{ path: 'visa', component: VisaListsComponent },
	{ path: 'visa/:visa', component: VisaComponent },
	{ path: 'umrah', component: UmrahComponent },
	{ path: 'umrah-packages/:package', component: UmrahComponent },
	{ path: 'umrah/design-your-package', component: CalculateUmrahPackageComponent },
	{ path: 'deals', component: DealsComponent },
	{ path: 'franchise-reg', component: FranchiseComponent },
	{ path: 'jobs', component: JobsComponent },
	{ path: 'tours', component: ToursComponent },
	{ path: 'tour-calculator', component: TourCalculatorComponent },
	{ path: 'aboutUs', component: AboutUsComponent },
	{ path: 'bank-details', component: AboutUsComponent },
	{ path: 'contactUs', component: ContactUsComponent },
	{ path: 'paymentError', component: PaymentErrorComponent },
	{ path: 'thank-you', component: ThankYouComponent },
    { path: '**', component: GeneralPagesComponent }
];