import { JsonguiPage } from './app.po';

describe('jsongui App', function() {
  let page: JsonguiPage;

  beforeEach(() => {
    page = new JsonguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
