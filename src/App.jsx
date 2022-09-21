import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import UserList from './pages/UserList/UserList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
