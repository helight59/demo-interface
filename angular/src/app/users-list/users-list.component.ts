import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector   : 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls  : ['./users-list.component.styl']
})
export class UsersListComponent implements OnInit {
  users: any;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    setTimeout(() => this.users = this.usersService.getUsers(), 1000);
  }


  removeFromArray(array, value) {
    let idx = array.indexOf(value);
    if (idx != -1) {
      return array.splice(idx, 1);
    }
    return false;
  }
}
