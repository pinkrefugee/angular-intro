interface IUser {
  id: any;
  firstName: any;
  lastName: any;
}

class User implements IUser {
  id: any;
  firstName: any;
  lastName: any;

  constructor(userId: any, userFirstName: any, userLastName: any) {
    this.id = userId;
    this.firstName = userFirstName;
    this.lastName = userLastName;
  }
}
