import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { TestDataDisplayComponent}  from "./test-data-display/test-data-display.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {TestdatadisplayService} from "./testdatadisplay.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppComponent, TestDataDisplayComponent,FormsModule],
  providers : [HttpClientModule,TestdatadisplayService,AppComponent],
  bootstrap: []
})
export class AppModule {

}
