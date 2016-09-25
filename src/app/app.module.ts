import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MdButtonModule } from '@angular2-material/button'
import { MdCardModule } from '@angular2-material/card'
import { MdInputModule } from '@angular2-material/input'
import { HttpModule } from '@angular/http'

import { TodoStore } from './store/todo.service'

import { Item } from './components/Item/Item.component'
import { ItemList } from './components/ItemList/ItemList.component'

@NgModule({
  declarations: [
    ItemList,
    Item
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [TodoStore],
  bootstrap: [ItemList]
})
export class AppModule { }
