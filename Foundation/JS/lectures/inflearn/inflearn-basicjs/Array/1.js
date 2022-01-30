{
  let arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
  function getRandomValueFromArray(arr) {
    let index = Math.floor(arr.length * Math.random());
    let result = arr[index]
    return result;
  }
  // console.log(getRandomValueFromArray(arr));

  // console.log(parseInt(Math.random() * 100));
}
{
  let arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
  Array.prototype.random = function() {
    let index = Math.floor(this.length * Math.random());
    console.log(this);
    return this[index];
  }

  console.log(arr.random());
  console.log(Array.prototype.random());

}