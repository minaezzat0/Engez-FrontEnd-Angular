import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {
  freelancerList : User[] = [] ;
  // freelancerID : number = 0;
  constructor(private router : Router , private userService : UsersService  ) {
    this.userService.getAllFreelancers().subscribe(
      found => {
        this.freelancerList = found ;
    })
  }

  ngOnInit(): void {


  }
  details(id:number){
    this.router.navigate(['/freelancerProfile',id ])

  }


}
