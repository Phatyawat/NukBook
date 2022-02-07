import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreComponent } from './views/layouts';
import { AppTranslatesModule } from './app-translate.module';
import { AppSharedModule } from './app-shared.module';
//AoT requires an exported function for factories


@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent
  ],
  imports: [ 
    //NgbModule,
    BrowserModule,
    AppRoutingModule,
    AppTranslatesModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
