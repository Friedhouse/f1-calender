import './App.css';
import { Navigation } from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
