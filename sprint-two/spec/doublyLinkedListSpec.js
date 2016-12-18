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
    expect(doublyLinkedList.findNode).to.be.a('function');
    expect(doublyLinkedList.insertAtEnd).to.be.a('function');
    expect(doublyLinkedList.insertBefore).to.be.a('function');
    expect(doublyLinkedList.insertAfter).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should return a node', function() {
    doublyLinkedList.insertAtEnd(5);
    doublyLinkedList.insertAtEnd(4);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.findNode(4).value).to.equal(4);
    expect(doublyLinkedList.findNode(4).previous.value).to.equal(5);
  });  

  it('head and tail should point to the first node that\'s added', function() {
    doublyLinkedList.insertAtEnd(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.insertAtEnd(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.insertAtEnd(3);
    expect(doublyLinkedList.tail.value).to.equal(3);
    doublyLinkedList.insertAtEnd(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('head should stay the same when new nodes are added to end', function() {
    doublyLinkedList.insertAtEnd(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.insertAtEnd(5);
    expect(doublyLinkedList.head.value).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.insertAtEnd(4);
    doublyLinkedList.insertAtEnd(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  // test for insert before
  it('should insert node before another node', function() {
    doublyLinkedList.insertAtEnd(5);
    doublyLinkedList.insertAtEnd(4);
    doublyLinkedList.insertBefore(4, 3);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.contains(3)).to.equal(true);
  });

  // test for insert after
  it('should insert node after another node', function() {
    doublyLinkedList.insertAtEnd(5);
    doublyLinkedList.insertAtEnd(4);
    doublyLinkedList.insertAfter(4, 3);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(3);
    expect(doublyLinkedList.contains(4)).to.equal(true);
  });

  // test for add to head
  it('should update head when node added to head', function() {
    doublyLinkedList.insertAtEnd(5);
    doublyLinkedList.insertAtEnd(4);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });  



});



















