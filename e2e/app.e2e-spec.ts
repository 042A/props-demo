import { AngfirePage } from './app.po';

describe('angfire App', () => {
  let page: AngfirePage;

  beforeEach(() => {
    page = new AngfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
