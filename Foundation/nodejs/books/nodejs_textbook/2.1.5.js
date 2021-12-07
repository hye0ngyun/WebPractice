{
  var candyMachine = {
    status: {
      name: 'node', 
      count: 5,
    }, 
    getCandy: function() {
      this.status.count--;
      return this.status.count;
    }
  }

  var getCandy = candyMachine.getCandy;
  var count = candyMachine.status.count;

  console.log(getCandy, count);
}
{
  const candyMachine = {
    status: {
      name: 'node', 
      count: 5,
    }, 
    getCandy: function() {
      this.status.count--;
      return this.status.count;
    }
  }

  const {getCandy, status: {count} } = candyMachine;

  console.log(getCandy, count);
}

{
  var array = ['nodejs', {}, 10, true];
  var node = array[0];
  var obj = array[1];
  var bool = array[3];

  console.log(node, obj, bool);
}
{
  // 구조분해 할당
  // python의 튜플 언패킹과 유사
  const array = ['nodejs', {}, 10, true];
  const [node, obj, , bool] =array;
  console.log(node, obj, bool);
}

{
  // 클래스
  var Human = function(type) {
    this.type = type || 'human';
  };

  Human.isHuman = function(human) {
    return human instanceof Human;
  }

  Human.prototype.breath = function() {
    console.log('h-a-a-a-m');
  };

  var Zero = function(type, firstName, lastName) {
      Human.apply(this, arguments);
      this.firstName = firstName;
      this.lastName = lastName;
  };

  Zero.prototype = Object.create(Human.prototype);
  Zero.prototype.constructor = Zero; // 상속하는 부분
  Zero.prototype.sayName = function() {
    console.log(this.firstName + ' ' + this.lastName);
  };

  var oldZero = new Zero('human', 'Zero', 'Cho');
  oldZero.sayName();
  oldZero.breath();

  console.log(Human.isHuman(oldZero)); // true
}
{
  // apply ex1
  const number = [5, 6, 2, 3, 7];

  const max = Math.max.apply(null, number);

  console.log(max);

  const min = Math.min(1,2,3); // 1
  const min2 = Math.min([1,2,3]); // NaN
  const min3 = Math.min(...number); // 2 - spread syntax

  console.log(min);
  console.log(min2);
  console.log(min3);
}
{
  // apply ex2
  function add(x, y) {
    this.val = x + y;
    console.log(this.val);
  }
  
  let obj = { val: 0, arr: [2, 8] };

  add(2, 8); // 10
  add.apply(obj, [2, 8]); // 10
  add.apply(obj, obj.arr); // 10
  console.log(obj); // { val: 10, arr: [ 2, 8 ] }

  add.call(obj, [2, 8]); // 2,8undefined
  add.call(obj, 2, 8); // 10

  let boundFn = add.bind(obj, 5, 8);

  boundFn();
  console.log(obj); // { val: 13, arr: [ 2, 8 ] }
}