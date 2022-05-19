import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../../models/category';
import { CategoryServiceService } from '../../services/category-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser : User = {} as User;
  catList : Category[] = [] ;
  reconfirm: string = "";
  constructor(private addUser : UsersService , private router  : Router , private categoryservice :CategoryServiceService,private userservice : UsersService ) {

  }

  ngOnInit(): void {
    this.categoryservice.getCategories().subscribe(cats=>{
      this.catList=cats;
    });

  }
addNewUser()
  {

    this.addUser.addUser(this.newUser).subscribe({
      next:(prd)=>{
        console.log(prd);
        Swal.fire({
          title: 'Success!',
          text: ' Register Successfully',
          icon: 'success',
          cancelButtonText: "Ok",
          // iconColor:'red'
          // icon="question"
          // showConfirmButton
          // showCancelButton:"false"
          // cancelButtonText:"Cancel"
          // imageUrl:"/sssss/ss" ,
          // imageWidth:"200px"
          // confirmButtonText: 'ok' ,
          // [showCancelButton]="true"
          // [focusCancel]="true"
        })
        this.router.navigate(['/login']);
      },
      error: (err)=>{
        alert(err.message);
      }
    })
  }

}
