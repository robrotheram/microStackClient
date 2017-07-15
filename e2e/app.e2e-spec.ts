import { MircostackPage } from './app.po';

describe('mircostack App', () => {
  let page: MircostackPage;

  beforeEach(() => {
    page = new MircostackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
