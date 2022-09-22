import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Users from './pages/Users/Users';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
