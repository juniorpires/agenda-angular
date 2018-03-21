import { Lpw3Page } from './app.po';

describe('lpw3 App', () => {
  let page: Lpw3Page;

  beforeEach(() => {
    page = new Lpw3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
