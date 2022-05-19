import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {
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
