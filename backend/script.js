// import { BinaryHeap } from './heap.js';
// import { MinimiseCashFlow } from './algorithm.js';
// import { createData } from './createData.js';

onload = function () {
  // create a network
  let curr_data;
  const container = document.getElementById('mynetwork');
  const container2 = document.getElementById('mynetwork2');
  const genNew = document.getElementById('generate-graph');
  const solve = document.getElementById('solve');
  const temptext = document.getElementById('temptext');

  // initialise graph options
  const options = {
    edges: {
      arrows: {
        to: true,
      },
      labelHighlightBold: true,
      font: {
        size: 20,
      },
    },
    nodes: {
      font: '12px arial red',
      scaling: {
        label: true,
      },
      shape: 'dot',
      // icon: {
      //   face: 'FontAwesome',
      //   code: '\uf099',
      //   size: 50,
      //   color: '#f0a30a',
      // },
    },
  };

  // initializing the graph
  let network = new vis.Network(container);
  network.setOptions(options);
  let network2 = new vis.Network(container2);
  network2.setOptions(options);

  genNew.onclick = function () {
    const data = createData();
    curr_data = data;
    network.setData(data);
    temptext.style.display = 'inline';
    container2.style.display = 'none';
  };

  solve.onclick = function () {
    temptext.style.display = 'none';
    container2.style.display = 'inline';
    const solvedData = MinimiseCashFlow(curr_data);
    network2.setData(solvedData);
  };
};
