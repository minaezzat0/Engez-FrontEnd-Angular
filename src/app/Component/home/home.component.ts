import { Token } from './../../models/token';

import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list : Post[] = [] ;
  token : Token = {} as Token;
  name : string  = "";
  constructor( private router : Router , private postserve : PostsService) { }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('login')!);
    this.name = this.token.user.name;
    this.postserve.getAllPosts().subscribe(prdList => {
      this.list = prdList ;
    } );

  }

  details(freelancerID : Number){
    this.router.navigate(['/jobdetails',freelancerID])
  }


}



