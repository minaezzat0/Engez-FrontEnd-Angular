import { OffersService } from './../../services/offers.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Token } from '../../models/token';
import { Offer } from '../../models/Offer';


@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  list : Post[] = [] ;
  token : Token = {} as Token;
  id : number = 0;
  name : string ='' ;
  listoffers : Offer[] = [];


  constructor( private router : Router , private postserve : PostsService , private activatedRoute : ActivatedRoute , private offerservice : OffersService ) {

  }

  ngOnInit(): void {

    this.token = JSON.parse(localStorage.getItem('login')!);
    this.name = this.token.user.name;
    this.postserve.getAllPostsByUserID(this.token.access_token).subscribe(prdList => {
      this.list = prdList ;
    } );






  }

  details(freelancerID : Number){
    this.router.navigate(['/Jobdetails',freelancerID ])
  }





}
