import { Token } from 'src/app/models/token';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/Offer';
import { OffersService } from 'src/app/services/offers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {
  token :  Token  = {} as Token  ;
  newOffer : Offer = {} as Offer ;
  jobId : number = 0;

  constructor( private activatedRoute : ActivatedRoute ,private router : Router  , private offerservice : OffersService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get("id"));
    })


    this.token = JSON.parse(localStorage.getItem('login')!);
    this.newOffer.job_id = this.jobId ;
    this.newOffer.user_id = this.token.user.id ;
    console.log(this.token.access_token);
  }

  sendOffer(){
    this.offerservice.addOffer(this.newOffer,this.token.access_token).subscribe({
      next:(prd)=>{
        console.log(prd);
        Swal.fire({
          title: 'Success!',
          text: 'Your Offer Added Successfully',
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
        this.router.navigate(['/home']);

      },
      error: (err)=>{
        alert(err.message);
      }
    })

  }
}
