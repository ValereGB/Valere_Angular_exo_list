import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filter: 'tout' | 'en cours' | 'fini' = 'tout';
  allItems = [
    { description: 'Manger', done: true },
    { description: 'Dormir', done: false },
    { description: 'Ce laver', done: false },
    { description: 'Jouer', done: false },
  ];


  get items() {
    if (this.filter === 'tout') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'fini' ? item.done : !item.done);
  }

  addItem(description: any) {
    this.allItems.unshift({
      description,
      done: false
    });

  }

  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }


}