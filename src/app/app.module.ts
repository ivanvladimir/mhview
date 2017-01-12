import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {SanitizeHtmlPipe} from './sanitize.pipe';
import {HomeComponent} from './home/home.component';
import {CorporaComponent} from './corpora/corpora.component';
import {MarkdownModule} from 'angular2-markdown';
import {JsonService} from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorporaComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
