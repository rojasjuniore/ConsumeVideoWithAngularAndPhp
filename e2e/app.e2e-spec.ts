import { ConsumoVideoPage } from './app.po';

describe('consumo-video App', () => {
  let page: ConsumoVideoPage;

  beforeEach(() => {
    page = new ConsumoVideoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
