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
  // python의 튜플 언패킹과 유사
  const array = ['nodejs', {}, 10, true];
  const [node, obj, , bool] =array;
  console.log(node, obj, bool);
}