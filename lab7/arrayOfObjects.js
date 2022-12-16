const greeting = function(user){
  console.log(`Hello, ${user.name} from ${user.city}`);
};

const users = [
  {
    name: 'Ivan',
    city: 'Lviv'
  },
  {
    name: 'Olha',
    city: 'Dnipro'
  },
  {
    name: 'Inna',
    city: 'Paris'
  }
];

for(let i=0;i<users.length;i++){
  const user = users[i];
  greeting(user);
}