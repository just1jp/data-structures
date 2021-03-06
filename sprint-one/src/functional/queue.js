var Queue = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
    var temp = storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];  
    }
    delete storage[size + 1];
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
