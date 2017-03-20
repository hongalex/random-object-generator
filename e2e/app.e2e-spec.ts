import { RandomPage } from './app.po';

describe('random App', () => {
  let page: RandomPage;

  beforeEach(() => {
    page = new RandomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
