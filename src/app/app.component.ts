import { Component } from '@angular/core';
import { CoreService } from './service/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NookBook';

  constructor( translate : TranslateService) { 
    translate.setDefaultLang('th')
  }
}
