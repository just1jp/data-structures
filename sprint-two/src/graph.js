

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.nodes) {
    for (var i = 0; i < this.nodes[key]; i++) {
      if (this.nodes[key][i] === node) {
        this.nodes[key][i] = null;
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //does fromNode's array contain toNode
  //does toNode's array contain fromNode
  if (this.nodes[fromNode].indexOf(toNode) > -1 && this.nodes[toNode].indexOf(fromNode) > -1) {
    //if true return true
    return true;
  }
  return false;
  //return false 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdgeIndex = this.nodes[fromNode].indexOf(toNode);
  var toNodeEdgeIndex = this.nodes[toNode].indexOf(fromNode);
  this.nodes[fromNode][fromNodeEdgeIndex] = null;
  this.nodes[toNode][toNodeEdgeIndex] = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (key in this.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */













