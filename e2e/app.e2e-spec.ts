import { VsadaPage } from './app.po';

describe('vsada App', function() {
  let page: VsadaPage;

  beforeEach(() => {
    page = new VsadaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
