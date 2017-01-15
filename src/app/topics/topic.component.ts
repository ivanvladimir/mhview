import { Component, OnInit, Input } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
  @Input('topic') topic;
  @Input('voca') voca;
  private words;
  private options;

  constructor(public dialog: MdDialog) { 
  }

  expand(){
    this.dialog.open(ChartDialog);
  }

  ngOnInit() {
    this.words = this.extract_words(this.topic.indexes);
    this.options = {
          plotOptions: {
            series: {
              pointPadding: 0,
              groupPadding: 0.1,
           }
          },
          chart: {
                type: 'bar',
                width: 250,
                height: 150, 
            },
            title:{
              text: null
            },
            xAxis: {
              categories: this.words,
              title: {
                  text: null
              }
            },
            yAxis: {
              title: {
                  text: null
              },
              labels: {
                enabled: false
              }
            },
            legend: {
              enabled: false
            },
            series: [{
                name: null,
                data: this.topic.probs,
            }]
    };
  }


  extract_words(is){
    let ws=[];
    console.log('hola');
    for(let i in is){ws.push(this.voca.words[is[i]])};
    return ws;
  }

}

@Component({
  selector: 'topic-dialog',
  templateUrl: './topic-dialog.html',
})
export class ChartDialog {}