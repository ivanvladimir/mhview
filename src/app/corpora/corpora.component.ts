import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-corpora',
  templateUrl: './corpora.component.html',
  styleUrls: ['./corpora.component.css']
})
export class CorporaComponent implements OnInit {
  public projects;

  constructor(private jsonService:JsonService) { 

    this.projects=this.jsonService.getJSON("projects.json");
  }

  ngOnInit() {
  }

}
