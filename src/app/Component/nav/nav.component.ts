import { AuthService } from './../../services/auth-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Token } from 'src/app/models/token';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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





  }
  toTop() {
    document.getElementById("ab")!.scrollIntoView();
  }
  toContactus() {
    document.getElementById("contact")!.scrollIntoView();
  }




  refresh(): void {

}
}
