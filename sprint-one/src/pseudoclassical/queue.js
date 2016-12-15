var Queue = function() {
  this.sizeVal = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal++;
};

Queue.prototype.dequeue = function() {
  if (this.sizeVal > 0) {
    this.sizeVal--;
  }
  var giveVal = this.storage[0];
  for (var key in this.storage) {
    this.storage[this.sizeVal - 1] = this.storage[this.sizeVal];
  }
  delete this.storage[this.sizeVal];
  return giveVal;
};

Queue.prototype.size = function() {
  return this.sizeVal;
};