import { AipPage } from './app.po';

describe('aip App', () => {
  let page: AipPage;

  beforeEach(() => {
    page = new AipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
