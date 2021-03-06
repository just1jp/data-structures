var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      var giveValue = storage[size - 1];
      delete storage[size - 1];
      size--;
    }
    return giveValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
