import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { NguiStickyModule } from '@ngui/sticky';

import { AngularFireModule } from 'angularfire2';
//import { MaterialModule } from '@angular/material';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Home } from './home.component';
import { ApiBase } from './apibase.component';
import { Api1 } from './api1.component';
import { Api2 } from './api2.component';
import { Api3 } from './api3.component';
import { UiBase } from './uibase.component';
import { CreateSeller } from './createseller.component';
import { UploadComponent } from './imageupload.component';
import { CreateProduct }      from './createproduct.component';
import { CreateProposal }      from './create-proposal.component';
import { StepOne }      from './step-one.component';
import { StepTwo }      from './step-two.component';
import { ApiTemplate }      from './apitemplate.component';
import { ShoppingCart, SearchPipe }      from './shoppingcart.component';






// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyA-Bh25m39vR8YfHHGbyprW68t8dzz0dAY",
    authDomain: "crackling-fire-8197.firebaseapp.com",
    databaseURL: "https://crackling-fire-8197.firebaseio.com",
    storageBucket: "crackling-fire-8197.appspot.com",
    messagingSenderId: "99283865327"
};


@NgModule({
  declarations: [
    Home,
    AppComponent,
    ApiBase,
    Api1,
    Api2,
    Api3,
    UiBase,
    CreateSeller,
    UploadComponent,
    CreateProduct,
    CreateProposal,
    StepOne,
    StepTwo,
    ApiTemplate,
    ShoppingCart,
    SearchPipe
  ],
  imports: [
    BrowserModule,
  //  NgbModule.forRoot(),
  //  AlertModule.forRoot(),
   // MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    NgSemanticModule,
    ReactiveFormsModule,
    FormsModule,
    DragulaModule,
    NguiStickyModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

