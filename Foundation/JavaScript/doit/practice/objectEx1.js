var toyRobot = {
    productId:  '123-12',
    name: 'Robot',
    price: '25,000',
    madeIn: 'korea',
    quantity: 10,
    showStock: function(){
        document.querySelector('#display').innerHTML = '<p>' + this.name + ' 제품은 ' + this.quantity + '개 남아있습니다.' + '</p>';
    }
};
// document.write(toyRobot.name);
toyRobot.showStock();
// document.write(toyRobot.name);