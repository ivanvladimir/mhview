import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '@angular/material';
import {JsonService} from '../json.service';
import {SearchBoxComponent} from '../search-box.component';

@Component({
  selector: 'app-corpora',
  templateUrl: './corpora.component.html',
  styleUrls: ['./corpora.component.css']
})
export class CorporaComponent implements OnInit {
  public projects;
  public term = '';

  constructor(private jsonService:JsonService) { 

    this.projects=this.jsonService.getJSON("projects.json");
  }

  onUpdate(term: string): void {
    this.term = term;
  }

  ngOnInit() {
  }

}
