import {Component} from '@angular/core'
import {TodoStore} from '../../store/todo.service'

@Component({
  selector: 'item-list',
  templateUrl: './ItemList.component.html',
})
export class ItemList {
  text = ''
  constructor(private todoStore: TodoStore) {}
  updateText(e) {
    this.text = e.target.value
  }
}
