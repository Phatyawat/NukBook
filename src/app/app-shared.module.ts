import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { AppTranslatesModule, HttpLoaderFactory } from "./app-translate.module";

@NgModule({
  imports: [ 
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
   
  ],
  exports: [TranslateModule]
  
})
export class AppSharedModule { }