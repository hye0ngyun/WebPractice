// 클래스 상속 이해하기
{
  class Chart {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    drawLine() {
      console.log('draw line');
    }
  }

  class BarChart extends Chart {
    constructor(width, heigth, name = 'basic') {
      super(width, heigth)
      // 상속 후 BarChart에만 존재하는 속성
      this.name = name;
    }

    draw() {
      this.drawLine();
      console.log(`draw ${this.width} X ${this.height} ${this.name} barChart`);;
    }
  }

  const chart1 = new Chart(200, 200);
  chart1.drawLine();
  const barChart1 = new BarChart(100, 100, 'bar1');
  const barChart2 = new BarChart(100, 100);
  console.log('b1');
  barChart1.draw();
  console.log('b2');
  barChart2.draw();
  barChart2.drawLine();
}

// ES6문법인 클래스, extends 상속은 하위 버전의 코드로 변경이 가능하고 실제로 같은 기능을 하는데,
// 클래스 -> 생성자함수
// extends 상속 -> prototype 상속
// 코드로 변경될 수 있다.
// 그리고 자바스크립트는 여전히 프로토타입 기반 상속인것을 기억해야 한다.