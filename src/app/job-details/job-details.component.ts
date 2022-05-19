import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from '../models/token';
import { OffersService } from '../services/offers.service';
import { Offer } from '../models/Offer';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job : Post = {} as Post ;
  newOffer : Offer = {} as Offer ;
  jobId : number = 0;
  token :  Token  = {} as Token  ;


  constructor( private jobService : PostsService , private activatedRoute : ActivatedRoute ,private router : Router  ) {


  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get("id"));
      this.jobService.getPostByID(this.jobId)?.subscribe(found => { this.job = found } );
      //this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.job = found } );



      })
  }
  details(id:number){
    this.router.navigate(['/addoffer',id ])

  }


}
