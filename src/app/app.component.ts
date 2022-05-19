import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal: {
  Buttons: (arg0: {
    createOrder: (data: any, actions: any) => any;
    onApprove: (data: any, actions: any) => Promise<void>;
    onError: (err: any) => void;
  }) => { (): any; new (): any; render: { (arg0: any): void; new (): any } };
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg',
  };

  paidFor = false;

  ngOnInit() {
    

}
}
