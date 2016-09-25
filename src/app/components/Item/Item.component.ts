import {Component, Input} from '@angular/core';

@Component({
  selector: 'Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css']
})
export class Item {
  @Input() text = '';
}
