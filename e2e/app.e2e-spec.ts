import { ProjPage } from './app.po';

describe('proj App', function() {
  let page: ProjPage;

  beforeEach(() => {
    page = new ProjPage();
  });

  it('should have a single list element', () => {
    page.navigateTo();
    expect(page.getItemText()).toEqual('dave');
  });

  it('should be able to add to the todo list', () => {
    page.navigateTo();
    page.sendText('benji', 'md-input input')
    page.clickButtonText('Add')
    expect(page.getItemTextByText('benji')).toEqual('benji')
  });

  it('should be able to remove the last Item from the todo list', () => {
    page.navigateTo();
    page.clickButtonText('remove')
    expect(page.isItemPresent('benji')).toEqual(false)
  });
});
