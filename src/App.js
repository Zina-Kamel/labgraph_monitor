import React from 'react';
import ReactFlow from 'react-flow-renderer';

// sample input: [(NoiseGenerator, RollingAverager),(RollingAverager, AveragedNoise),(AveragedNoise, Plot)]
// sample adjacency list: {'NoiseGenerator': ['RollingAverager'], 'RollingAverager': ['AveragedNoise'], 'AveragedNoise': ['Plot']}

// adjacency list generated from NodeList.py file
const adjacencyList = {'NoiseGenerator': ['RollingAverager'], 'RollingAverager': ['AveragedNoise'], 'AveragedNoise': ['Plot']}

const adjacencyListKeys = Object.keys(adjacencyList)

// adding all nodes of the graph without duplicates
const allNodes = Object.keys(adjacencyList)
for (let [, edgeNodes] of Object.entries(adjacencyList)) {
  for (let n of edgeNodes) {
    if (!allNodes.includes(n)) {
      allNodes.push(n)
    }
  }
}

// generating the elements list having nodes with their properties
const elements = []
let i = 0
for (let node of allNodes) {
  elements.push({
    id: node,
    data: { label: node },
    position: { x: 100 + 60 * i, y: 125 + 60 * i },
  })
  i++;
}

// generating the edges between every source and target node
for (let i = 0; i < adjacencyListKeys.length; i++) {
  const node = adjacencyListKeys[i]
  const edgeNodes = adjacencyList[node]
  for (let edgeNode of edgeNodes) {
    elements.push({ id: `e-${node}-${edgeNode}`, source: node, target: edgeNode, animated: true },)
  }
}

export default () => (
  <div style={{ height: 800 }}>
    <ReactFlow elements={elements} />
  </div>
);