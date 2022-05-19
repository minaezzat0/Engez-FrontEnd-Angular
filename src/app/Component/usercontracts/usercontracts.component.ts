import { Router } from '@angular/router';
import { ContractsService } from './../../services/contracts.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../../models/contract';
import { Token } from '../../models/token';

@Component({
  selector: 'app-usercontracts',
  templateUrl: './usercontracts.component.html',
  styleUrls: ['./usercontracts.component.css']
})
export class UsercontractsComponent implements OnInit {
  token  : Token = {} as Token ;
  contracts : Contract [] = [];

  constructor(private contractservice  : ContractsService , private router : Router ) {

  }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('login')!);

    this.contractservice.getAllFreelancerContracts(this.token.access_token).subscribe(found => { this.contracts = found ; console.log(this.contracts);
    });

  }
  details(id : number){
    this.router.navigate(['/Contractdetails',id]);

  }


}
