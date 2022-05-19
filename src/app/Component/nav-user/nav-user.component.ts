import { ActivatedRoute, Router } from '@angular/router';
import { Token } from './../../models/token';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  id: number = 0;
  token: Token = {} as Token;
  role: string = "" ;
  name: string = "" ;

  vaild_login: number = 1;
  isLogged : boolean = false ;



  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authservice: AuthService) {
  console.log(this.token);

  }
  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('login')!);
    this.id = this.token.user.id;
    this.role = this.token.user.role;
    this.name = this.token.user.name;
  }
  logout() {
    this.authservice.auth_logout(this.token.access_token).subscribe
      ({
        next: (data) => {

          localStorage.clear();
          this.router.navigate(['/login']);

        },
        error: () => {

          this.vaild_login = 0;

        }

      });

  }
}

