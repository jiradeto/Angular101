import { Angular101Page } from './app.po';

describe('angular101 App', function() {
  let page: Angular101Page;

  beforeEach(() => {
    page = new Angular101Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
