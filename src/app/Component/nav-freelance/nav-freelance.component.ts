import { AuthService } from './../../services/auth-service.service';
import { Token } from './../../models/token';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-freelance',
  templateUrl: './nav-freelance.component.html',
  styleUrls: ['./nav-freelance.component.css']
})
export class NavFreelanceComponent implements OnInit {
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


