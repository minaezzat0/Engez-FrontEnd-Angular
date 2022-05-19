import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Offer } from 'src/app/models/Offer';
import { Post } from 'src/app/models/post';
import { OffersService } from 'src/app/services/offers.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  job: Post = {} as Post;
  listoffers: Offer[] = [];
  jobId: number = 0;
  token: Token = {} as Token;


  constructor(private jobService: PostsService, private activatedRoute: ActivatedRoute, private router: Router, private offerservice: OffersService) { }

  ngOnInit(): void {
    console.log(this.listoffers)
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });


    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get("id"));
      this.jobService.getPostByID(this.jobId)?.subscribe(found => { this.job = found });
      //this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.job = found } );


      this.token = JSON.parse(localStorage.getItem('login')!);

      this.offerservice.getAllOffers(this.jobId).subscribe(prdList => {
        this.listoffers = prdList;
      });






    })

  }
  details(id:number){
    this.router.navigate(['/FProfile',id ])
  }
  confirm(id : number){
    this.router.navigate(['/addcontract',id ])
  }

}
