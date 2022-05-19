import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService,private router:Router)
  {

  }

    canActivate():boolean {
      // return false ;

    if(this.authservice.loggedIn)
    {
      return true;
    }else
    {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
    //   return true;
    // }
  //   if (this.authService.loggedIn) {
  //     console.log(this.authService.loggedIn);
  //     return true;
  //   } else {
  //     alert('You must login First...');
  //     this.router.navigate(['/Login']);
  //     return false;
  //   }
  //   //return false;
  // }

