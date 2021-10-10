import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsAPIService } from './hackernews-api.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBAW_Cppa0pWyRRuZQr4mZBgf_gMWsHFxg",
      authDomain: "venzo-8aa0c.firebaseapp.com",
      projectId: "venzo-8aa0c",
      storageBucket: "venzo-8aa0c.appspot.com",
      messagingSenderId: "763614965188",
      appId: "1:763614965188:web:08b4a0d9c1387a96e58891",
      measurementId: "G-DZSX4Z2J10"
    })
  ],
  providers: [FirebaseService, HttpClientModule, HackerNewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
