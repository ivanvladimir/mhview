/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonService } from './json.service';

describe('JsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonService]
    });
  });

  it('should ...', inject([JsonService], (service: JsonService) => {
    expect(service).toBeTruthy();
  }));
});
