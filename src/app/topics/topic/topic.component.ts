import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() data;
  private topic;
  private voca;
  constructor() { }

  ngOnInit() {
    this.topic=this.data['topic'];
    this.voca=this.data['voca'];
  }

  private topic2string(indices,words){
    let ws=[]
    for (let i in indices){
        ws.push(words[indices[i]]);
    }
    return ws.join(', ')
  }
}
