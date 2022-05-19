import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract';



@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private httpOptians = {};

  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        // 'Authorization':'Access-token'
      })
    }

  }
  getAllContracts(UserId: number): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${environment.API_BASE_URL}/contractsforuser/${UserId}`);
  }

  addContract(NewContract: Contract,token: string): Observable<Contract> {
    return this.httpClient.post<Contract>(`${environment.API_BASE_URL}/contracts?access_token=${token}`,
      JSON.stringify(NewContract), this.httpOptians);
  }

  updateContract(NewContract: Contract,ContractId: number): Observable<Contract> {
    return this.httpClient.post<Contract>(`${environment.API_BASE_URL}/posts/${ContractId}/${NewContract.id}`, JSON.stringify(NewContract), this.httpOptians)

  }

  deleteContractById(ContractId: number,NewContract: Contract): Observable<{}> {
    const url = `${environment.API_BASE_URL}/posts/${ContractId}/${NewContract.id}`;
    return this.httpClient.delete(`${environment.API_BASE_URL}/posts/${ContractId}/${NewContract.id}`, this.httpOptians)

  }
  getContractByContractId(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${environment.API_BASE_URL}/contracts/${id}`);
  }
  getAllFreelancerContracts(token: string): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${environment.API_BASE_URL}/mycontracts?access_token=${token}`);
  }

  // getAllUsersContracts(token: string): Observable<Contract[]> {
  //   return this.httpClient.get<Contract[]>(`${environment.API_BASE_URL}/mycontracts?access_token=${token}`);
  // }

}
