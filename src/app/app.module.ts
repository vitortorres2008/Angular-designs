import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionHistoryComponent } from './version-history/version-history.component';
import { DropBtnComponent } from './components/drop-btn/drop-btn.component';
import { FormsModule } from '@angular/forms';
import { ModalBtnComponent } from './components/modal-btn/modal-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionHistoryComponent,
    DropBtnComponent,
    ModalBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
