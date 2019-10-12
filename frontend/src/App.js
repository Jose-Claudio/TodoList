import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './app.css'

import Todo from './component/todo'
import Menu from './component/menu'

function App() {
  return (
    <div>
      <Menu />
      <Todo />
    </div>
  );
}

export default App;
