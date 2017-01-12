import { Injectable } from '@angular/core';

@Injectable()
export class RenderService {
  public md;

  constructor() { 
    let Remarkable = require('remarkable');
    this.md        = new Remarkable({
      html: true,
    breaks: false})
  }

  render (text: String) {
        return this.md.render(text);
  }
}
