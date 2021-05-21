import { browser, by, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should navigate Home', async () => {
    await page.navigateHome()
    expect()
  });

  it('Should navigate Paint', async () => {
    await page.navigatePaint()
    expect()
  });

  it('Should buy', async () => {
    (await page.buyItem()).click();
    expect()
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
