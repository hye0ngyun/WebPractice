// {
//   let value = 'outer'
//   if (true) {
//     console.log(value); // ReferenceError: Cannot access 'value' before initialization
//     let value = 'inner';
//   }
// }
{
  var value = 'outer'
  if (true) {
    console.log(value); // outer
    var value = 'inner';
  }
}