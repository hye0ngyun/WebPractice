{
  const obj = {
    foo: function() {
      console.log(this);
    }, 
    bar: () => {
      console.log(this);
    },
    show: () => {
      this.foo
      this.bar
    }
  }

  obj.bar();
}