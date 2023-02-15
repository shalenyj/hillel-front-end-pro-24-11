class User {
  constructor(name){
    this.name = name;
  }
  signIn(){
    console.log(`${this.name} logged in`)
  }
  logout(){
    console.log(`${this.name} logged out`)
  }
}


class Admin extends User{
  usersCreatedByAdmin = new Set();
  constructor(name){
    super(name);
  }
  createNewUser(user){
    this.usersCreatedByAdmin.add(user)
  };
  deleteUser(user){
    this.usersCreatedByAdmin.delete(user) 
  }
}

const john = new Admin('John')
if(john instanceof Admin){
  console.log('yes')
}
// if(john instanceof User){
  //   console.log('yes')
// }

// const alex = new User('Alex');
// if(alex instanceof Admin){
  //   console.log('yes')
  // }
  
//TODO: SuperAdmin Class