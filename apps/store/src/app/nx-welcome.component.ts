import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {environment} from "../environments/environment";

/* eslint-disable */

@Component({
  selector: 'banshop-nx-welcome',
  template: `lol`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(environment.STORE_API_URL)
  }
}
