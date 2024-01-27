function MinimiseCashFlow(data) {
  const size = data['nodes'].length;
  const net = new Array(size + 1).fill(0);

  console.log(data['edges'].length);
  for (let i = 0; i < data['edges'].length; i++) {
    const edge = data['edges'][i];

    net[edge['to']] += parseInt(edge['label']);
    net[edge['from']] -= parseInt(edge['label']);
  }

  const negHeap = new BinaryHeap();
  const posHeap = new BinaryHeap();

  //put 'to' elements to positive heap and 'from' elements in negative heap
  console.log(net.length);
  console.log(net[0]);
  for (let i = 1; i < net.length; i++) {
    console.log('i : ', i, ', ', parseInt(net[i]));
    if (net[i] < 0) {
      console.log('push inside negative heap');
      negHeap.insert([-net[i], i]);
      net[i] *= -1;
    } else if (net[i] > 0) {
      console.log('push inside positive heap');
      posHeap.insert([net[i], i]);
    }
  }

  const newEdges = [];

  while (!posHeap.empty() && !negHeap.empty()) {
    let negMax = negHeap.extractMax();
    let posMax = posHeap.extractMax();

    let settlementAmount = Math.min(negMax[0], posMax[0]);

    console.log(
      'negMax : ',
      negMax,
      ', posMax : ',
      posMax,
      ', settlementAmount : ',
      settlementAmount
    );
    let debit = negMax[0] - settlementAmount;
    let credit = posMax[0] - settlementAmount;

    newEdges.push({
      from: negMax[1],
      to: posMax[1],
      label: String(settlementAmount),
    });

    net[posMax[1]] -= settlementAmount;
    net[negMax[1]] -= settlementAmount;

    if (debit != 0) {
      negHeap.insert([debit, negMax[1]]);
    }

    if (credit != 0) {
      posHeap.insert([credit, posMax[1]]);
    }
  }

  data = {
    nodes: data['nodes'],
    edges: newEdges,
  };

  return data;
}
