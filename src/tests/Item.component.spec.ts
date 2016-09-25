/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Item } from '../app/components/Item/Item.component';

describe('Item comonent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Item
      ],
    })
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Item)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should render li element with an empty string`, async(() => {
    const fixture = TestBed.createComponent(Item)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('li').textContent).toEqual('')
  }))
});
