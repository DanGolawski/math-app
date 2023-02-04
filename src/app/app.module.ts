import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { HomePage } from './home/home.page';
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPEaVy9jBqk4xIVPkS-wjKvSHM_Sp8iaM",
  authDomain: "mathapp-82010.firebaseapp.com",
  projectId: "mathapp-82010",
  storageBucket: "mathapp-82010.appspot.com",
  messagingSenderId: "407431684916",
  appId: "1:407431684916:web:9fd199bd2c36194bf3fb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PipesModule,
  ],
  providers: [
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
