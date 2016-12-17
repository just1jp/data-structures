describe('Doubly Linked List', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "insertAtEnd", "insertBefore", "insertAfter", "addToHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.insertAtEnd).to.be.a('function');
    expect(doublyLinkedList.insertBefore).to.be.a('function');
    expect(doublyLinkedList.insertAfter).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  // Head and tail should point to the first node that's added

  // When we add a new node to the end of the link, tail should point to this node

});

