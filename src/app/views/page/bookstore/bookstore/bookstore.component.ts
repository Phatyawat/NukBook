import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../../service/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {

 
  constructor( core : CoreService) { 
    core.setDefaultLang('th')
    
  }
  ngOnInit() {
    
  }

}
