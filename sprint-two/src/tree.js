var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // Add tree methods to newTree
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create a new node by using tree constructor
  var newChild = Tree(value);
  // Push the newly created tree to the parent tree's children property (use 'this' to create reference)
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  //flag
  var exists = false;

  //check referenced tree to see if tree's value is equal to target (use 'this')
  if (this.value === target) {
    return true;
  }

  //check if referenced tree's children property has children (check length of children property of tree)
  if (this.children.length > 0) {
    // if true, recurse over elements of tree's children (use return recursion - no container)
    for (var i = 0; i < this.children.length; i++) {
      if (!exists) {
        exists = this.children[i].contains(target);
      }
    }  
  }

  //return false  
  return exists;

};



/*
 * Complexity: What is the time complexity of the above functions?
 // 0(n) constant - work will be the same regardless of the size of the inputs
 // 0(logn) - work will increase based on the size of the input, but don't need to potentially look at every member of the collection
 // 0(n) - work will be performed on every member of the collection
 // 0(n^2) - work will potentially be performed on each member of the collection twice
*/

// methods and time complexity: 

// treeMethods.addChild() : 0(1) constant because we are adding an element to the end of an array. Don't need to reassign entire array.
// treeMthods.contains() 0(n) because we could potentially do work on all the items of a collection. (if the most distant node from this.tree 
// has the target we're looking for or none of the nodes have the target.)

