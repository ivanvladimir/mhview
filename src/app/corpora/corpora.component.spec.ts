/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorporaComponent } from './corpora.component';

describe('CorporaComponent', () => {
  let component: CorporaComponent;
  let fixture: ComponentFixture<CorporaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
