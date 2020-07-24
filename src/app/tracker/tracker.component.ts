import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../items';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})

export class TrackerComponent implements OnInit {

  newItem: Item = new Item();

  items = ITEMS;

  total: number;

  constructor() { }


  deleteItem(del) {
    const rm: number = this.items.indexOf(del);
    if (rm !== -1) {
      this.items.splice(rm, 1);
    }

  }

  

  addItem() {
    const prev = this.items.length - 1;
    const p = this.items[prev];
    this.items.push(this.newItem);
    this.newItem = new Item();
  }

showTotal() {
 let total = 0;

 for (let i = 0; i < this.items.length; i++) {
   if (this.items[i].amount) {
     total += +this.items[i].amount; 
     this.total = total;
   }
 }
 return total;
}



  ngOnInit() {

  }

}
