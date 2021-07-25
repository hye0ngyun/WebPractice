var 이름 = 'kim';
이름 = 123;
function 함수(x) {
    return x * 2;
}
var john = [123, true];
// Object에 타입지정해야할 속성이 너무 많으면
{
    var john_1 = { name: 'kim' };
}
{
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
}
