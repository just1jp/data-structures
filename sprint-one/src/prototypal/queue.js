var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.sizeVal = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.sizeVal] = value;
    this.sizeVal++;
  },
  dequeue: function() {
    var giveVal = this.storage[0];
    if (this.sizeVal > 0) {
      this.sizeVal--;
    }
    for (var key in this.storage) {
      this.storage[this.sizeVal - 1] = this.storage[this.sizeVal];
    }
    delete this.storage[this.sizeVal];
    return giveVal;
  },
  size: function() {
    return this.sizeVal;
  }
};

