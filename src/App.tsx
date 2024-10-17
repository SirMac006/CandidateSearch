import { Outlet } from 'react-router-dom';
import Navbar from './components/Nav';

const App = () => {
  return (
    <div>
      {/* Navigation bar for links between pages */}
      <Navbar />
      
      {/* The Outlet renders the current matched route's element */}
      <Outlet />
    </div>
  );
};

export default App;
