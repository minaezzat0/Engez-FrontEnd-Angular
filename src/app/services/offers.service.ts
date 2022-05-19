import { Offer } from '../models/Offer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private httpOptians = {};

  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Access-token'
      })
    }


  }
  getAllOffers(jobId: number): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${environment.API_BASE_URL}/joboffers/${jobId}`);
  }

  getOfferById(offerId: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${environment.API_BASE_URL}/offers/${offerId}`);
  }

  accepted(offerId: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${environment.API_BASE_URL}/verify/offers/${offerId}`);
  }

  getMyOffers(token:string ): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${environment.API_BASE_URL}/myoffers?access_token=${token}`);
  }

  addOffer(NewOffer: Offer, token : string): Observable<Offer> {
    return this.httpClient.post<Offer>(`${environment.API_BASE_URL}/offers?access_token=${token} `,
      JSON.stringify(NewOffer), this.httpOptians);
  }

  updateOffers(NewOffer: Offer,OfferId: number): Observable<Offer> {
    return this.httpClient.post<Offer>(`${environment.API_BASE_URL}/offers/${OfferId}/${NewOffer.id}`, JSON.stringify(NewOffer), this.httpOptians)

  }

  deleteOffers(OfferId: number,NewOffer: Offer): Observable<{}> {
    const url = `${environment.API_BASE_URL}/offers/${OfferId}/${NewOffer.id}`;
    return this.httpClient.delete(`${environment.API_BASE_URL}/offers/${OfferId}/${NewOffer.id}`, this.httpOptians)

  }

}
