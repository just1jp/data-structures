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
  } else {
  // Call findNode on node.next
    return this.findNode(value, node.next);
  }
  // Otherwise return false
  return false;
};

DoublyLinkedList.prototype.insertBefore = function(before, value) {
// Make sure the indicated before node exists.
// create a node with the value passed in to Node. set value property to value passed in
// make new node's previous property point to passed in node's previous property
// make passed in node's previous reference's next property point to new node
// make passed in node's previous property point to new node
// make new node's next property point to passed in node
// if indeicated node is head, invoke .addToHead(new node);
};

DoublyLinkedList.prototype.insertAfter = function(after, value) {
};
//.insertAfter
// Make sure the indicated after node exists
// create a node with the value passed in to Node. set value property to value passed in
// make new node's next property point to passed in node's next property
// make passed in node's next property's previous property point to new node.
// point passed in node's next property to new node
// point new node's previous property point to passed in node. 
// if passed in node is tail invoke .insertAtEnd(new node)

DoublyLinkedList.prototype.addToHead = function(value) {
};
//.addToHead
 //create a node with the value passed in to Node. set value property to value passed in
 //point next to the head
 //point the head's previous to the newly created node
 //redirect head to newly created node.

DoublyLinkedList.prototype.removeTail = function() {
};
//.removeTail
// Save the tail value property in a variable
// Point tail to tail's previous node
// Change the new Tail's next property to null
// Return tail's value variable

DoublyLinkedList.prototype.contains = function(value) {
};
//.contains
// Does current node value match target
// If value equals target, return true
// Otherwise, check if the node's next property is valid
// If valid, pass in the nodes's next property into the function
// Return false

















