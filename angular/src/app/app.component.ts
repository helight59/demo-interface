import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    console.log(this.usersService.user.name)
  }
}
