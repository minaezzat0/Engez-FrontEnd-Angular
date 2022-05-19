import { ActivatedRoute } from '@angular/router';
import { ContractsService } from './../../services/contracts.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-contractdetailsforfreelancer',
  templateUrl: './contractdetailsforfreelancer.component.html',
  styleUrls: ['./contractdetailsforfreelancer.component.css']
})
export class ContractdetailsforfreelancerComponent implements OnInit {

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

