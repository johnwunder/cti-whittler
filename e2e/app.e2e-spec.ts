import { CtiWhittlerPage } from './app.po';

describe('cti-whittler App', function() {
  let page: CtiWhittlerPage;

  beforeEach(() => {
    page = new CtiWhittlerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
