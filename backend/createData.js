function createData() {
  const sz = Math.floor(Math.random() * 8) + 2;

  // Adding people to nodes array
  let nodes = [];
  for (let i = 1; i <= sz; i++) {
    nodes.push({ id: i, label: 'Person ' + i });
  }
  nodes = new vis.DataSet(nodes);

  // creating weighted edges with random numbers to create a graph of people lending and borrowing money
  const edges = [];
  for (let i = 1; i <= sz; i++) {
    for (let j = i + 1; j <= sz; j++) {
      if (Math.random() > 0.5) {
        //not adding edge everytime so that the graph does not become dense
        if (Math.random() > 0.5)
          edges.push({
            from: i,
            to: j,
            label: String(Math.floor(Math.random() * 100) + 1),
          });
        else
          edges.push({
            from: j,
            to: i,
            label: String(Math.floor(Math.random() * 100) + 1),
          });
      }
    }
  }
  const data = {
    nodes: nodes,
    edges: edges,
  };
  return data;
}
