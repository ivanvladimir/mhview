import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import 'hammerjs';

import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {SanitizeHtmlPipe} from './sanitize.pipe';
import {HomeComponent} from './home/home.component';
import {CorporaComponent} from './corpora/corpora.component';
//import {MarkdownModule} from 'angular2-markdown';
import {JsonService} from './json.service';
import {SearchBoxComponent} from './search-box.component';
import { SearchPipe } from './search.pipe';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topics/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorporaComponent,
    SearchBoxComponent,
    SearchPipe,
    SanitizeHtmlPipe,
    TopicsComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
//    MarkdownModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
