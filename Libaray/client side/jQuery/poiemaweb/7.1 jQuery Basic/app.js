
// #.3 jQuery 함수
// jQuery 객체를 생성하기 위해 jQuery함수를 사용한다.
{
  jQuery()
  // jQuery()축약형
  $()
}

// #3.1 CSS스타일의 selector를 인수로 전달받을 때
// h1요소 선택하기
{
  jQuery('h1');
  // Query() 함수의 인수로 CSS의 태그 선택자를 지정하였다. 이때 jQuery() 함수는 선택자에 의해 선택된 요소들을 jQuery 객체를 반환한다. jQuery() 함수를 축약형(Shorthand)으로 기술하면 다음과 같다.
  $('h1');
  // jQuery() 함수에 의해 생성된 객체를 Matched set 또는 jQuery selection이라 한다. 이 객체에는 선택한 요소에 대한 참조가 저장되어 있는데 선택된 요소는 1개일수도, 여러 개일 수도 있다. jQuery가 제공하는 프로퍼티와 메소드는 prototype 객체를 통해 접근할 수 있다.

  // text() 메소드는 jQuery 객체가 제공하는 메소드로 해당 요소(Matched set)의 텍스트를 반환한다. 해당 요소의 텍스트를 변경하는 방법은 아래와 같다.
  $('h1').text();
  $('h1').text('Hello');
}

// #3.2 HTML을 인수로 전달받을 때
{
  // HTML 문자열을 인수로 받으면 새로운 HTML 요소를 생성한다.
  $('<p id="test">My <em>new</em> text</p>').appendTo('body');
  // 문서에 이미 존재하는 selector를 선택해서 appendTo를하면 ctrl + x로 잘라내고 붙인 것 처럼 원래 위치에서는 삭제되고 새로운 위치에 붙여진다.
  $('h1').appendTo('#test');
}

// #3.3 JavaScript 객체를 인수로 전달받을 때
{
  // JavaScript 객체(plain object, DOM element, array 등)를 인수로 받으면 그 객체를 jQuery 객체로 wrap한 객체를 반환한다.
  $('div.foo').click(function() {
    $(this).slideUp();
  });
  // Define a plain object
  var foo = { foo: 'bar', hello: 'world' };

  // Pass it to the jQuery function
  var $foo = $(foo);

  // Accessing property values
  var test1 = $foo.prop('foo');
  console.log(test1); // bar

  // Setting property values
  $foo.prop('foo', 'foobar');

  // Accessing property values
  var test2 = $foo.prop('foo');
  console.log(test2); // foobar
}

// #3.4 콜백함수를 인수로 전달받을 때
/*
app.js는 jQuery를 사용하므로 app.js 로드 이전에 jQuery가 로드되어야 한다. jQuery는 body 요소의 마지막 부분 또는 head 요소 내에서 로드하는 것이 일반적인데 이것은 DOM이 완전히 생성되기 이전에 자바스크립트가 로드될 가능성을 내포한다. DOM이 완전히 생성되기 이전에 자바스크립트가 실행되면 예기치 못한 현상이 발생될 수 있다.

따라서 안전하게 DOM을 조작하기 위해서는 DOM이 완전히 로드된 후 자바스크립트가 실행되는 것이 바람직한데 이를 위해 이벤트 처리가 필요하다.
*/
{
  jQuery(document).ready(function () {
    // Do something...
  });
  
  // Shorthand for jQuery(document).ready()
  $(document).ready(function () {
    // Do something...
  });
  
  // Shorthand for $(document).ready()
  $(function () {
    // Do something...
  });
  // 위 코드는 DOM이 완전히 로드되기 전까지 대기하다가 로드가 완료되면 매개변수로 전달된 콜백함수가 실행된다. app.js에 이것을 반영하면 아래와 같다.
  $(function() {
    $('h1').text('Hello!');
  });
  // 부가적으로 위 받ㅇ법은 function-level scope를 지원하는 자바스크립트 특성에 부합한다. 즉, 전역 변수의 생성이 억제되어 스크립트 간의 전역 변수 이름의 충돌을 미연에 방지할 수 있다.
}

// #4. Selector
// jQuery는 CSS 스타일의 Selector를 이용하여 요소를 선택할 수 있다. 이것은 자바스크립트 DOM API보다 쉽고 강력하며 유연하다.





