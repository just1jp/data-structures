var Stack = function() {
  this.sizeVal = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal++;
};

Stack.prototype.pop = function(value) {
  if (this.sizeVal > 0) {
    this.sizeVal--;
  }
  var giveVal = this.storage[this.sizeVal];
  delete this.storage[this.sizeVal];
  return giveVal; 
};

Stack.prototype.size = function(value) {
  return this.sizeVal;      
};

