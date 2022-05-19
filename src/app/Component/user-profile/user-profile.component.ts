import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user';
import { Token } from '../../models/token';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { ContractsService } from '../../services/contracts.service';
import { Contract } from 'src/app/models/contract';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: number = 0;
  user: User = {} as User;
  contracts: Contract[] = [];
  token: Token = {} as Token;
  constructor(private router: Router, private userService: UsersService, private activatedRoute: ActivatedRoute, private contractservice: ContractsService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = Number(params.get("id"));
      this.userService.getUserByID(this.userId)?.subscribe(found => { this.user = found });
      this.token = JSON.parse(localStorage.getItem('login')!);

      this.contractservice.getAllFreelancerContracts(this.token.access_token).subscribe(found => { this.contracts = found });

    });


  }
  details(id : number){
    this.router.navigate(['/contractdetails',id]);

  }

}
