import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  users = [
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78',
      admin      : true
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78',
      manager    : true
    },
    {
      name       : 'Bob Smith1',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith2',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith3',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78',
      superman   : true
    },
    {
      name       : 'Bob Smith4',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith5',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    }, {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
    {
      name       : 'Bob Smith',
      phone      : '4879 4578 12',
      email      : 'vanillajs@mail.com',
      driver     : 'Joe West',
      phoneDriver: '84842-1234-78'
    },
  ];

  user = {
    name       : 'Nick',
    phone      : '4879 4578 12',
    email      : 'vanillajs@mail.com',
    driver     : 'Joe West',
    phoneDriver: '84842-1234-78',
    admin      : true
  };

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('http://ppswtest.azurewebsites.net/api/values')
               .map(res => res.json());
  }
}
