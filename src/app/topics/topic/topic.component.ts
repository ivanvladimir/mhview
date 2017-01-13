import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() info;
  private topic;
  private voca;
  private options;

  constructor() {
    this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };

   }

  ngOnInit() {
    this.topic=this.info['topic'];
    this.voca=this.info['voca'];
  }
    

  private topic2string(indices,words){
    let ws=[]
    for (let i in indices){
        ws.push(words[indices[i]]);
    }
    return ws.join(', ')
  }



}
