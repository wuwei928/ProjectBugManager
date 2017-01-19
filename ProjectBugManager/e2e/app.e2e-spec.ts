import { WuPage } from './app.po';

describe('wu App', function() {
  let page: WuPage;

  beforeEach(() => {
    page = new WuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
