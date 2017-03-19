import { KolorPage } from './app.po';

describe('kolor App', () => {
  let page: KolorPage;

  beforeEach(() => {
    page = new KolorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
