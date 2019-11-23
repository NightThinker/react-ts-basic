import React from 'react';

import TodoList from './components/TodoList'

const App: React.FC = () => {

  const todos = [{id: '1', text: 'Finsh!'}]
  return (
    <React.Fragment><TodoList items={todos}/></React.Fragment>
  );
}

export default App;
