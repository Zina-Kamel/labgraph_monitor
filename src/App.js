import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  {
    id: '4',
    data: { label: <div>My Test Node</div> },
    position: { x: 225, y: 200 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e4-3', source: '4', target: '3' },
];

export default () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={elements} />
  </div>
);