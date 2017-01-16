import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-expanded',
  templateUrl: './topic-expanded.component.html',
  styleUrls: ['./topic-expanded.component.css']
})
export class TopicExpandedComponent implements OnInit {
  @Input('topic') topic;
  @Input('words') words;

  constructor() { }

  ngOnInit() {
  }

}
