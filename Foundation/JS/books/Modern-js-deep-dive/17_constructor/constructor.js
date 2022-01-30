{
  // 빈 객체 생성
  const person = new Object();
  console.log(person); // {}

  // 프로퍼티 추가
  person.name = 'Lee';
  person.sayHello = function() {
    console.log('Hi! My name is ' + this.name);
  };
  
  console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
  person.sayHello(); // Hi! My name is Lee

  // Object 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌드인 생성자 함수가 있다.
  // 모두 typeof로 타입을 체크할 경우 object로 나온다.
}
{
  // 객체 리터럴에 의한 객체 생성 방식의 문제점
  const circle1 = {
    radius: 5, 
    getDiameter() {
      return 2 * this.radius;
    }
  };

  console.log(circle1.getDiameter()); // 10

  const circle2 = {
    radius: 10, 
    getDiameter() {
      return 2 * this.radius;
    }
  };

  console.log(circle2.getDiameter()); // 20
}
{
  // 생성자 함수에 의한 객체 생성 방식의 장점
  // 생성자 함수
  function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function() {
      console.log(this);
      return 2 * this.radius;
      
    };
  }

  // 인스턴스의 생성
  const circle1 = new Circle(5);
  const circle2 = new Circle(10);

  console.log(circle1.getDiameter());
  console.log(circle2.getDiameter());

  const circle3 = {
    radius: 15,
    getDiameter: function() {
      console.log(this);
      return 2 * this.radius;
    }
  }

  console.log(circle3.getDiameter());

  function getDiameter(radius) {
    console.log(this);
    return 2 * radius;
  }

  console.log(getDiameter(20));
}
{
  // 생성자 함수의 인스턴슨스 생성 과정

  
  function Circle(radius) {
    // 1. 인스턴스 생성과 this 바인딩 - 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. 인스턴스 초기화 - this에 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
      console.log(this);
      return 2 * this.radius;
    };
    console.log(this); // Circle { radius: undefined, getDiameter: [Function (anonymous)] }
    // 3. 인스턴스 반환 - 암묵적으로 this를 반환한다.
    // return this;
  }

  const circle1 = new Circle(1);
  circle1.getDiameter(); // Circle { radius: 1, getDiameter: [Function (anonymous)] }
}
{
  function Circle(radius) {
    // 1. 인스턴스 생성과 this 바인딩 - 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. 인스턴스 초기화 - this에 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
      console.log(this);
      return 2 * this.radius;
    };
    console.log(this); // Circle { radius: undefined, getDiameter: [Function (anonymous)] }
    // 3. 인스턴스 반환 - 암묵적으로 this를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    // return this;
    return {};
  }

  const circle1 = new Circle(1);
  console.log(circle1); // {}
}
{
  function Circle(radius) {
    // 1. 인스턴스 생성과 this 바인딩 - 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. 인스턴스 초기화 - this에 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
      console.log(this);
      return 2 * this.radius;
    };
    console.log(this); // Circle { radius: undefined, getDiameter: [Function (anonymous)] }
    // 3. 인스턴스 반환 - 암묵적으로 this를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    // return this;
    return 100;
  }

  const circle1 = new Circle(1);
  console.log(circle1); // Circle { radius: 1, getDiameter: [Function (anonymous)] }
}