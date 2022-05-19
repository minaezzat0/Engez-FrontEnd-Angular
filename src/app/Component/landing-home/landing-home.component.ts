import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.css']
})
export class LandingHomeComponent implements OnInit {
  messageList : Message = {} as Message;
  constructor(private Router  : Router , private messageservice : MessagesService ) { }

  ngOnInit(): void {
  }
  addMessage() {
    this.messageservice.addMessage(this.messageList).subscribe({
      next: (prd) => {

        Swal.fire({
          title: 'Success!',
          text: 'Your Message Send Successfully',
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

      },
      error: (err) => {
        alert(err.message);
      }
    })



  }
}
