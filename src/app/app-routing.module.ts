import { ContractDetailsComponent } from './Component/contract-details/contract-details.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';

import { FreelancersComponent } from './Component/freelancers/freelancers.component';
import { AddJobComponent } from './Component/add-job/add-job.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

import { JobDetailsComponent } from './job-details/job-details.component';
import { AuthGuard } from './Guard/auth.guard';
import { CreatOfferComponent } from './Component/creat-offer/creat-offer.component';
import { FreelancerProfileComponent } from './freelancer-profile/freelancer-profile.component';
import { LandingHomeComponent } from './Component/landing-home/landing-home.component';
import { NavComponent } from './Component/nav/nav.component';
import { HomeuserComponent } from './Component/homeuser/homeuser.component';
import { ContractsComponent } from './Component/contracts/contracts.component';
import { OfferDetailsComponent } from './Component/offer-details/offer-details.component';
import { ResumesComponent } from './Component/resumes/resumes.component';
import { AddofferComponent } from './Component/addoffer/addoffer.component';
import { FprofileComponent } from './Component/fprofile/fprofile.component';
import { AddContractComponent } from './Component/add-contract/add-contract.component';
import { UsersService } from './services/users.service';
import { UsercontractsComponent } from './Component/usercontracts/usercontracts.component';
import { ContractdetailsforfreelancerComponent } from './Component/contractdetailsforfreelancer/contractdetailsforfreelancer.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';



const routes: Routes = [
  { path: '', redirectTo: '/landingHome', pathMatch: 'full' },
  { path: 'landingHome', component: LandingHomeComponent  },
  { path: 'home', component: HomeComponent , canActivate :[AuthGuard]},
  { path: 'freelancers', component: FreelancersComponent , canActivate :[AuthGuard]},
  { path: 'AddJob', component: AddJobComponent , canActivate :[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobdetails/:id', component: JobDetailsComponent , canActivate :[AuthGuard]},
  { path: 'addoffer/:id', component: AddofferComponent , canActivate :[AuthGuard]},
  { path: 'freelancerProfile/:id', component: FreelancerProfileComponent , canActivate :[AuthGuard]},
  { path: 'addjob', component: AddJobComponent , canActivate :[AuthGuard] },
  { path: 'homeuser', component: HomeuserComponent , canActivate :[AuthGuard]},
  { path: 'userProfile/:id', component: UserProfileComponent , canActivate :[AuthGuard]},
  { path: 'contracts', component: ContractsComponent , canActivate :[AuthGuard]},
  { path: 'contractdetails/:id', component: ContractDetailsComponent , canActivate :[AuthGuard] },
  { path: 'Jobdetails/:id', component: OfferDetailsComponent  , canActivate :[AuthGuard]},
  { path: 'Freelancers', component: ResumesComponent , canActivate :[AuthGuard]},
  { path: 'FProfile/:id', component: FprofileComponent , canActivate :[AuthGuard]},
  { path: 'addcontract/:id', component: AddContractComponent , canActivate :[AuthGuard]},
  { path: 'Ucontracts', component: UsercontractsComponent , canActivate :[AuthGuard]},
  { path: 'Contractdetails/:id', component: ContractdetailsforfreelancerComponent , canActivate :[AuthGuard] },
  { path: 'payment/:id', component: CheckoutComponent , canActivate :[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
