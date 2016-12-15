var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create node
    var node = new Node(value);
    // if list has no nodes
    if (!list.tail) {
      // point head to this node
      list.head = node;
      // point tail to this node
      list.tail = node;
    } else {
    // if list has existing node
      // assign the next value of the node that tail is pointing to, to the new node
      list.tail.next = node;
      // reassign the tail to this new node
      list.tail = node;
    }    
  };

  list.removeHead = function() {
    // look at where head is pointing to and save into var
    var head = list.head.value;
    // reassign head to the node where it's next was pointing to
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    // check head node to see if the node's value is target
    if (node.value === target) {
      return true;
    }
    // check if head has links via next property
    if (node.next) {
      // recurse over each link
      return list.contains(target, node.next);
    }
    // return false if doesn't exist
    return false;

    // USING RECURSION WITHOUT 'RETURN' - MUST USE A 'CONTAINER' IE VAR FOUND.
    // node = node || list.head;
    // var found = false;
    // // check head node to see if the node's value is target
    // if (node.value === target) {
    //   return true;
    // }
    // // check if head has links via next property
    // if (node.next) {
    //   // recurse over each link
    //   found = list.contains(target, node.next);
    // }
    // // return false if doesn't exist
    // return found;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

