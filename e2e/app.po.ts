import { browser, element, by } from 'protractor/globals';

export class ProjPage {
  navigateTo() {
    return browser.get('/');
  }

  getItemText() {
    return element(by.css('Item li')).getText();
  }

  getItemTextByText(text: string) {
    return element(by.cssContainingText('Item li', text)).getText();
  }

  isItemPresent(text: string) {
    return element(by.cssContainingText('Item li', text)).isPresent();
  }
  
  clickButtonText(text: string) {
    return element(by.buttonText(text)).click();
  }

  wait(time) {
    return browser.wait(()=>{}, time)
  }

  sendText(text: string, elem: string) {
    return element(by.css(elem)).sendKeys(text)
  }
}
