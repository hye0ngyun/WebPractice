// 프로토타입 기반 상속 이해하기
{
  function Storage() {
    this.dataStore = {};
  }
  Storage.prototype.put = function (key, data) {
    this.dataStore[key] = data;
  }
  Storage.prototype.getData = function (key) {
    return this.dataStore[key];
  }

  const productStorage = new Storage();
  console.log(productStorage);
  productStorage.put('id001', { name: '키보드', price: 2000 });
  console.log(productStorage.getData('id001'));
  console.log(productStorage);

  function RemovableStorage() {
    Storage.call(this);
  }
  RemovableStorage.prototype = Object.create(Storage.prototype);
  RemovableStorage.prototype.removeAll = function () {
    this.dataStore = {};
  }
  const productStorage2 = new RemovableStorage();
  productStorage2.put('id002', { name: '마우스', price: 4000 });
  console.log(productStorage2);
  productStorage2.removeAll();
  console.log(productStorage2);

  const item2 = productStorage2.getData('id002');
  console.log(item2); // undefined
}