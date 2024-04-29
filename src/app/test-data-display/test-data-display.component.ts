import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TestClass} from "./testclass";
import {TestdatadisplayService} from "../testdatadisplay.service";

@Component({
  selector: 'app-test-data-display',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './test-data-display.component.html',
  styleUrl: './test-data-display.component.css'
})
export class TestDataDisplayComponent implements OnInit {
  public tests: TestClass [] = [];

  constructor(private TestdatadisplayService: TestdatadisplayService) {
  }


  gethardcodes(){
    this.TestdatadisplayService.gettest().subscribe(data  => {
    this.tests = data
    console.log(this.tests)
    })
  };
  getdbcode() {
    this.TestdatadisplayService.gettestdb().subscribe(data => {
      this.tests = data
      console.log(this.tests)
    })
  }

  ngOnInit() {
    this.getdbcode();
    this.gethardcodes();
}
}
