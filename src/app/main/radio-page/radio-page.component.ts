import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RadioItemComponent } from './radio/radio-item/radio-item.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RadioPageComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    const subComp = ['radio-item'];
    this.app.codeSnippets(subComp);
  }

}
