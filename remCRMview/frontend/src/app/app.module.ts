 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemUserComponent } from './rem-user/rem-user.component';
import { RemUserListComponent } from './rem-user-list/rem-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RemUserComponent,
    RemUserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
