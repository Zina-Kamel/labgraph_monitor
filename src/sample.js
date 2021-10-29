import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';


function App() {
  const initialElements = [
    { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: <div>Node 3</div> }, position: { x: 200, y: 200 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '2', target: '3', animated: false },
  ];

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const [elements, setElements] = useState(initialElements)
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ width: "700px", height: "500px" }}>
      <ReactFlow onElementsRemove={onElementsRemove} onConnect={onConnect} elements={elements} />
    </div>
  );
}

export default App;
