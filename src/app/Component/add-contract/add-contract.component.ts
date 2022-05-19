import { Offer } from './../../models/Offer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractsService } from '../../services/contracts.service';
import { Token } from 'src/app/models/token';
import { Contract } from '../../models/contract';
import { OffersService } from '../../services/offers.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  token: Token = {} as Token;
  newContract: Contract = {} as Contract;
  offerId: number = 0;
  offer: Offer = {} as Offer;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contractservice: ContractsService, private offerservice: OffersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.offerId = Number(params.get("id"));
    })
    this.offerservice.getOfferById(this.offerId).subscribe(prdList => {
      this.offer = prdList;

    this.newContract.job_id = this.offer.job_id;
    this.newContract.freelancer_id = this.offer.user_id;
    this.newContract.price = this.offer.offer_amount;
    });

    this.token = JSON.parse(localStorage.getItem('login')!);




  }



  addContract() {
    this.contractservice.addContract(this.newContract, this.token.access_token).subscribe({
      next: (prd) => {
        console.log(this.newContract.id);
        this.offerservice.accepted(this.offerId).subscribe({
        });
        Swal.fire({
          title: 'Success!',
          text: 'Contract Created Successfully',
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
        this.router.navigate(['/payment',this.offerId]);
      },
      error: (err) => {
        alert(err.message);
      }
    })

  }
}
