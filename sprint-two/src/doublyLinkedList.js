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
//.insertAtEnd
 //adding first node (.addToTail)
 //create a node with the value passed in to Node. set value property to value passed in
 // have head make a reference to new node
 // have tail make a reference to new node

 //.insertAtEnd
 //create a node with the value passed in to Node. set value property to value passed in
 // have the tail.next point to new node
 // have new node's previous property make a reference to the tail
 // reassign tail to newly created node

};


//.insertBefore
// Make sure the indicated before node exists.
// create a node with the value passed in to Node. set value property to value passed in
// make new node's previous property point to passed in node's previous property
// make passed in node's previous reference's next property point to new node
// make passed in node's previous property point to new node
// make new node's next property point to passed in node
// if indeicated node is head, invoke .addToHead(new node);

//.insertAfter
// Make sure the indicated after node exists
// create a node with the value passed in to Node. set value property to value passed in
// make new node's next property point to passed in node's next property
// make passed in node's next property's previous property point to new node.
// point passed in node's next property to new node
// point new node's previous property point to passed in node. 
// if passed in node is tail invoke .insertAtEnd(new node)


//.addToHead
 //create a node with the value passed in to Node. set value property to value passed in
 //point next to the head
 //point the head's previous to the newly created node
 //redirect head to newly created node.

 //.removeTail
 // Save the tail value property in a variable
 // Point tail to tail's previous node
 // Change the new Tail's next property to null
 // Return tail's value variable

 //.contains
 // Does current node value match target
 // If value equals target, return true
 // Otherwise, check if the node's next property is valid
 // If valid, pass in the nodes's next property into the function
 // Return false

