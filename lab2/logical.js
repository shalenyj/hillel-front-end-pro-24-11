// Logical AND operator
true  && true;  // true
true  && false; // false
false && true;  // false
false && false; // false

// Logical OR operator
true  || true;  // true
true  || false; // true
false || true;  // true
false || false; // false


!false; // true
!true; // false
!!false; // false
!!true; //true

!('Hello'); // false
!(0); //true

!!('Hello'); // true
Boolean('Hello'); // true

const number  = 5;
console.log(number < 6 && number > 4); // true
console.log(number < 6 || number > 4); // true
console.log(number < 7 && number > 5); //false
console.log(number < 7 || number > 5); //true