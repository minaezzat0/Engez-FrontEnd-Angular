import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  formGroup: FormGroup = new FormGroup({});
  login_user: any = localStorage.getItem('login');
  vaild_login: number = 1;
  isLoggedSubject: BehaviorSubject<boolean>;

  constructor(private router: Router, private authservice: AuthService, private userservice: UsersService) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);

  }

  ngOnInit(): void {


    this.initForm();

  }
  ngAfterViewInit(): void {

  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    });

  }

  login() {
    console.log("mina");
    if (this.formGroup.valid) {
      this.authservice.auth_login(this.formGroup.value).subscribe
        ({
          next: (data) => {

            if (data.access_token != null) {
              this.vaild_login = 1;
              localStorage.setItem('login', JSON.stringify(data));
              this.isLoggedSubject.next(true);
              if (data.user.role == "freelancer") {
                this.router.navigate(['/home']);
              }
              else if (data.user.role == "users") {
                this.router.navigate(['/homeuser']);
              }
            } else {

              this.vaild_login = 0;
              // this.router.navigate(['/login']);
              Swal.fire({
                title: 'Error',
                text: 'Your username or password is incorrect',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'ok!',
              }).then((result) => {
                if (result.value) {
                  window.location.reload();
                }
              })


            }
          },
          error: () => {

            this.vaild_login = 0;

          }

        });
    }
  }



}
