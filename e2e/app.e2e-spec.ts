import { ClientTestPage } from './app.po';

describe('client-test App', function() {
  let page: ClientTestPage;

  beforeEach(() => {
    page = new ClientTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
