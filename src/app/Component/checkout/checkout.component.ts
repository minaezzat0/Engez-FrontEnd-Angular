import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/Offer';
import { Contract } from '../../models/contract';
import { ContractsService } from '../../services/contracts.service';
import { OffersService } from '../../services/offers.service';
import { Token } from '../../models/token';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  handler: any = null;
  contractId: number = 0;
  offer: Offer = {} as Offer;
  token: Token = {} as Token;
  username : string = '';
  userid : number = 0;

  constructor(private offerservice: OffersService, private router : Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.contractId = Number(params.get("id"));
      this.offerservice.getOfferById(this.contractId)?.subscribe(found => { this.offer = found });
    });
    this.token = JSON.parse(localStorage.getItem('login')!);
    this.username = this.token.user.name;
    this.userid = this.token.user.id;

    this.loadStripe();
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KssQcFVEWS4X7uujDo7PQ7EdgaUesT6uuUj1wqmdkghnON0iSu6syL5FwMd6Qz2pCZO4i12Izk0P6EGDPzD8Iyy00pDNUNdHF',
      locale: 'auto',
      image: 'assets/logo.svg',
      token: function (token: any) {
        // You can access the token ID with token.id.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire({
          title: 'Success!',
          text: 'Your Payment done Successfully',
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
      

      }

    });


    handler.open({
      name: 'Engez Payment Platfrom',
      description: 'Pay Securely With Us',
      amount: amount * 100
    });


  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with token.id.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
  Back(){
    this.router.navigate(['userProfile/',this.userid])
  }
}
