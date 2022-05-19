import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../services/contracts.service';
import { Token } from '../../models/token';
import { Contract } from '../../models/contract';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  token  : Token = {} as Token ;
  contracts : Contract [] = [];

  constructor(private contractservice  : ContractsService , private router : Router ) {

  }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('login')!);
    this.contractservice.getAllFreelancerContracts(this.token.access_token).subscribe(found => { this.contracts = found });
  }

    details(id : number){
      this.router.navigate(['/Contractdetails',id]);

    }



}
