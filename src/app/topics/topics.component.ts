import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json.service';
import {SearchBoxComponent} from '../search-box.component';
import {TopicComponent} from './topic/topic.component';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  public topics;
  public voca;
  public term = '';

  constructor(private jsonService:JsonService) { 
    this.jsonService.getTopics("wiki01").subscribe(
        data => {this.voca = data[0]; this.topics=data[1];}
    )
  }

  onUpdate(term: string): void {
    this.term = term;
  }

  ngOnInit() {
  }

}