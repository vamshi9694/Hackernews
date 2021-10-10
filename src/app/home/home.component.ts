import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
//import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }


}
