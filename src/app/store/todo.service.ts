import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class TodoStore {
   private _list: BehaviorSubject<Array<Object>> = new BehaviorSubject([{text: 'dave'}])
   public list: Observable<Array<Object>> = this._list.asObservable().scan((arr, next) => {
       if (next[0]['type'] === 'remove') {
         return [...arr.splice(0, arr.length - 1)]
       } else {
         return [...arr, ...next]
       } 
    })
   public add(text: string) {
       this._list.next([{type: 'add', text}])
   }
   public remove() {
     this._list.next([{type: 'remove'}])
   }
}