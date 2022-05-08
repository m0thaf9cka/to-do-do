import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoList";
import "./App.scss";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={"appContainer"}>
        <TodoList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
