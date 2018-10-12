import { Component, OnInit, Input } from '@angular/core';
import Item from '../../../../core/models/item.class';

@Component({
  selector: 'hs-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: Item

  constructor() {}

  ngOnInit() {

  }

}
