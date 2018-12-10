import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: './users.component.html',
})
export class userComponent {
  users = [
    {
     id:1,
     name:"Ram",
     location:"chennai",
     selected:false
    },
    {
     id:2,
     name:"Krish",
     location:"coimbatore",
     selected:false
    },
    {
     id:3,
     name:"Karna",
     location:"madurai",
     selected:false
    }
];
@Output() itemClicked : EventEmitter<string> = new EventEmitter<string>();
onClick(item){
  for(let i=0;i<this.users.length;i++)
  {
    this.users[i].selected = false;
  }
  this.users[item.id-1].selected = true;
  this.itemClicked.emit(item.name);
}
}
