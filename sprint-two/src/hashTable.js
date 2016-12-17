

var HashTable = function() {
  this._limit = 8; //max
  this._storage = LimitedArray(this._limit); //
};

HashTable.prototype.insert = function(k, v) {
  // Pass the key into the hasher function
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Access the bucket at this index
  var bucket = this._storage.get(index) || [];
  
  // Iterate over the bucket
      // If bucket already has a tuplet with the key, don't push, replace the value at this tuple with the new value
      // Push into the bucket the new key/val pair
  var overwrite = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      overwrite = true;
    }
  }
  if (!overwrite) {
    bucket.push([k, v]);
  }

  // Set bucket as the new collection of tuplets
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Access the bucket
  var bucket = this._storage.get(index);

  if (!bucket) {
    return undefined;
  }
  // Iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
  // Check if current tuple has key that matches 'k'
    if (bucket[i][0] === k) {
    // If true, return value at that tuple
      return bucket[i][1];
    }
  }
  // If don't find key, return false
  return false;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieve bucket at index
  //iterate over tuples and filter out tuple with k
  var filtered = this._storage.get(index).filter(function(tuple) {
    return tuple[0] !== k;
  });
  if (filtered.length === 0) {
    filtered = undefined;
  } 
  this._storage.set(index, filtered);
};



/*
 * Complexity: What is the time complexity of the above functions?

  .remove - Worse case Linear O(n), Best case Constant O(1)

  .retrieve - Worse case Linear O(n), Best case Constant O(1)

  .insert - Worse case Linear O(n), Best case Constant O(1)

 */




























