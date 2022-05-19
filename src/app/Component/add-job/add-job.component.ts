import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../services/category-service.service';
import { PostsService } from '../../services/posts.service';
import { Category } from 'src/app/models/category';
import { Post } from '../../models/post';
import { Token } from '../../models/token';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  catlist : Category []= [];
  job : Post = {} as Post;
  token : Token = {} as Token;

  constructor(private router : Router , private catservice : CategoryServiceService ,  private jobService : PostsService ) {

  }

  ngOnInit(): void {
    this.catservice.getCategories().subscribe( found => {
      this.catlist = found ;
      console.log(found)
    })
    this.token = JSON.parse(localStorage.getItem('login')!);
  }
  addjob(){
  this.jobService.addJob(this.job,this.token.access_token).subscribe({
    next:(prd)=>{
      Swal.fire({
        title: 'Success!',
        text: 'Job Added Successfully',
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
      this.router.navigate(['/homeuser']);
    },
    error: (err)=>{
      alert(err.message);
    }
  })}

}
