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

BinarySearchTree.prototype.contains = function(value) {

  // check if this.value === value
    //if true return true
    //if false check if this.value < value
      //if true repeat process on this.left.value
      //if false repeat process on this.right.value
  //return false

};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  // iterate over tree
    //call func on each value of tree.

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
