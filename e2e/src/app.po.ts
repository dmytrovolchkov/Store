import { browser, by, element } from 'protractor';

export class AppPage {

  async navigateHome(): Promise<unknown> {
    return browser.get('/home');
  }

  async navigatePaint(): Promise<unknown> {
    return browser.get('/home/1');
  }

}
