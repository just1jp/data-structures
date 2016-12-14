var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.sizeVal = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.sizeVal] = value;  
    this.sizeVal++;
  },
  pop: function() {
    if (this.sizeVal > 0) {
      this.sizeVal--;
      var removed = this.storage[this.sizeVal];
      delete this.storage[this.sizeVal];     
    }
    return removed;  
  },
  size: function() {
    return this.sizeVal;  
  }

};


