import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //isSignedIn = false;
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }
  isSignedIn = false
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
