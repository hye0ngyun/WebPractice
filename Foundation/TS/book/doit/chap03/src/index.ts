interface IPerson2 {
  name: string;
  age: number;
  ect?: boolean;
}

let person2: IPerson2 = {
  name: "shin",
  age: 25,
};

let ai: {
  name: string;
  age: number;
  ect?: boolean;
} = { name: "Jack", age: 32 };

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(me.etc); // 값이 없는 경우 undefined
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}
printMe(ai);
console.log(!!undefined); // false
console.log(undefined ? "true" : "false"); // false
