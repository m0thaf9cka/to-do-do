import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TodoApp from './components/TodoApp';
import './App.scss';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
};

export default App;
