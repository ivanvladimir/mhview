import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {

  private dataUrl = '/assets/json/';

  constructor(private http: Http) {}

  getJSON (file: String) {
    return this.http.get(this.dataUrl + file)
              .map(this.extractData)
              .catch(this.handleError);
  }

  getTopics (dir: String) {
    return Observable.forkJoin(
        this.http.get(this.dataUrl+dir+"/voca.json").map(this.extractData).catch(this.handleError),
        this.http.get(this.dataUrl+dir+"/topics.json").map(this.extractData).catch(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
  }
}
