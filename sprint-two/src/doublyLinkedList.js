var DoublyLinkedList = function(value) {
  this.head = null;
  this.tail = null;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

DoublyLinkedList.prototype.insertAtEnd = function(value) {
 //adding first node (.addToTail)
 
 //create a node with the value passed in to Node. set value property to value passed in
  var node = new Node(value);
 
 //if list is empty
  if (!this.head) {
 // have head make a reference to new node
 // have tail make a reference to new node
    this.head = node;
    this.tail = node;
  } else {
 // list already has a node
 // have new node's previous property make a reference to the tail
    node.previous = this.tail;
    this.tail.next = node;
 // reassign tail to newly created node
    this.tail = node;
  }

};

DoublyLinkedList.prototype.findNode = function(value, node) {
  // Start with this.head
  node = node || this.head;
  // If passed in node is equal to value...
  if (node.value === value) {
  // ...return node
    return node;
  } else if (node.next) {
  // Call findNode on node.next
    return this.findNode(value, node.next);
  }
  // Otherwise return false
  return false;
};

DoublyLinkedList.prototype.insertBefore = function(before, value) {
// Make sure the indicated before node exists.
  before = this.findNode(before);
  if (!before) {
    throw new Error('Before node does not exist!');
  }
  // create a node with the value passed in to Node. set value property to value passed in
  var node = new Node(value);
  // if indeicated node is head, invoke .addToHead(new node);
  if (this.head === before) {
    this.addToHead(value);
  } else {
    // make new node's previous property point to passed in node's previous property
    node.previous = before.prevous;
    // make passed in node's previous reference's next property point to new node
    before.previous.next = node;
    // make passed in node's previous property point to new node
    before.previous = node;
    // make new node's next property point to passed in node
    node.next = before;
  }
};

DoublyLinkedList.prototype.insertAfter = function(after, value) {
  //.insertAfter
  // Make sure the indicated after node exists
  after = this.findNode(after);
  if (!after) {
    throw new Error('After does not appear in the list');
  } 
  // create a node with the value passed in to Node. set value property to value passed in
  var node = new Node(value);
  // if passed in node is tail invoke .insertAtEnd(new node)
  if (this.tail === after) {
    this.insertAtEnd(value);
  } else {  
  // make new node's next property point to passed in node's next property
    node.next = after.next;
  // make passed in node's next property's previous property point to new node.
    after.next.previous = node;
  // point passed in node's next property to new node
    after.next = node;
  // point new node's previous property point to passed in node.
    node.previous = after;
  } 
};

DoublyLinkedList.prototype.addToHead = function(value) {
  //create a node with the value passed in to Node. set value property to value passed in
  var node = new Node(value);
  //point next to the head
  node.next = this.head;
  //point the head's previous to the newly created node
  this.head.previous = node;
  //redirect head to newly created node.
  this.head = node;
};


DoublyLinkedList.prototype.removeTail = function() {
//.removeTail
// Save the tail value property in a variable
  var oldTail = this.tail;
// Point tail to tail's previous node
  this.tail = this.tail.previous;
// Change the new Tail's next property to null
  this.tail.next = null;
// Return tail's value variable
  return oldTail.value;
};

DoublyLinkedList.prototype.contains = function(value, node) {
  node = node || this.head;
  // Does current node value match target
  if (node.value === value) {
    // If value equals target, return true
    return true;
  } else if (node.next) {
    // Otherwise, check if the node's next property is valid
    // If valid, pass in the nodes's next property into the function
    return this.contains(value, node.next);  
  }
  // Return false
  return false;
};


















