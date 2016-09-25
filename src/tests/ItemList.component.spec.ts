/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ItemList } from '../app/components/ItemList/ItemList.component';
import { Item } from '../app/components/Item/Item.component';
import { TodoStore } from '../app/store/todo.service';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

describe('ItemList comonent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemList,
        Item
      ],
      imports: [
        MdButtonModule,
        MdInputModule
      ],
      providers: [
        TodoStore
      ]
    })
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ItemList);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }))

  it(`should render li element with a single item`, async(() => {
    const fixture = TestBed.createComponent(ItemList);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toEqual('dave');
  }))
});