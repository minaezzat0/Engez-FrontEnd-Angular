
import { Token } from 'src/app/models/token'
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/Offer';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-fprofile',
  templateUrl: './fprofile.component.html',
  styleUrls: ['./fprofile.component.css']
})
export class FprofileComponent implements OnInit {

  user: User = {} as User;
  offerList: Offer[] = [];
  userId: number = 0;

  constructor(private userservice: UsersService, private Router: Router, private activatedRoute: ActivatedRoute, private offerservice: OffersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = Number(params.get("id"));
      this.userservice.getUserByID(this.userId)?.subscribe(found => { this.user = found });
      //this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.job = found } );
    });


  }
  details(id: number) {
    this.Router.navigate(['/jobdetails', id]);

  }


}
