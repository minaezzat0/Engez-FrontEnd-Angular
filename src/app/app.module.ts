import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';


import { FreelancersComponent } from './Component/freelancers/freelancers.component';

import { AddJobComponent } from './Component/add-job/add-job.component';
import { ResumesComponent } from './Component/resumes/resumes.component';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth-service.service';
import { CreatOfferComponent } from './Component/creat-offer/creat-offer.component';
import { FreelancerProfileComponent } from './freelancer-profile/freelancer-profile.component';
import { LandingHomeComponent } from './Component/landing-home/landing-home.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { HomeuserComponent } from './Component/homeuser/homeuser.component';
import { ContractDetailsComponent } from './Component/contract-details/contract-details.component';
import { OfferDetailsComponent } from './Component/offer-details/offer-details.component';
import { TimePipe } from './pipes/time.pipe';
import { ContractsComponent } from './Component/contracts/contracts.component';
import { AddcontractComponent } from './Component/addcontract/addcontract.component';
import { AddofferComponent } from './Component/addoffer/addoffer.component';
import { NavUserComponent } from './Component/nav-user/nav-user.component';
import { NavFreelanceComponent } from './Component/nav-freelance/nav-freelance.component';
import { FprofileComponent } from './Component/fprofile/fprofile.component';
import { AddContractComponent } from './Component/add-contract/add-contract.component';
import { UsercontractsComponent } from './Component/usercontracts/usercontracts.component';
import { ContractdetailsforfreelancerComponent } from './Component/contractdetailsforfreelancer/contractdetailsforfreelancer.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,

    FreelancersComponent,

    AddJobComponent,
    ResumesComponent,
    JobDetailsComponent,
    CreatOfferComponent,
    FreelancerProfileComponent,
    LandingHomeComponent,
    UserProfileComponent,
    HomeuserComponent,
    ContractDetailsComponent,
    OfferDetailsComponent,
    TimePipe,
    ContractsComponent,
    AddcontractComponent,
    AddofferComponent,
    NavUserComponent,
    NavFreelanceComponent,
    FprofileComponent,
    AddContractComponent,
    UsercontractsComponent,
    ContractdetailsforfreelancerComponent,
    CheckoutComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,





  ],
  providers: [[AuthService ],
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
