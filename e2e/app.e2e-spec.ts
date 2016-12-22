import { MhviewPage } from './app.po';

describe('mhview App', function() {
  let page: MhviewPage;

  beforeEach(() => {
    page = new MhviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
