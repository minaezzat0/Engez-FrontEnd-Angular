import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { Token } from '../models/token';
import { OffersService } from '../services/offers.service';
import { Offer } from '../models/Offer';

@Component({
  selector: 'app-freelancer-profile',
  templateUrl: './freelancer-profile.component.html',
  styleUrls: ['./freelancer-profile.component.css']
})
export class FreelancerProfileComponent implements OnInit {
  user : User = {} as User ;
  offerList : Offer[] = [];
  userId : number = 0;
  token : Token = {} as Token ;
  constructor(private userservice : UsersService , private Router : Router , private activatedRoute : ActivatedRoute , private offerservice : OffersService )  {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = Number(params.get("id"));
      this.userservice.getUserByID(this.userId)?.subscribe(found => { this.user = found } );
      //this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.job = found } );
      });
      this.token = JSON.parse(localStorage.getItem('login')!);
    //  console.log(this.token


      this.offerservice.getMyOffers(this.token.access_token).subscribe( found => {
        this.offerList = found ;
      });


  }
  details(id : number){
    this.Router.navigate(['/jobdetails',id]);

  }


}
