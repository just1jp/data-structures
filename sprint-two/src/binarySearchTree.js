var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  // Create new binarySearchTree with value passed
  var newTree = BinarySearchTree(value);

  var findEnd = function(tree) {
    //check if newTree.value is less than this.value
    if (newTree.value < tree.value) {
      //if true check if tree.left is true (not null) 
      if (tree.left) {
        //if tree.left is true use recursion with this.left to repeat
        findEnd(tree.left);
      } else {
        //if this.left is false
          //set this.left to newTree
        return tree.left = newTree; 
          //break recursion
      } 
    } else {
      //if false check if this.right is true
      if (tree.right) {
        //if this.right is true use recursion with this.right to repeat
        findEnd(tree.right);
      } else {
        //if thus.right is false   
          //set this.right to newTree
        return tree.right = newTree;
          //break recursion
      }
    }
  };
  findEnd(this);
};

BinarySearchTree.prototype.contains = function(value, tree) {
  tree = tree || this;

  // If this.value equals value...
  if (tree.value === value) {
    return true;
    // Return true
  }
  // If value is less than this.value...
  if (value < tree.value) {  
    if (!tree.left) {
      return false;
    }
    // Recurse over this.left
    return tree.left.contains(value, tree.left);
  } else {
  // Else recurse over this.right
    if (!tree.right) {
      return false;
    }
    return tree.right.contains(value, tree.right); 
  }
  // Return false
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  // iterate over tree
    //call func on each value of tree.

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
