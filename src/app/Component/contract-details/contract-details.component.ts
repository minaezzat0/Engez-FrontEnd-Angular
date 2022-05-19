import { Component, OnInit } from '@angular/core';
import { Contract } from '../../models/contract';
import { ContractsService } from '../../services/contracts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TimePipe } from '../../pipes/time.pipe';


@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {
  con : Contract = {} as Contract ;
  id : number = 0 ;

  constructor(private contractservice : ContractsService , private activatedRoute : ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get("id"));

      this.contractservice.getContractByContractId(this.id)?.subscribe(found => { this.con = found } );

      })


  }
}
