import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {

  private dataUrl = '/assets/json/';

  constructor(private http: Http) {}

  getJSON (file: String) {
    return this.http.get(this.dataUrl + file)
              .toPromise()
              .then(request => <string[]> request.json())
              .catch(this.handleError);
  }

  private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
  }
}
