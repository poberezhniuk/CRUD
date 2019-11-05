import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./UserData.js";

export class UserDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 0,
        userName: "Jjdoe777",
        name: "John",
        surname: "Doe",
        email: "jdoe@gmail.com",
        role: "ADMIN",
        registrationDate: "3056-08-02T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 1,
        userName: "alex333",
        name: "Alex",
        surname: "Koe",
        email: "alex@gmail.com",
        role: "MODERATOR",
        registrationDate: "2008-04-09T02:30:00.000+00:00",
        enabled: false
      },
      {
        id: 2,
        userName: "k0lyan",
        name: "Nikolai",
        surname: "Boe",
        email: "nikolai@gmail.com",
        role: "USER",
        registrationDate: "2019-09-03T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 3,
        userName: "Jjdoe777",
        name: "Mike",
        surname: "Voe",
        email: "jdoe@gmail.com",
        role: "ADMIN",
        registrationDate: "2011-03-03T02:30:00.000+00:00",
        enabled: false
      },
      {
        id: 4,
        userName: "alex333",
        name: "Phil",
        surname: "Roe",
        email: "alex@gmail.com",
        role: "USER",
        registrationDate: "1993-12-01T02:30:00.000+00:00",
        enabled: false
      },
      {
        id: 5,
        userName: "k0lyan",
        name: "Chen",
        surname: "Toe",
        email: "nikolai@gmail.com",
        role: "MODERATOR",
        registrationDate: "1996-01-01T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 6,
        userName: "Jjdoe777",
        name: "John",
        surname: "Doe",
        email: "jdoe@gmail.com",
        role: "ADMIN",
        registrationDate: "1990-01-04T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 7,
        userName: "alex333",
        name: "Alex",
        surname: "Koe",
        email: "alex@gmail.com",
        role: "MODERATOR",
        registrationDate: "1970-11-11T02:30:00.000+00:00",
        enabled: false
      },
      {
        id: 8,
        userName: "k0lyan",
        name: "Nikolai",
        surname: "Boe",
        email: "nikolai@gmail.com",
        role: "USER",
        registrationDate: "1972-11-10T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 9,
        userName: "Jjdoe777",
        name: "Mike",
        surname: "Voe",
        email: "jdoe@gmail.com",
        role: "ADMIN",
        registrationDate: "1976-06-12T02:30:00.000+00:00",
        enabled: false
      },
      {
        id: 10,
        userName: "alex333",
        name: "Phil",
        surname: "Roe",
        email: "alex@gmail.com",
        role: "USER",
        registrationDate: "1974-12-05T02:30:00.000+00:00",
        enabled: true
      },
      {
        id: 11,
        userName: "k0lyan",
        name: "Chen",
        surname: "Toe",
        email: "nikolai@gmail.com",
        role: "MODERATOR",
        registrationDate: "1973-05-07T02:30:00.000+00:00",
        enabled: true
      }
    ];

    return { users };
  }
}
