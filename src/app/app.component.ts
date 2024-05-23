import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestDataDisplayComponent} from "./test-data-display/test-data-display.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginMenuComponent} from "./loginMenu/loginMenu.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestDataDisplayComponent, HttpClientModule, LoginMenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FrontClinic';
  constructor(private http: HttpClient) {

  }
  ngOnInit():void {
    this.fetachDetailsdb();
  }

  public fetchDetailshard() {
    this.http.get('http://localhost:8080/hard').subscribe((data:any) => {})
  }
  public fetachDetailsdb() {
    this.http.get('http://localhost:8080/dbdata').subscribe((data:any) => {})
  }
}
