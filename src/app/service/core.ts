import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";



@Injectable({
    providedIn: 'root'
})


export class CoreService {
     
    constructor(private translate:TranslateService){}

    setDefaultLang(lang:string) {
        this.translate.setDefaultLang(lang);
    }

    setUseLang(lang:string) {
        this.translate.use(lang);
    }
}