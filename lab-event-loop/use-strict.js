"use strict";

someVariable = 17;

const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9;

const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5;

let x = 5;
delete x;

function y(p1, p2) {};
delete y;  