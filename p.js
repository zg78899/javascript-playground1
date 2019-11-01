// // function getCount8() {
// //   for()


// // console.log(getCount8()); 

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//   return 2 * Math.PI * this.radius ** 2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// // console.log(circle1.getArea());
// // console.log(circle2.getArea());

// // console.log(Circle.prototype === circle1.__proto__);

// console.log(Object.getPrototypeOf(circle1)===Circle.prototype);
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  setTimeout(function() {
    console.log('func2');
  }, 0);

  func3();
}

function func3() {
  console.log('func3');
}

func1();